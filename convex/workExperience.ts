import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workExperience").collect();
  },
});

export const create = mutation({
  args: {
    company: v.string(),
    position: v.string(),
    startDate: v.string(),
    endDate: v.string(),
  },
  handler: (ctx, args) => {
    ctx.db.insert("workExperience", args)
  }
})
