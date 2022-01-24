<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-5">Tech Stack</p>
      <hr />
      <div class="content">
        <div class="columns is-multiline is-mobile">
          <div
            class="column is-one-quarter"
            v-for="stack in stacks"
            :key="stack.id"
          >
            <figure class="image is-32x32 has-ratio">
              <img :src="stack.image" alt="Image" class="" />
            </figure>
            <h6 class="title is-6 has-text-centered">
              {{ stack.name }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StackCard',
  data: () => ({
    stacks: [
      {
        id: 1,
        name: 'Python',
        image: require('../assets/images/python-icon.svg'),
      },
      {
        id: 2,
        name: 'Html',
        image: require('../assets/images/html5-icon.svg'),
      },
      {
        id: 3,
        name: 'JS',
        image: require('../assets/images/logo-javascript.svg'),
      },
      {
        id: 4,
        name: 'Bulma',
        image: require('../assets/images/bulma.svg'),
      },
      {
        id: 5,
        name: 'Nuxt',
        image: require('../assets/images/nuxt.svg'),
      },
      {
        id: 6,
        name: 'Fastapi',
        image: require('../assets/images/Fastapi.svg'),
      },
      {
        id: 7,
        name: 'Flask',
        image: require('../assets/images/flask-icon.svg'),
      },
      {
        id: 8,
        name: 'Vue',
        image: require('../assets/images/vuejs-icon.svg'),
      },
    ],
  }),
}
</script>
<style scoped>
.title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 100;
  color: #ffffff;
}
hr {
  margin-top: -20px;
}
.column {
  /* border: 1px solid tomato; */
}
.is-6 {
  margin-top: -25px;
}
</style>
