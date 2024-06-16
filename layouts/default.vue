<template>
  <div
    class="bg-light text-black dark:bg-dark dark:text-light h-screen relative lg:flex">
    <Nav />
    <header
      class="mt-[43px] mx-[20px] lg:mx-[32px] flex flex-col gap-2 lg:h-fit lg:mb-[44px] lg:self-end">
      <h2 class="text-[25px] lg:text-[35px]">Chibuokem Obiegbulem</h2>
      <h5 class="text-[17px] lg:text-[20px]">Frontend Web Developer</h5>
      <ul class="flex items-center gap-[22px] list-none">
        <li v-for="(social, index) in socials" :key="index" class="">
          <nuxt-link :to="social.link">
            <span v-html="social.icon"></span>
          </nuxt-link>
        </li>
      </ul>
    </header>
    <main
      class="mt-[40px] px-[20px] h-[60%] max-w-[703px] overflow-y-scroll lg:self-end lg:mr-[30px] hide-scrollbar">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const svg = ref('');
const socials = [
  {
    icon: `<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0C5.373 0 0 5.373 0 12C0 17.623 3.872 22.328 9.092 23.63C9.036 23.468 9 23.28 9 23.047V20.996C8.513 20.996 7.697 20.996 7.492 20.996C6.671 20.996 5.941 20.643 5.587 19.987C5.194 19.258 5.126 18.143 4.152 17.461C3.863 17.234 4.083 16.975 4.416 17.01C5.031 17.184 5.541 17.606 6.021 18.232C6.499 18.859 6.724 19.001 7.617 19.001C8.05 19.001 8.698 18.976 9.308 18.88C9.636 18.047 10.203 17.28 10.896 16.918C6.9 16.507 4.993 14.519 4.993 11.82C4.993 10.658 5.488 9.534 6.329 8.587C6.053 7.647 5.706 5.73 6.435 5C8.233 5 9.32 6.166 9.581 6.481C10.477 6.174 11.461 6 12.495 6C13.531 6 14.519 6.174 15.417 6.483C15.675 6.17 16.763 5 18.565 5C19.297 5.731 18.946 7.656 18.667 8.594C19.503 9.539 19.995 10.66 19.995 11.82C19.995 14.517 18.091 16.504 14.101 16.917C15.199 17.49 16 19.1 16 20.313V23.047C16 23.151 15.977 23.226 15.965 23.315C20.641 21.676 24 17.236 24 12C24 5.373 18.627 0 12 0Z"
          fill="black"
          class="fill-black dark:fill-light"
        />
      </svg>
    `,
    link: '/',
  },
  {
    icon: `
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0H2C0.895 0 0 0.895 0 2V20C0 21.105 0.895 22 2 22H20C21.105 22 22 21.105 22 20V2C22 0.895 21.105 0 20 0ZM6.954 18H4.004V8.508H6.954V18ZM5.449 7.151C4.498 7.151 3.729 6.38 3.729 5.431C3.729 4.482 4.499 3.712 5.449 3.712C6.397 3.712 7.168 4.483 7.168 5.431C7.168 6.38 6.397 7.151 5.449 7.151ZM18.004 18H15.056V13.384C15.056 12.283 15.036 10.867 13.523 10.867C11.988 10.867 11.752 12.066 11.752 13.304V18H8.804V8.508H11.634V9.805H11.674C12.068 9.059 13.03 8.272 14.465 8.272C17.452 8.272 18.004 10.238 18.004 12.794V18Z"
          fill="black"
          class="fill-black dark:fill-light"
        />
      </svg>
    `,
    link: '/',
  },
  {
    icon: `
      <svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 0C0.906937 0 0 0.906936 0 2V18C0 19.093 0.906937 20 2 20H24C25.0931 20 26 19.093 26 18V2C26 0.906936 25.0931 0 24 0H2ZM4.69922 2H21.3008L13 8.13476L4.69922 2ZM3 4.47461L13 11.8652L23 4.47461V18H3V4.47461Z"
          fill="black"
          class="fill-black dark:fill-light"
        />
      </svg>
    `,
    link: '/',
  },
];

useHead({
  script: [
    {
      children: `if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }`,
    },
  ],
});
</script>
