import { ConvexHttpClient } from "convex/browser";
import { api } from "~/convex/_generated/api";

/**
 * Feeds the live projects into the sitemap. /projects/[name] is a dynamic
 * route, so the module cannot discover these on its own - without this the
 * sitemap would list only the static pages.
 *
 * The Convex URL comes from runtimeConfig, not process.env: nitro only loads
 * .env in dev, so process.env.CONVEX_URL is undefined in a built server.
 */
export default defineSitemapEventHandler(async () => {
  const convexUrl = useRuntimeConfig().public?.convex?.url;
  if (!convexUrl) {
    console.warn("[sitemap] no Convex URL configured; project pages omitted");
    return [];
  }

  const client = new ConvexHttpClient(convexUrl);
  const projects = await client.query(api.projects.get);

  return projects.map((project: { name: string }) => ({
    loc: `/projects/${project.name.split(" ").join("-")}`,
    changefreq: "monthly" as const,
    priority: 0.8,
  }));
});
