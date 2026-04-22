<template>
  <main class="pb-20 mt-[150px] lg:mt-[200px] mx-5 lg:mx-20 max-w-[850px]">
    <h1 class="sr-only">Contact - Get In Touch With Buokem</h1>

    <section class="mb-20" aria-labelledby="contact-heading">
      <div class="text-4xl font-semibold font-header">
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

    <section class="font-light leading-9" aria-labelledby="contact-body">
      <h2 id="contact-body" class="sr-only">Contact details</h2>

      <div>
        <p class="sr-only">{{ introText }}</p>
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(text, index) in introText.split(' ')"
          :key="'intro-' + index"
        >
          <motion.p
            :initial="{ y: 40 }"
            :while-in-view="{ y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            class="my-1"
          >
            {{ text }}<span>&nbsp;</span>
          </motion.p>
        </span>
      </div>

      <div class="mt-10">
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(fragment, index) in reachOutFragments"
          :key="'reach-' + index"
        >
          <motion.span
            :initial="{ y: 40 }"
            :while-in-view="{ y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            class="inline-block my-1"
          >
            <a
              v-if="fragment.href"
              :href="fragment.href"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity duration-300"
              >{{ fragment.text }}</a
            >
            <span v-else>{{ fragment.text }}</span>
            <span>&nbsp;</span>
          </motion.span>
        </span>
      </div>

      <div class="mt-10">
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(fragment, index) in githubFragments"
          :key="'gh-' + index"
        >
          <motion.span
            :initial="{ y: 40 }"
            :while-in-view="{ y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            class="inline-block my-1"
          >
            <a
              v-if="fragment.href"
              :href="fragment.href"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity duration-300"
              >{{ fragment.text }}</a
            >
            <span v-else>{{ fragment.text }}</span>
            <span>&nbsp;</span>
          </motion.span>
        </span>
      </div>

      <div class="mt-10">
        <p class="sr-only">{{ recruiterText }}</p>
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(text, index) in recruiterText.split(' ')"
          :key="'rec-' + index"
        >
          <motion.p
            :initial="{ y: 40 }"
            :while-in-view="{ y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            class="my-1"
          >
            {{ text }}<span>&nbsp;</span>
          </motion.p>
        </span>
      </div>

      <div class="mt-10">
        <p class="sr-only">{{ closingText }}</p>
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(text, index) in closingText.split(' ')"
          :key="'close-' + index"
        >
          <motion.p
            :initial="{ y: 40 }"
            :while-in-view="{ y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            class="my-1"
          >
            {{ text }}<span>&nbsp;</span>
          </motion.p>
        </span>
      </div>
    </section>
  </main>
</template>

<script setup>
import { motion } from "motion-v";

useHead({
  title: "Buokem - Contact",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Buokem — software developer available for collaboration, projects, and opportunities.",
    },
  ],
});

const heroText1 = "Let's";
const heroText2 = "Get In Touch.";

const introText =
  "Hi there, I'm a web developer with a passion for building scalable, performant, and user-friendly web applications. I specialize in modern frontend and backend technologies, including JavaScript/TypeScript, React, Node.js, and cloud platforms, and I love creating seamless digital experiences.";

// Fragments that mix plain text words with linked words
const reachOutFragments = [
  { text: "I'm" },
  { text: "always" },
  { text: "eager" },
  { text: "to" },
  { text: "take" },
  { text: "on" },
  { text: "new" },
  { text: "challenges," },
  { text: "refine" },
  { text: "my" },
  { text: "skills," },
  { text: "and" },
  { text: "collaborate" },
  { text: "on" },
  { text: "innovative" },
  { text: "projects." },
  { text: "If" },
  { text: "you'd" },
  { text: "like" },
  { text: "to" },
  { text: "discuss" },
  { text: "potential" },
  { text: "opportunities," },
  { text: "projects," },
  { text: "or" },
  { text: "just" },
  { text: "connect," },
  { text: "feel" },
  { text: "free" },
  { text: "to" },
  { text: "reach" },
  { text: "out" },
  { text: "via" },
  { text: "email", href: "mailto:chiobiegbulem@gmail.com" },
  { text: "·" },
  { text: "WhatsApp", href: "https://wa.me/2349018639566" },
  { text: "·" },
  {
    text: "LinkedIn.",
    href: "https://www.linkedin.com/in/chibuokem-obiegbulem/",
  },
];

const githubFragments = [
  { text: "You" },
  { text: "can" },
  { text: "also" },
  { text: "check" },
  { text: "out" },
  { text: "my" },
  { text: "GitHub", href: "https://github.com/bu-okem" },
  { text: "to" },
  { text: "see" },
  { text: "some" },
  { text: "of" },
  { text: "my" },
  { text: "work." },
];

const recruiterText =
  "If you're a recruiter or hiring manager looking for a dedicated web developer, I'd love to hear about your needs and explore how I can contribute to your team.";

const closingText = "Let's connect, looking forward to great conversations!";
</script>
