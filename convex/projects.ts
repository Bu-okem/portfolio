import { Id, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").collect();

    const projectsWithUrls = await Promise.all(
      projects.map(async (project) => {
        const imageUrl = await ctx.storage.getUrl(project.image);

        return {
          ...project,
          imageUrl: imageUrl,
        };
      })
    );

    return projectsWithUrls;
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    shortDescription: v.string(),
    image: v.id("_storage"),
    type: v.string(),
    stack: v.array(v.string()),
    sourceCode: v.string(),
    demoLink: v.string(),
    role: v.string()
  },
  handler: (ctx, args) => {
    ctx.db.insert("projects", args)
  }
})

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

    return {
      ...project,
      imageUrl: imageUrl,
    };
  },
});
