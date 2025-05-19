<template>
  <div class="flex flex-col gap-5" v-if="isLoading">
    <ProjectSkeleton />
    <ProjectSkeleton />
  </div>
  <div v-else class="pb-5 flex flex-col gap-5">
    <Projectii
      v-for="project in projects"
      :name="project.fields.name"
      :description="project.fields.description"
      :link="project.fields.link"
      :sourcecode="project.fields.sourcecode"
      :stack="project.fields.stackArray"
      :image="project.fields.image" />
  </div>
</template>

<script setup>
const projects = useProjects();
const isLoading = useProjectsLoading();
</script>
