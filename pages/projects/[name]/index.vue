<template>
  <div
    v-if="project === null"
    class="bg-background h-[calc(100dvh-80px)] text-center flex flex-col items-center justify-center gap-4"
  >
    <h3 class="text-3xl lg:text-4xl font-semibold font-header">
      Project not found
    </h3>
    <p class="text-lg lg:text-xl font-medium font-body">
      Sorry, we couldn't find the project you're looking for.
    </p>
    <NuxtLink
      to="/projects"
      class="p-2 border-accent border-solid border font-bold hover:bg-accent hover:text-background transition-colors duration-300"
    >
      Back to projects
    </NuxtLink>
  </div>
  <div v-else>
    <NuxtLink
      to="/projects"
      class="block w-[90vw] lg:w-auto py-5 lg:py-0 bg-background fixed 3xl:absolute top-0 lg:top-5 left-5 lg:left-10 z-50 font-bold"
    >
      Back to projects
    </NuxtLink>

    <div class="bg-background">
      <ProjectLoading v-if="loading" />

      <section v-else class="relative min-h-screen mt-10">
        <div class="lg:w-[26vw] 3xl:w-[26%] lg:fixed 3xl:absolute mb-6">
          <span class="mb-5 lg:mb-10">
            <h1 class="sr-only">{{ project.name }}</h1>
            <span
              aria-hidden="true"
              class="inline-block overflow-hidden"
              v-for="(text, index) in project.name.split(' ')"
              :key="index"
            >
              <motion.h1
                :initial="{ y: 50 }"
                :animate="{ y: 0 }"
                :transition="{ delay: 0.3, duration: 0.6 }"
                class="text-3xl lg:text-4xl font-semibold font-header capitalize"
                style="word-break: break-word"
              >
                {{ text }}<span>&nbsp;</span>
              </motion.h1>
            </span>
          </span>
          <div class="mb-2">
            <p class="sr-only">{{ project.shortDescription }}</p>
            <span
              aria-hidden="true"
              class="inline-block overflow-hidden"
              v-for="(text, index) in project.shortDescription.split(' ')"
              :key="index"
            >
              <motion.p
                :initial="{ y: 50 }"
                :animate="{ y: 0 }"
                :transition="{ delay: 0.3, duration: 0.6 }"
                class="font-extralight text-secondary-text"
              >
                {{ text }}<span>&nbsp;</span>
              </motion.p>
            </span>
          </div>
          <span class="block overflow-hidden">
            <motion.p
              :initial="{ y: 50 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.3, duration: 0.6 }"
              class="font-extralight text-secondary-text italic uppercase"
            >
              {{ project.role }}
            </motion.p>
          </span>
        </div>
        <!--  -->
        <motion.div
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.3, duration: 0.6 }"
          class="lg:w-2/3 lg:absolute right-0 top-0 h-full"
        >
          <img :src="project.imageUrl" alt="" class="w-full rounded-sm" />
          <div class="flex gap-3 mt-5">
            <p
              class="px-2 py-1 border border-accent rounded-sm text-xs"
              v-for="tag in project.stack"
            >
              {{ tag }}
            </p>
          </div>
          <div class="flex gap-3 mt-5 mb-10">
            <a :href="project.sourceCode" v-if="project.sourceCode">
              <span class="h-fit flex gap-x-1 py-1">
                <p>Source Code</p>
                <Icon
                  name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                  size="9"
                  class="h-2"
                />
              </span>
            </a>
            <a :href="project.link">
              <span class="h-fit flex gap-x-1 py-1">
                <p>Live Project</p>
                <Icon
                  name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                  size="9"
                  class="h-2"
                />
              </span>
            </a>
          </div>
          <div class="mt-10 pb-5 lg:pb-12">
            <h3 class="text-3xl font-header font-medium mb-5">Description</h3>
            <div
              class="font-extralight markdown"
              v-html="marked.parse(project.description)"
            ></div>
          </div>
        </motion.div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { api } from "~/convex/_generated/api";
import { marked } from "marked";
import { motion } from "motion-v";

definePageMeta({
  layout: "project-layout",
});
useHead({
  title: `Buokem`,
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "favicon.png",
    },
  ],
});
const route = useRoute();
const projectNameParam = route.params.name;
const projectName = projectNameParam.split("-").join(" ");
const { data: project } = useConvexQuery(api.projects.getProjectByName, {
  name: projectName,
});
const loading = computed(() => project.value === undefined);
</script>
