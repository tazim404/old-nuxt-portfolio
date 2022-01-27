<template>
  <section class="container section mt-5">
    <MajorProjects />
    <br />
    <BasicProjects />
  </section>
</template>

<script>
import MajorProjects from '@/components/projects/MajorProjects.vue'
import BasicProjects from '@/components/projects/BasicProjects.vue'

export default {
  name: 'ProjectsPage',
  components: {
    MajorProjects,
    BasicProjects,
  },
  head() {
    return {
      title: 'Projects',
      description: 'This is projects page',
    }
  },
}
</script>

<style></style>
