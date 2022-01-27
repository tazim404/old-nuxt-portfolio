<template>
  <div class="container section">
    <div class="mt-5">
      <Upper />
      <h2 class="title is-2">More About Me</h2>
      <hr />
      <div class="columns is-multiline">
        <div class="column is-half">
          <StackCard />
        </div>
        <div class="column is-half">
          <SocialCard />
        </div>
      </div>
      <h2 class="title is-2">Projects</h2>
      <hr />
      <ProjectCard />
    </div>
  </div>
</template>

<script>
import Upper from '@/components/Upper.vue'
import StackCard from '@/components/StackCard.vue'
import SocialCard from '@/components/SocailCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
export default {
  name: 'IndexPage',
  components: {
    Upper,
    StackCard,
    SocialCard,
    ProjectCard,
  },
  head: {
    title: 'Tazim Rahbar',
  },
}
</script>
<style scoped>
.title {
  font-family: 'DM Sans', sans-serif;
}
hr {
  margin-top: -10px;
}
</style>
