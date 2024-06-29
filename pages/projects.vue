<template>
  <div class="pb-5 flex flex-col gap-5">
    <Project
      v-for="project in projects"
      :name="project.fields.name"
      :description="project.fields.description"
      :link="project.fields.link"
      :sourcecode="project.fields.sourcecode"
      :stack="project.fields.stackArray" />
  </div>
</template>

<script setup>
const projects = useProjects();
</script>
