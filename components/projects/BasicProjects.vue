<template>
  <div>
    <h2 class="title is-4">Basic Projects 👎</h2>
    <small>Small project built while learning to code</small>
    <hr />
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
                <a
                  :href="project.websiteLink"
                  class="button is-primary is-outlined"
                  v-if="project.websiteLink"
                  target="_blank"
                >
                  Visit
                </a>
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
  </div>
</template>

<script>
export default {
  name: 'BasicProjects',
  data: () => ({
    projects: [
      {
        id: 1,
        name: 'Youtube Downloader',
        description:
          'A simple application made using Tkinter library which helps you to download videos from youtube in your desired quality.',
        logo: require('../../../../essentials/icons/youtube.png'),
        stacks: ['Python', 'Tkinter'],
        repoLink: 'https://github.com/tazim404/youtube-downloader',
        websiteLink: '',
        videoLink: '',
      },
      {
        id: 2,
        name: ' Music Player ',
        description:
          'A quiet, simple music player made in Tkinter (Python) library to just load the music from your folder and listen it .Nothing special in it. Just for fun.',
        logo: require('../../../../essentials/icons/music.png'),
        stacks: ['Python', 'Tkinter'],
        repoLink: 'https://github.com/tazim404/tkinter-music-player',
        websiteLink: '',
        videoLink: '',
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
h2 {
}
.title {
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 0px;
}
hr {
  margin-top: 0px;
}
</style>
