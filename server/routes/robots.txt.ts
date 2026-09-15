/**
 * Served dynamically rather than from public/ so the Sitemap line always
 * points at the host the request came in on - no hardcoded domain to update
 * when the site moves.
 */
export default defineEventHandler((event) => {
  const origin = getRequestURL(event).origin;
  setHeader(event, "content-type", "text/plain; charset=utf-8");

  return ["User-Agent: *", "Disallow:", "", `Sitemap: ${origin}/sitemap.xml`, ""].join("\n");
});
