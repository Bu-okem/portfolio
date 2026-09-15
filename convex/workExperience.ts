import { v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workExperience").collect();
  },
});

export const create = internalMutation({
  args: {
    company: v.string(),
    position: v.string(),
    startDate: v.string(),
    endDate: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("workExperience", args);
  },
});
