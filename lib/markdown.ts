import DOMPurify from 'dompurify'
import { Marked } from 'marked'

const SAFE_URL_PATTERN = /^(?:https?:|mailto:|tel:|\/|#)/i

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sanitizeUrl(href: string | null | undefined): string {
  if (!href) return ''
  const trimmed = href.trim()
  return SAFE_URL_PATTERN.test(trimmed) ? escapeHtml(trimmed) : ''
}

const markedInstance = new Marked({
  renderer: {
    // Escape raw HTML in markdown source so SSR (including Cloudflare Workers,
    // which has no DOM/JSDOM) never emits unsanitized tags or event handlers.
    html({ text }) {
      return escapeHtml(text)
    },
    link({ href, title, tokens }) {
      const safeHref = sanitizeUrl(href)
      const body = this.parser.parseInline(tokens)
      if (!safeHref) return body
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : ''
      return `<a href="${safeHref}"${titleAttr} target="_blank" rel="noopener noreferrer">${body}</a>`
    },
    image({ href, title, text }) {
      const safeSrc = sanitizeUrl(href)
      if (!safeSrc) return escapeHtml(text || '')
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : ''
      return `<img src="${safeSrc}" alt="${escapeHtml(text || '')}"${titleAttr} loading="lazy">`
    },
  },
})

/**
 * Renders markdown to HTML that is safe to pass to v-html across both
 * Cloudflare Workers SSR (where `window` and `jsdom` are unavailable) and
 * the browser.
 *
 * `isomorphic-dompurify` crashes Cloudflare Workers on SSR because its worker
 * bundle (`dist/browser.mjs`) calls `DOMPurify.sanitize.bind(DOMPurify)` at
 * module load time when `window` is undefined (`DOMPurify.sanitize` is
 * undefined outside a browser DOM), while its Node entry pulls in `jsdom`.
 */
export function renderMarkdown(markdown: string | undefined | null): string {
  if (!markdown) return ''

  const html = markedInstance.parse(markdown, { async: false }) as string

  if (typeof window !== 'undefined' && DOMPurify.isSupported) {
    return DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
      ADD_ATTR: ['target', 'rel', 'loading'],
      FORBID_TAGS: ['style', 'form', 'input', 'button'],
      FORBID_ATTR: ['style'],
    })
  }

  return html
}
