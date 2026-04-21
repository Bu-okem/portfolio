<template>
  <main class="h-[84%] pb-20 mt-[150px] lg:mt-[200px] mx-5 lg:mx-20">
    <h1 class="sr-only">Blog - Buokem</h1>

    <section class="mb-16" aria-labelledby="blog-heading">
      <div class="text-4xl font-semibold font-header">
        <div>
          <h2 id="blog-heading" class="sr-only">{{ heroText1 }} {{ heroText2 }}</h2>
          <span
            aria-hidden="true"
            class="overflow-hidden inline-block"
            v-for="(text, index) in heroText1.split(' ')"
            :key="'h1-' + index">
            <motion.span
              :initial="{ y: 54 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.3 + index * 0.04, duration: 0.6 }"
              class="inline-block"
              >{{ text }}<span>&nbsp;</span>
            </motion.span>
          </span>
        </div>
        <div>
          <span
            aria-hidden="true"
            class="overflow-hidden inline-block"
            v-for="(text, index) in heroText2.split(' ')"
            :key="'h2-' + index">
            <motion.span
              :initial="{ y: 54 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.3 + index * 0.04, duration: 0.6 }"
              class="inline-block font-extralight"
              >{{ text }}<span>&nbsp;</span>
            </motion.span>
          </span>
        </div>
      </div>
    </section>

    <!-- Loading state -->
    <section v-if="status === 'pending'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5" aria-label="Loading blog posts">
      <div
        v-for="n in 4"
        :key="n"
        class="min-h-[240px] border border-accent rounded-sm p-6 animate-pulse">
        <div class="h-6 bg-accent/20 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-accent/20 rounded w-full mb-2"></div>
        <div class="h-4 bg-accent/20 rounded w-2/3 mb-8"></div>
        <div class="flex justify-between mt-auto">
          <div class="h-5 bg-accent/20 rounded w-16"></div>
          <div class="h-5 bg-accent/20 rounded w-24"></div>
        </div>
      </div>
    </section>

    <!-- Error state -->
    <section v-else-if="error" class="text-center py-20" aria-label="Error loading blog">
      <p class="text-xl text-secondary-text mb-4">Unable to load blog posts right now.</p>
      <button
        @click="refresh"
        class="px-5 py-2 border border-accent hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300">
        Try Again
      </button>
    </section>

    <!-- Empty state -->
    <section v-else-if="posts.length === 0" class="text-center py-20" aria-label="No blog posts">
      <p class="text-xl text-secondary-text">No blog posts yet. Check back soon!</p>
    </section>

    <!-- Posts grid -->
    <section v-else aria-label="Blog posts">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5">
        <motion.div
          v-for="(post, index) in posts"
          :key="post.link"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.1 + index * 0.08, duration: 0.6 }">
          <BlogPostCard
            :title="post.title"
            :link="post.link"
            :date="post.date"
            :description="post.description"
            :tags="post.tags" />
        </motion.div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { motion } from 'motion-v';

useHead({
  title: 'Blog - Buokem',
  meta: [
    {
      name: 'description',
      content: 'Blog posts and articles by Buokem on software development, web technologies, and more.',
    },
  ],
});

const heroText1 = 'Blog';
const heroText2 = 'Thoughts & Writings.';

const { data, error, status, refresh } = useFetch('/api/blog', {
  transform: (response) => response.posts || [],
  default: () => [],
});

const posts = computed(() => data.value || []);
</script>
