<template>
  <div class="columns is-multiline">
    <div
      class="column is-one-third"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="project.logo" alt="Placeholder image" />
                <!-- <nuxt-img :src="project.logoFileName" class="project-logo" /> -->
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-4">{{ project.name }}</p>
            </div>
          </div>
          <div class="content">
            <div class="h-20">
              {{ project.description }}
            </div>
            <br />
          </div>
          <div class="field is-grouped">
            <p class="control">
              <!-- <button class="button is-primary">Vist</button> -->
              <a
                :href="project.websiteLink"
                class="button is-primary is-outlined"
                v-if="project.websiteLink"
                target="_blank"
              >
                Visit
              </a>
              <!-- <button class="button is-primary">Github</button> -->
              <a
                :href="project.repoLink"
                class="button is-primary is-outlined"
                v-if="project.repoLink"
                target="_blank"
              >
                Github
              </a>
              <a
                :href="project.videoLink"
                v-if="project.videoLink"
                class="button is-primary is-outlined"
                target="_blank"
              >
                Video
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  data: () => ({
    projects: [
      {
        id: 2,
        name: 'Devshub',
        description:
          'A social network for developers where you can share your projects and tools you built. Working on lots of features.',
        logoFileName: '/devshub.png',
        techUsed: ['Fastapi', 'Bulma', 'Buefy', 'Vue', 'Postgresql'],
        videoLink: '',
        repoLink: '',
        websiteLink: 'https://devshub.netlify.app',
        logo: require('../assets/images/devshub.png'),
      },
      {
        id: 1,
        name: 'Collab Play',
        description:
          'A web app in which you can watch youtube videos collaboratively with your friend and at the same time you can chat with them. It is best suitable and suggested for two people.',
        logoFileName: '/collab.png',
        techUsed: [
          'Flask',
          'Html',
          'Bulma',
          'Buefy',
          'Vue',
          'Socket Io',
          'Sqlite',
        ],
        videoLink: 'https://www.youtube.com/watch?v=bCtpTogUu64&t=21s',
        repoLink: 'https://github.com/tazim404/collab',
        websiteLink: '',
        logo: require('../assets/images/collab.png'),
      },
    ],
  }),
}
</script>

<style scoped>
.image {
  padding: 0.4rem;
  background-color: rgba(37, 84, 97, 0.8);
  border-radius: 5px;
}
.h-20 {
  height: 6rem;
  max-height: 6rem;
}
</style>
