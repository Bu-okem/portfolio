import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const projects = defineTable({
  name: v.string(),
  description: v.string(),
  shortDescription: v.string(),
  image: v.id("_storage"),
  type: v.string(),
  stack: v.array(v.string()),
  sourceCode: v.string(),
  demoLink: v.string(),
  role: v.string(),
});

const workExperience = defineTable({
  company: v.string(),
  position: v.string(),
  startDate: v.string(),
  endDate: v.string(),
});

export default defineSchema({
  projects,
  workExperience,
});
