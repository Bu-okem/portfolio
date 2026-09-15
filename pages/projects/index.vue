<template>
  <main class="mt-20 mx-5 pb-9 min-h-[71dvh] h-[84%]">
    <h1 class="sr-only">Projects - Buokem's Portfolio</h1>
    <ProjectsLoading v-if="loading" />
    <div v-else>
      <!-- Filters -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
        <!-- Type pills -->
        <div
          class="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by type"
        >
          <button
            v-for="type in projectTypes"
            :key="type"
            @click="selectedType = type"
            class="px-4 py-1.5 text-sm border rounded-sm transition-all duration-300 cursor-pointer capitalize"
            :class="
              selectedType === type
                ? 'border-foreground bg-foreground text-background font-medium'
                : 'border-border text-secondary-text hover:border-foreground hover:text-foreground'
            "
            :aria-pressed="selectedType === type"
          >
            {{ type }}
          </button>
        </div>

        <!-- Stack dropdown -->
        <div class="relative" ref="dropdownRef">
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="flex items-center gap-2 px-4 py-1.5 text-sm border border-border rounded-sm transition-all duration-300 cursor-pointer hover:border-foreground"
            :class="
              selectedStack !== 'all'
                ? 'border-foreground text-foreground'
                : 'text-secondary-text'
            "
            aria-haspopup="listbox"
            :aria-expanded="dropdownOpen"
          >
            <span>{{
              selectedStack === "all" ? "Technology" : selectedStack
            }}</span>
            <Icon
              name="iconamoon:arrow-down-2-light"
              size="16"
              class="transition-transform duration-200"
              :class="dropdownOpen ? 'rotate-180' : ''"
              aria-hidden="true"
            />
          </button>
          <div
            v-show="dropdownOpen"
            class="absolute left-0 lg:left-auto lg:right-0 top-full mt-1 z-30 min-w-[180px] max-h-[240px] overflow-y-auto border border-border bg-background rounded-sm shadow-lg"
            role="listbox"
            aria-label="Select technology"
          >
            <button
              v-for="stack in stackOptions"
              :key="stack"
              @click="selectStack(stack)"
              class="w-full text-left px-4 py-2 text-sm transition-colors duration-200 cursor-pointer capitalize"
              :class="
                selectedStack === stack
                  ? 'bg-foreground text-background font-medium'
                  : 'text-secondary-text hover:bg-accent/20 hover:text-foreground'
              "
              role="option"
              :aria-selected="selectedStack === stack"
            >
              {{ stack }}
            </button>
          </div>
        </div>
      </div>

      <masonry-wall
        v-if="filteredProjects.length > 0"
        :items="filteredProjects"
        :column-width="250"
        :gap="20"
        :ssr-columns="1"
      >
        <template #default="{ item }">
          <motion.div
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6 }"
            class=""
          >
            <Drawer
              :open="openSlug === slugify(item.name)"
              @update:open="(isOpen) => setDrawer(item, isOpen)"
            >
              <DrawerTrigger
                :aria-label="`View details for ${item.name} project`"
              >
                <ProjectCard
                  :name="item.name"
                  :description="item.shortDescription"
                  :type="item.type"
                  :aria-label="`${item.name} - ${item.type}`"
                />
              </DrawerTrigger>
              <DrawerContent
                class="h-[calc(100dvh-20px)] bg-background rounded-t-sm text-foreground"
              >
                <div
                  class="hidden lg:flex items-center justify-end absolute top-5 right-5"
                >
                  <DrawerClose>
                    <Button
                      variant="outline"
                      class="cursor-pointer"
                      aria-label="Close project details"
                    >
                      <Icon
                        name="ic:round-close"
                        size="24"
                        aria-hidden="true"
                      />
                    </Button>
                  </DrawerClose>
                </div>
                <section
                  class="mt-2 lg:mt-10 p-5 lg:pt-0 lg:flex relative min-h-screen overflow-y-scroll lg:overflow-y-hidden"
                >
                  <div
                    class="lg:w-[26vw] lg:absolute top-10 left-5 mb-5 lg:mb-0"
                  >
                    <div class="">
                      <h2
                        class="text-3xl lg:text-4xl font-semibold mb-5 lg:mb-10 font-header text-heading capitalize"
                        style="word-break: break-word"
                      >
                        {{ item.name }}
                      </h2>
                      <p class="font-extralight text-secondary-text mb-2">
                        {{ item.shortDescription }}
                      </p>
                      <p
                        class="font-extralight text-secondary-text italic uppercase"
                      >
                        {{ item.role }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="lg:pr-2 lg:pb-10 lg:w-2/3 lg:absolute right-5 top-10 h-auto lg:h-[calc(100vh-100px)] overflow-y-scroll custom-scrollbar"
                  >
                    <div class="">
                      <div
                        class="h-fit relative aspect-video bg-foreground rounded-sm overflow-hidden"
                      >
                      <Carousel>
                          <CarouselContent>
                        <CarouselItem v-for="(image, index) in item.imageUrls" :key="index">
                            <NuxtImg
                              :src="image"
                              :alt="`Screenshot of ${item.name} project`"
                              class="w-full h-full object-contain transition-opacity duration-500"
                              :class="{
                                'opacity-0': !loadedImages[`${item._id}-${index}`],
                                'opacity-100': loadedImages[`${item._id}-${index}`],
                              }"
                              sizes="xs:100vw sm:100vw md:100vw lg:66vw xl:66vw xxl:66vw"
                              format="webp"
                              loading="lazy"
                              decoding="async"
                              @load="handleLoad(`${item._id}-${index}`)"
                            />
                        </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious class="left-2" v-if="item.imageUrls.length > 1"/>
                        <CarouselNext class="right-2" v-if="item.imageUrls.length > 1"/>
                      </Carousel>
                      </div>
                      <div class="flex gap-3 mt-5">
                        <p
                          class="px-2 py-1 border border-border rounded-sm text-xs"
                          v-for="tag in item.stack"
                        >
                          {{ tag }}
                        </p>
                      </div>
                      <div class="flex gap-3 mt-5 mb-10">
                        <a
                          :href="item.sourceCode"
                          v-if="item.sourceCode"
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
                          :href="item.demoLink"
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
                      <div class="mt-10 pb-52 lg:pb-0">
                        <h3
                          class="text-2xl lg:text-3xl font-medium mb-5 font-header text-heading"
                        >
                          Description
                        </h3>
                        <div
                          class="font-extralight markdown"
                          v-html="renderMarkdown(item.description)"
                        ></div>
                      </div>
                    </div>
                  </div>
                </section>
              </DrawerContent>
            </Drawer>
          </motion.div>
        </template>
      </masonry-wall>
      <div v-else>
        <h2 class="text-2xl mt-12 text-heading">Couldn't find a match</h2>
        <p>
          No records match the selected criteria. Try removing one or more
          active filters.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { api } from "../convex/_generated/api";
import { useConvexHttpClient } from "convex-vue";
import { renderMarkdown } from "~/lib/markdown";
import { motion } from "motion-v";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useProjects } from "~/composables/states";
import { ProjectsLoading } from "#components";

const loadedImages = reactive({});

const handleLoad = (id) => {
  loadedImages[id] = true;
};

// Fetched over Convex's HTTP client (not the websocket subscription) so the
// project list is present in the server-rendered HTML for crawlers.
const convex = useConvexHttpClient();
const { data, status } = await useAsyncData("projects", () =>
  convex.query(api.projects.get)
);
const loading = computed(() => status.value === "pending");

const projects = useProjects();
watchEffect(() => {
  if (data.value) {
    projects.value = data.value;
  }
});

const route = useRoute();
const router = useRouter();

// Filter by project type
const selectedType = ref("all");
const selectedStack = ref("all");
const dropdownOpen = ref(false);
const dropdownRef = ref(null);

// Close dropdown when clicking outside
onClickOutside(dropdownRef, () => {
  dropdownOpen.value = false;
});

const selectStack = (stack) => {
  selectedStack.value = stack;
  dropdownOpen.value = false;
};

const projectTypes = computed(() => {
  if (!projects.value) return ["all"];
  const types = [...new Set(projects.value.map((p) => p.type).filter(Boolean))];
  return ["all", ...types];
});

const stackOptions = computed(() => {
  if (!projects.value) return ["all"];
  const stacks = [...new Set(projects.value.flatMap((p) => p.stack || []))];
  return ["all", ...stacks.sort()];
});

const filteredProjects = computed(() => {
  if (!projects.value) return [];
  return projects.value.filter((p) => {
    const matchesType =
      selectedType.value === "all" || p.type === selectedType.value;
    const matchesStack =
      selectedStack.value === "all" ||
      (p.stack && p.stack.includes(selectedStack.value));
    return matchesType && matchesStack;
  });
});

const slugify = (name) => name.split(" ").join("-");

// The open drawer is kept in the URL as ?open=<slug> and driven through
// vue-router rather than history.pushState. Router and URL stay in sync, so
// every close path (button, Esc, overlay, swipe) clears it, and the browser
// Back button closes the drawer instead of leaving the page.
// Only synced after mount: the drawer teleports to <body>, so there is nothing
// to server-render. /projects/<slug> remains the shareable, indexable page.
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const openSlug = computed(() =>
  mounted.value ? route.query.open ?? null : null
);

const setDrawer = (item, isOpen) => {
  const slug = slugify(item.name);
  if (isOpen) {
    router.push({ query: { ...route.query, open: slug } });
  } else if (route.query.open === slug) {
    const { open, ...rest } = route.query;
    router.replace({ query: rest });
  }
};

const openProject = computed(() =>
  (projects.value ?? []).find((item) => slugify(item.name) === openSlug.value)
);

// Set page metadata for SEO and accessibility
useHead({
  title: () => openProject.value?.name ?? "Projects",
  meta: [
    {
      name: "description",
      content:
        "Explore the portfolio projects of Buokem, showcasing web development and design work.",
    },
  ],
});
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
