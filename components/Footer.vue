<template>
    <footer class="py-8 px-5 lg:px-20 border-t border-accent">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-secondary-text">
          <p>&copy; {{ new Date().getFullYear() }} Buokem. All rights reserved.</p>
          <div class="flex items-center gap-5">
            <a
              href="https://github.com/bu-okem"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-foreground transition-colors duration-300"
              aria-label="GitHub profile"
            >GitHub</a>
            <a
              href="https://www.linkedin.com/in/chibuokem-obiegbulem/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn profile"
            >LinkedIn</a>
            <a
              href="mailto:chiobiegbulem@gmail.com"
              class="hover:text-foreground transition-colors duration-300"
              aria-label="Send email"
            >Email</a>
          </div>
        </div>
      </footer>
</template>