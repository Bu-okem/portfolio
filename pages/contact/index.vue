<template>
  <main class="pb-20 mt-[150px] lg:mt-[200px] mx-5 lg:mx-20 max-w-[850px] min-h-[72vh]">
    <h1 class="sr-only">Contact — Work With Buokem</h1>

    <section class="mb-20" aria-labelledby="contact-heading">
      <div class="text-4xl font-semibold font-header text-heading">
        <div>
          <h2 id="contact-heading" class="sr-only">
            {{ heroText1 }} {{ heroText2 }}
          </h2>
          <span
            aria-hidden="true"
            class="overflow-hidden inline-block"
            v-for="(text, index) in heroText1.split(' ')"
            :key="'h1-' + index"
          >
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
            :key="'h2-' + index"
          >
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

    <section class="font-light leading-9 space-y-8 text-lg" aria-labelledby="contact-body">
      <h2 id="contact-body" class="sr-only">Contact details</h2>

      <motion.p
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ delay: 0.15, duration: 0.6 }"
      >
        {{ introText }}
      </motion.p>

      <motion.p
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ delay: 0.25, duration: 0.6 }"
      >
        Whether you're scoping a new product, scaling an existing system, or
        hiring for a senior engineering role, reach out directly via
        <a
          href="mailto:chiobiegbulem@gmail.com"
          class="font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity duration-300"
          >Email</a
        >
        <span aria-hidden="true" class="mx-2">·</span>
        <a
          href="https://wa.me/2349018639566"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity duration-300"
          >WhatsApp</a
        >
        <span aria-hidden="true" class="mx-2">·</span>
        <a
          href="https://www.linkedin.com/in/chibuokem-obiegbulem/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity duration-300"
          >LinkedIn</a
        >.
      </motion.p>

      <motion.p
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ delay: 0.35, duration: 0.6 }"
      >
        You can also inspect my open-source work and production code on
        <a
          href="https://github.com/bu-okem"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity duration-300"
          >GitHub</a
        >.
      </motion.p>

      <motion.p
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ delay: 0.45, duration: 0.6 }"
        class="text-secondary-text"
      >
        {{ closingText }}
      </motion.p>
    </section>
  </main>
</template>

<script setup>
import { motion } from "motion-v";

useHead({
  title: "Contact",
  meta: [
    {
      name: "description",
      content:
        "Work with Buokem — Full-stack Software Engineer available for select product engineering, technical consulting, and senior roles.",
    },
  ],
});

const heroText1 = "Let's";
const heroText2 = "Get In Touch.";

const introText =
  "I'm a product-focused Full-Stack Software Engineer specializing in TypeScript, Vue/Nuxt, React/Next.js, Node.js, and modern cloud backends. I partner with engineering teams and founders to architect, build, and scale high-craft web applications from first commit to production.";

const closingText =
  "Available for select product engineering engagements, technical consulting, and senior full-stack roles.";
</script>
