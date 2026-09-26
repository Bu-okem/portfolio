<template>
  <main class="grid grid-cols-1 lg:grid-cols-11 lg:h-[91%]">
    <div
      class="relative p-6 pt-20 text-4xl lg:text-5xl lg:col-span-4 lg:row-end-2 lg:flex flex-col justify-end"
    >
      <h1 class="sr-only">Buokem - Software Developer</h1>
      <span aria-hidden="true" class="block overflow-hidden">
        <motion.span
          :initial="{ y: 50 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.5, duration: 0.6 }"
          class="block font-semibold font-header text-heading"
          >Software</motion.span
        >
      </span>
      <span aria-hidden="true" class="block overflow-hidden">
        <motion.span
          :initial="{ y: 50 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.6, duration: 0.6 }"
          class="block font-light font-header text-heading"
          >Developer</motion.span
        >
      </span>

      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.3 }"
        class="absolute top-0 left-0 w-[1px] bg-border hidden lg:block"
      ></motion.div>
      <motion.div
        :initial="{ width: 0 }"
        :animate="{ width: '100%' }"
        :transition="{ duration: 0.3 }"
        class="absolute bottom-0 left-0 w-full h-[1px] bg-border"
      ></motion.div>
      <!--  -->
    </div>
    <!--  -->
    <div
      class="relative p-6 pt-20 text-6xl hidden lg:col-span-3 lg:row-end-2 lg:flex flex-col justify-end"
    >
      <span class="block overflow-hidden" aria-hidden="true">
        <motion.span
          :initial="{ y: 54 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.7, duration: 0.6 }"
          class="block text-6xl font-ubuntu-mono"
          aria-hidden="true"
          >b_</motion.span
        >
      </span>
      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.6 }"
        class="absolute top-0 left-0 h-full w-[1px] bg-border"
      ></motion.div>
      <motion.div
        :initial="{ width: 0 }"
        :animate="{ width: '100%' }"
        :transition="{ delay: 0.25, duration: 0.3 }"
        class="absolute bottom-0 left-0 w-full h-[1px] bg-border"
      ></motion.div>
      <!--  -->
    </div>
    <!--  -->

    <NuxtLink
      to="/about"
      class="group p-6 pt-[100px] lg:pl-10 lg:pb-14 lg:pr-20 relative lg:col-span-7 lg:row-end-3 lg:flex flex-col justify-end"
      aria-label="Learn more about me"
    >
      <div
        class="h-fit absolute top-5 lg:top-16 right-5 lg:right-10 group-hover:lg:top-10 group-hover:lg:right-6 duration-300 overflow-hidden block"
      >
        <motion.span
          :initial="{ y: 40 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.6, duration: 0.6 }"
          class="block"
        >
          <Icon
            name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
            size="24"
          />
        </motion.span>
      </div>
      <div class="overflow-hidden">
        <p class="sr-only">{{ aboutText }}</p>
        <motion.div
          :initial="{ y: 10 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.8 }"
          class="text-xl lg:text-2xl font-extralight line-clamp-4 font-header"
        >
          <span
            aria-hidden="true"
            class="overflow-hidden inline-block"
            v-for="(text, index) in aboutText.split(' ')"
            :key="index"
          >
            <motion.span
              :initial="{ y: 54 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.7 + index * 0.02, duration: 0.6 }"
              class="block"
              >{{ text }}<span>&nbsp;</span>
            </motion.span>
          </span>
        </motion.div>
      </div>

      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ delay: 0.25, duration: 0.3 }"
        class="absolute top-0 left-0 h-full w-[1px] bg-border hidden lg:block"
      >
      </motion.div>
      <motion.div
        :initial="{ width: 0 }"
        :animate="{ width: '100%' }"
        :transition="{ duration: 0.3 }"
        class="absolute bottom-0 left-0 h-[1px] w-[1px] bg-border block lg:hidden"
      >
      </motion.div>
      <!--  -->
    </NuxtLink>

    <!-- Featured projects and blogposts -->
    <section
      class="relative p-6 pb-0 lg:col-span-4 lg:row-end-3 lg:row-span-2 overflow-hidden"
      aria-labelledby="featured-projects"
    >
      <h2 id="featured-projects" class="sr-only">
        Featured projects and writing
      </h2>
      <ul
        v-if="featured.length"
        ref="featuredContainer"
        class="grid grid-cols-1"
      >
        <li
          v-for="item in featured"
          :key="item.id"
          class="relative group pt-5 pb-4"
          @click="onFeaturedTap(item, $event)"
        >
          <NuxtLink
            :to="item.link"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            :aria-label="
              item.external ? `${item.name} (opens in new tab)` : undefined
            "
            class="block overflow-hidden"
          >
            <motion.div
              :initial="{ y: 24 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.5, duration: 0.6 }"
              class="flex items-center justify-between"
            >
              <h3
                class="text-xl font-medium text-heading capitalize overflow-hidden group-hover:overflow-visible text-ellipsis whitespace-nowrap group-hover:whitespace-normal w-[80%] transition-all duration-300"
              >
                {{ item.name }}
              </h3>
              <p class="text-xs opacity-50">{{ item.type }}</p>
            </motion.div>
          </NuxtLink>
          <div
            class="grid grid-cols-1 grid-rows-[0fr] overflow-hidden lg:group-hover:grid-rows-[1fr] transition-all duration-300"
            :class="{ 'grid-rows-[1fr]': openItem === item.id }"
          >
            <p class="line-clamp-4 pt-3">
              {{ item.description }}
            </p>
          </div>
          <!-- Grid lines -->
          <motion.div
            :initial="{ width: 0 }"
            :animate="{ width: '100%' }"
            :transition="{ duration: 0.6 }"
            class="absolute bottom-0 left-0 w-full h-[1px] bg-border"
          ></motion.div>
        </li>
      </ul>
      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.6 }"
        class="absolute top-0 left-0 h-full w-[1px] bg-border hidden lg:block"
      >
      </motion.div>
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.6 }"
        class="absolute top-0 right-0 h-full w-[1px] bg-border hidden lg:block"
      >
      </motion.div>
      <!--  -->
    </section>
    <a
      href="https://wa.me/2348154387988"
      target="_blank"
      rel="noopener noreferrer"
      class="border border-border mt-3 px-6 pt-[100px] pb-20 relative lg:hidden"
      aria-label="Contact me"
    >
      <Icon
        name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
        size="24"
        class="absolute top-5 right-5"
      />
      <h2 class="text-4xl font-extralight font-header text-heading">
        <span class="font-semibold">Contact</span> Me
      </h2>
      <p class="sr-only">Click to contact me via whatsapp</p>
    </a>
  </main>
</template>

<script setup>
// Set the page title and meta description for better SEO and accessibility
useHead({
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Buokem, a skilled software developer with experience in modern web technologies.",
    },
  ],
});
import { motion } from "motion-v";
import { api } from "~/convex/_generated/api";
import { useConvexHttpClient } from "convex-vue";

const aboutText = `As a software developer, I have had the privilege of working on a wide range of projects. My experience has taught me the importance of attention to detail, effective communication, and efficient problem-solving. I am passionate about building software that is both functional and enjoyable to use. I am always looking for new challenges and opportunities to grow as a developer.`;

// Projects are marked featured in Convex (projects:setFeatured). The try/catch
// covers the window between a frontend deploy and a Convex deploy, where the
// query may not exist yet - the column degrades to writing only.
const convex = useConvexHttpClient();
const { data: featuredProjects } = await useAsyncData(
  "featured-projects",
  async () => {
    try {
      return await convex.query(api.projects.getFeatured, { limit: 2 });
    } catch (error) {
      console.warn("[home] featured projects unavailable:", error);
      return [];
    }
  },
  { default: () => [] }
);

// Newest two posts from the Medium feed, which is already cached server-side.
const { data: featuredPosts } = await useAsyncData(
  "featured-posts",
  async () => {
    const response = await $fetch("/api/blog").catch(() => ({ posts: [] }));
    return (response?.posts ?? []).slice(0, 2);
  },
  { default: () => [] }
);

const featured = computed(() => [
  ...featuredProjects.value.map((project) => ({
    id: project._id,
    name: project.name,
    description: project.shortDescription,
    type: "project",
    link: `/projects/${project.name.split(" ").join("-")}`,
    external: false,
  })),
  ...featuredPosts.value.map((post) => ({
    id: post.link,
    name: post.title,
    description: post.description,
    type: "article",
    link: post.link,
    external: true,
  })),
]);

// Which item has its description open. Desktop expands on hover via CSS; this
// only drives the tap-to-expand behaviour below.
const featuredContainer = ref(null);
const openItem = ref(null);
const isMobile = useMediaQuery("(max-width: 1023px)");

onClickOutside(featuredContainer, () => {
  openItem.value = null;
});

watch(isMobile, (mobile) => {
  if (!mobile) openItem.value = null;
});

/**
 * On mobile the first tap expands the description and the second follows the
 * link. preventDefault works from here even though the anchor is a descendant:
 * the default action is resolved after the event finishes propagating.
 */
const onFeaturedTap = (item, event) => {
  if (!isMobile.value) return;
  if (openItem.value === item.id) return;

  event.preventDefault();
  openItem.value = item.id;
};
</script>
