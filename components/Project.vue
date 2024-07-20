<template>
  <div
    class="duration-500 ease-in h-screen w-screen fixed top-0 left-0"
    :class="
      isOpen
        ? 'bg-light dark:bg-dark z-30'
        : 'bg-transparent -z-10 delay-[500ms]'
    ">
    <div class="px-[20px] pt-[30px] relative">
      <span
        v-html="arrow"
        class="block w-fit mb-[20px] cursor-pointer duration-300"
        :class="isOpen ? 'opacity-100 delay-200' : 'opacity-0'"
        @click="isOpen = false"></span>
      <div
        class="lg:flex lg:justify-between lg:gap-x-[20px] landscape:flex landscape:gap-x-[20px]">
        <img
          :src="image"
          class="bg-gray-400 h-[198px] lg:h-auto lg:max-h-[404px] w-[334px] lg:w-1/2 landscape:w-1/2 relative z-0 duration-300 ease-in object-cover object-top"
          :class="isOpen ? 'opacity-100 delay-200' : 'opacity-0'" />
        <div class="h-[54vh] lg:w-[45%]">
          <div
            class="py-[20px] landscape:pt-0"
            style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)">
            <h3
              class="font-ubuntu-condensed text-[40px] leading-normal relative duration-300 ease-in"
              :class="isOpen ? 'top-0 opacity-100' : 'top-[70px] opacity-0'">
              {{ name }}
            </h3>
          </div>
          <div
            class="h-[60%] lg:h-[75%] overflow-y-scroll hide-scrollbar duration-300 ease-out">
            <p
              class="font-lato text-[20px] lg:text-[18px] font-light leading-8 max-w-[591px] duration-300 ease-in"
              :class="isOpen ? 'opacity-100 pt-0' : 'opacity-0 pt-6'">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute w-full duration-300 ease-in"
      :class="isOpen ? 'bottom-0' : '-bottom-[74px]'">
      <div
        class="mx-[20px] py-[20px] landscape:py-[10px] flex justify-between border-t border-solid border-black dark:border-light">
        <p class="lg:ml-[20px]">{{ stack }}</p>
        <div class="lg:mr-[20px] flex items-center gap-x-[30px]">
          <a
            v-if="sourceCode"
            :href="sourceCode"
            target="_blank"
            class="flex items-center gap-x-[5px] cursor-pointer">
            <p class="hidden lg:block">View Source Code</p>
            <span v-html="github"></span>
          </a>
          <a
            :href="url"
            target="_blank"
            class="flex items-center gap-x-[5px] cursor-pointer">
            <p class="hidden lg:block">View Project</p>
            <span v-html="link"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Card -->
  <div
    class="flex justify-center lg:justify-start gap-x-[25px] cursor-pointer grayscale hover:grayscale-0 duration-300"
    @click="isOpen = true">
    <img
      :src="image"
      class="bg-gray-400 h-[198px] lg:h-[139px] w-[334px] lg:w-[50%] lg:min-w-[257px] lg:max-w-[257px] object-cover object-top" />
    <div class="hidden lg:block w-1/2">
      <h3 class="font-ubuntu-condensed text-[40px] truncate">
        {{ name }}
      </h3>
      <p class="font-lato">{{ stack }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  description: String,
  link: String,
  sourcecode: String,
  stack: String,
  image: String,
});

const name: string | undefined = props.name;
const description: string | undefined = props.description;
const url: string | undefined = props.link;
const sourceCode: string | undefined = props.sourcecode;
const stack: string | undefined = props.stack?.split(',').join(' + ');
// @ts-ignore
const image: string | undefined = props.image?.[0]?.thumbnails?.large?.url;

const isOpen = ref(false);

const github = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" class="fill-black dark:fill-light" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>`;
const link = `<svg width="27" height="27" viewBox="0 0 27 27" fill="black" class="fill-black dark:fill-light" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0.25C17.31 0.25 16.75 0.81 16.75 1.5C16.75 2.19 17.31 2.75 18 2.75H22.4824L12.1162 13.1162C11.6281 13.6043 11.6281 14.3957 12.1162 14.8838C12.3606 15.1282 12.68 15.25 13 15.25C13.32 15.25 13.6394 15.1282 13.8838 14.8838L24.25 4.51758V9C24.25 9.69 24.81 10.25 25.5 10.25C26.19 10.25 26.75 9.69 26.75 9V1.5C26.75 0.81 26.19 0.25 25.5 0.25H18ZM4.25 1.5C2.18187 1.5 0.5 3.18187 0.5 5.25V22.75C0.5 24.8181 2.18187 26.5 4.25 26.5H21.75C23.8181 26.5 25.5 24.8181 25.5 22.75V15.25C25.5 14.56 24.94 14 24.25 14C23.56 14 23 14.56 23 15.25V22.75C23 23.4394 22.4394 24 21.75 24H4.25C3.56063 24 3 23.4394 3 22.75V5.25C3 4.56063 3.56063 4 4.25 4H11.75C12.44 4 13 3.44 13 2.75C13 2.06 12.44 1.5 11.75 1.5H4.25Z"/>
</svg>
`;
const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="black" class="fill-black dark:fill-light"><path fill="currentColor" d="M9.904 17.308L4.596 12l5.308-5.308l.708.72L6.523 11.5h12.88v1H6.524l4.089 4.089z"/></svg>`;
</script>
