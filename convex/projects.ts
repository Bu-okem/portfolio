import type { Id } from "./_generated/dataModel";
import { v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects")
      .withIndex("featured", (q) => q.eq("live", true))
      .collect();

    const projectsWithUrls = await Promise.all(
      projects.map(async (project) => {
        const imageUrl = await ctx.storage.getUrl(project.image);
        const imageUrls = [];
        if (project.images) {
          for (const image of project.images) {
            const imageUrl = await ctx.storage.getUrl(image);
            imageUrls.push(imageUrl);
          }
        }
        return {
          ...project,
          imageUrl: imageUrl,
          imageUrls: imageUrls,
        };
      })
    );

    return projectsWithUrls;
  },
});

export const create = internalMutation({
  args: {
    name: v.string(),
    description: v.string(),
    shortDescription: v.string(),
    image: v.id("_storage"),
    images: v.array(v.id("_storage")),
    type: v.string(),
    stack: v.array(v.string()),
    sourceCode: v.string(),
    demoLink: v.string(),
    role: v.string(),
    live: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("projects", args);
  },
});

/**
 * Small payload for the homepage column: no image URLs, since it renders only
 * a title, a short description and a label.
 */
export const getFeatured = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_featured", (q) => q.eq("live", true).eq("featured", true))
      .take(args.limit ?? 2);

    return projects.map((project) => ({
      _id: project._id,
      name: project.name,
      shortDescription: project.shortDescription,
    }));
  },
});

/** Run with: npx convex run projects:setFeatured '{"name":"crag","featured":true}' */
export const setFeatured = internalMutation({
  args: { name: v.string(), featured: v.boolean() },
  handler: async (ctx, args) => {
    const project = await ctx.db
      .query("projects")
      .withIndex("by_name", (q) => q.eq("name", args.name))
      .unique();

    if (!project) throw new Error(`No project named "${args.name}"`);

    await ctx.db.patch(project._id, { featured: args.featured });
  },
});

export const getProjectByName = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const project = await ctx.db
      .query("projects")
      .withIndex("by_name", (q) => q.eq("name", args.name))
      .unique();

    async function getImageUrl(imageId: Id<"_storage">) {
      const imageUrl = await ctx.storage.getUrl(imageId);
      return imageUrl;
    }

    if (!project) {
      return null;
    }

    const imageUrl = await getImageUrl(project.image);
    const imageUrls = [];
    for (const image of project.images) {
      const imageUrl = await getImageUrl(image);
      imageUrls.push(imageUrl);
    }

    return {
      ...project,
      imageUrl: imageUrl,
      imageUrls: imageUrls,
    };
  },
});
