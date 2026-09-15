<template>
  <div
    v-if="project === null"
    class="bg-background h-[calc(100dvh-80px)] text-center flex flex-col items-center justify-center gap-4"
  >
    <h1 class="text-3xl lg:text-4xl font-semibold font-header text-heading">
      Project not found
    </h1>
    <p class="text-lg lg:text-xl font-medium font-body">
      Sorry, we couldn't find the project you're looking for.
    </p>
    <NuxtLink
      to="/projects"
      class="p-2 border-border border-solid border font-bold hover:bg-foreground hover:text-background transition-colors duration-300"
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
              <motion.span
                :initial="{ y: 50 }"
                :animate="{ y: 0 }"
                :transition="{ delay: 0.3 + index * 0.04, duration: 0.6 }"
                class="block text-3xl lg:text-4xl font-semibold font-header text-heading capitalize"
                style="word-break: break-word"
              >
                {{ text }}<span>&nbsp;</span>
              </motion.span>
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
                :transition="{ delay: 0.3 + index * 0.02, duration: 0.6 }"
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
          <Carousel>
            <CarouselContent>
                <CarouselItem v-for="(image, index) in project.imageUrls" :key="index">
                  <NuxtImg
                    :src="image"
                    :alt="`Screenshot of ${project.name} project`"
                    class="w-full rounded-sm"
                    sizes="xs:100vw sm:100vw md:100vw lg:66vw xl:66vw xxl:66vw"
                    format="webp"
                    :loading="index === 0 ? 'eager' : 'lazy'"
                    :fetchpriority="index === 0 ? 'high' : 'auto'"
                    decoding="async"
                  />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="left-2" v-if="project.imageUrls.length > 1"/>
            <CarouselNext class="right-2" v-if="project.imageUrls.length > 1"/>
          </Carousel>
          <div class="flex gap-3 mt-5">
            <p
              class="px-2 py-1 border border-border rounded-sm text-xs"
              v-for="tag in project.stack"
            >
              {{ tag }}
            </p>
          </div>
          <div class="flex gap-3 mt-5 mb-10">
            <a
              :href="project.sourceCode"
              v-if="project.sourceCode"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 hover:underline"
              aria-label="View source code (opens in new tab)"
            >
              <span>Source Code</span>
              <Icon
                name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                size="9"
                class="h-2"
                aria-hidden="true"
              />
            </a>
            <a
              :href="project.demoLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 hover:underline"
              aria-label="View live project (opens in new tab)"
            >
              <span>Live Project</span>
              <Icon
                name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                size="9"
                class="h-2"
                aria-hidden="true"
              />
            </a>
          </div>
          <div class="mt-10 pb-5 lg:pb-12">
            <h2 class="text-3xl font-header font-medium mb-5 text-heading">Description</h2>
            <div
              class="font-extralight markdown"
              v-html="renderMarkdown(project.description)"
            ></div>
          </div>
        </motion.div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { api } from "~/convex/_generated/api";
import { useConvexHttpClient } from "convex-vue";
import { renderMarkdown } from "~/lib/markdown";
import { motion } from "motion-v";

definePageMeta({
  layout: "project-layout",
});

const route = useRoute();
const projectNameParam = route.params.name;
const projectName = projectNameParam.split("-").join(" ");

// Fetched over Convex's HTTP client (not the websocket subscription) so the
// project is present in the server-rendered HTML and can drive the meta tags.
const convex = useConvexHttpClient();
const { data: project, status } = await useAsyncData(
  `project:${projectNameParam}`,
  () => convex.query(api.projects.getProjectByName, { name: projectName })
);
const loading = computed(() => status.value === "pending");

// An unknown project should answer 404, not 200 with a "not found" body.
if (import.meta.server && !project.value) {
  setResponseStatus(useRequestEvent(), 404);
}

const url = useRequestURL();
const canonical = `${url.origin}/projects/${projectNameParam}`;
const titleCase = (value) =>
  value.replace(/\b\w/g, (character) => character.toUpperCase());

// Search results cut off around 160 characters; keep the tag close to that.
const truncate = (value, limit = 155) =>
  !value || value.length <= limit
    ? value
    : `${value.slice(0, value.lastIndexOf(" ", limit))}…`;

useSeoMeta({
  title: () =>
    project.value ? titleCase(project.value.name) : "Project not found",
  description: () =>
    truncate(project.value?.shortDescription) ??
    "This project could not be found on Buokem's portfolio.",
  ogType: "article",
  ogUrl: canonical,
  ogTitle: () =>
    project.value ? `${titleCase(project.value.name)} - Buokem` : "Project not found",
  ogDescription: () => truncate(project.value?.shortDescription),
  ogImage: () => project.value?.imageUrl,
  ogImageAlt: () =>
    project.value ? `Screenshot of the ${project.value.name} project` : undefined,
  twitterCard: "summary_large_image",
  twitterTitle: () =>
    project.value ? `${titleCase(project.value.name)} - Buokem` : "Project not found",
  twitterDescription: () => truncate(project.value?.shortDescription),
  twitterImage: () => project.value?.imageUrl,
  robots: () => (project.value ? "index, follow" : "noindex, follow"),
});

useHead({
  link: [{ rel: "canonical", href: canonical }],
});
</script>
