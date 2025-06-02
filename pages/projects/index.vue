<template>
  <div class="mt-[100px] mx-5 pb-9">
    <ProjectsLoading v-if="loading" />
    <masonry-wall v-else :items="projects" :column-width="250" :gap="20">
      <template #default="{ item }">
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
          class="">
          <Drawer>
            <DrawerTrigger @click="setPath(item.id)">
              <ProjectCard
                :name="item.fields.name"
                :description="item.fields.shortDescription"
                :link="item.fields.link"
                :type="item.fields.type" />
            </DrawerTrigger>
            <DrawerContent
              class="h-[calc(100dvh-20px)] bg-background rounded-t-sm text-foreground">
              <div
                class="hidden lg:flex items-center justify-end absolute top-5 right-5">
                <DrawerClose>
                  <Button
                    variant="outline"
                    @click="removePath"
                    class="cursor-pointer">
                    <Icon name="ic:round-close" size="24" />
                  </Button>
                </DrawerClose>
              </div>
              <section
                class="mt-2 lg:mt-10 p-5 lg:pt-0 lg:flex relative min-h-screen overflow-y-scroll lg:overflow-y-hidden">
                <div class="lg:w-[26vw] lg:absolute top-10 left-5 mb-5 lg:mb-0">
                  <div class="">
                    <h1
                      class="text-3xl lg:text-4xl font-semibold mb-5 lg:mb-10 font-header"
                      style="word-break: break-word">
                      {{ item.fields.name }}
                    </h1>
                    <p class="font-extralight text-secondary-text mb-2">
                      {{ item.fields.shortDescription }}
                    </p>
                    <p
                      class="font-extralight text-secondary-text italic uppercase">
                      {{ item.fields.role }}
                    </p>
                  </div>
                </div>
                <div
                  class="lg:pr-2 lg:pb-10 lg:w-2/3 lg:absolute right-5 top-10 h-auto lg:h-[calc(100vh-100px)] overflow-y-scroll custom-scrollbar">
                  <div class="">
                    <div class="h-fit">
                      <img
                        :src="item.fields.image[0].url"
                        alt=""
                        class="w-full rounded-sm" />
                    </div>
                    <div class="flex gap-3 mt-5">
                      <p
                        class="px-2 py-1 border border-accent rounded-sm text-xs"
                        v-for="tag in item.fields.stack?.split(',')">
                        {{ tag }}
                      </p>
                    </div>
                    <div class="flex gap-3 mt-5 mb-10">
                      <a
                        :href="item.fields.sourcecode"
                        v-if="item.fields.sourcecode">
                        <span class="h-fit flex gap-x-1 py-1">
                          <p>Source Code</p>
                          <Icon
                            name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                            size="9"
                            class="h-2" />
                        </span>
                      </a>
                      <a :href="item.fields.link">
                        <span class="h-fit flex gap-x-1 py-1">
                          <p>Live Project</p>
                          <Icon
                            name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
                            size="9"
                            class="h-2" />
                        </span>
                      </a>
                    </div>
                    <div class="mt-10 pb-52 lg:pb-0">
                      <h3
                        class="text-2xl lg:text-3xl font-medium mb-5 font-header">
                        Description
                      </h3>
                      <div
                        class="font-extralight markdown"
                        v-html="marked.parse(item.fields.description)"></div>
                    </div>
                  </div>
                </div>
              </section>
            </DrawerContent>
          </Drawer>
        </motion.div>
      </template>
    </masonry-wall>
  </div>
</template>

<script setup>
import axios from 'axios';
import { marked } from 'marked';
import { motion } from 'motion-v';
import { useConfig } from '~/composables/useConfig';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useProjects } from '~/composables/states';

useHead({
  title: `Buokem - Projects`,
});

const loading = ref(true);
const config = useConfig();

const headers = {
  Authorization: `Bearer ${config.apiKey}`,
};

const fetchProjects = async () => {
  try {
    const res = await axios.get(
      `https://api.airtable.com/v0/${config.base}/${config.projectsTableId}`,
      {
        headers: headers,
      }
    );
    const { records } = res.data;
    projects.value = records;
    loading.value = false;
  } catch (err) {
    setTimeout(fetchProjects, 10000);
    console.log('Error loading projects', err);
  }
};

const projects = useProjects();

onMounted(() => {
  fetchProjects();
});

const setPath = (path) => {
  window.history.pushState({}, '', `/projects/${path}`);
  useHead({
    title: `Project`,
  });
};

const removePath = () => {
  window.history.pushState({}, '', useRoute().path);
  useHead({
    title: `Buokem - Projects`,
  });
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--accent, #5c5c5c);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--accent-dark, #696969);
}
</style>
