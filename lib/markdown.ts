import DOMPurify from 'isomorphic-dompurify'
import { marked } from 'marked'

/**
 * Renders markdown to HTML that is safe to pass to v-html.
 *
 * marked does not sanitize: raw HTML in the source passes through untouched and
 * `cleanUrl` only URI-encodes hrefs, so `javascript:` links survive. Everything
 * it produces goes through DOMPurify before it reaches the DOM.
 */
export function renderMarkdown(markdown: string | undefined | null): string {
  if (!markdown) return ''

  const html = marked.parse(markdown, { async: false })

  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['target', 'rel'],
    FORBID_TAGS: ['style', 'form', 'input', 'button'],
    FORBID_ATTR: ['style'],
  })
}
