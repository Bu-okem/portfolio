<template>
  <div>
    <NuxtLink
      to="/projects"
      class="block w-[90vw] lg:w-auto py-5 lg:py-0 bg-background fixed 3xl:absolute top-0 lg:top-5 left-5 lg:left-10 z-50 font-bold">
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
              :key="index">
              <motion.h1
                :initial="{ y: 50 }"
                :animate="{ y: 0 }"
                :transition="{ delay: 0.3, duration: 0.6 }"
                class="text-3xl lg:text-4xl font-semibold font-header"
                style="word-break: break-word">
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
              :key="index">
              <motion.p
                :initial="{ y: 50 }"
                :animate="{ y: 0 }"
                :transition="{ delay: 0.3, duration: 0.6 }"
                class="font-extralight text-secondary-text">
                {{ text }}<span>&nbsp;</span>
              </motion.p>
            </span>
          </div>
          <span class="block overflow-hidden">
            <motion.p
              :initial="{ y: 50 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.3, duration: 0.6 }"
              class="font-extralight text-secondary-text italic uppercase">
              {{ project.role }}
            </motion.p>
          </span>
        </div>
        <!--  -->
        <motion.div
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.3, duration: 0.6 }"
          class="lg:w-2/3 lg:absolute right-0 top-0 h-full">
          <img :src="project.image[0].url" alt="" class="w-full rounded-sm" />
          <div class="flex gap-3 mt-5">
            <p
              class="px-2 py-1 border border-accent rounded-sm text-xs"
              v-for="tag in project.stack?.split(',')">
              {{ tag }}
            </p>
          </div>
          <div class="flex gap-3 mt-5 mb-10">
            <a :href="project.sourcecode" v-if="project.sourcecode">
              <span class="h-fit flex gap-x-1 py-1">
                <p>Source Code</p>
                <Icon
                  name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                  size="9"
                  class="h-2" />
              </span>
            </a>
            <a :href="project.link">
              <span class="h-fit flex gap-x-1 py-1">
                <p>Live Project</p>
                <Icon
                  name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                  size="9"
                  class="h-2" />
              </span>
            </a>
          </div>
          <div class="mt-10 pb-5 lg:pb-12">
            <h3 class="text-3xl font-header font-medium mb-5">Description</h3>
            <div
              class="font-extralight markdown"
              v-html="marked.parse(project.description)"></div>
          </div>
        </motion.div>
      </section>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { marked } from 'marked';
import { motion } from 'motion-v';
import { useConfig } from '~/composables/useConfig';

const config = useConfig();
const loading = ref(true);
const project = ref(null);
const route = useRoute();
definePageMeta({
  layout: 'project-layout',
});
useHead({
  title: `Buokem`,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon.png',
    },
  ],
});
const url = route.fullPath;
const projectId = url.split('/').pop() || '';
const fetchProject = async (projectId) => {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${config.base}/${config.projectsTableId}/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
        },
      }
    );
    const data = await response.data;
    project.value = data.fields;
    loading.value = false;
    useHead({
      title: `Buokem - ${project.value?.name}`,
    });
    return data;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
};

onMounted(() => {
  fetchProject(projectId);
});
</script>
