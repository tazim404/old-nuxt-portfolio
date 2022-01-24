<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-5">Socials</p>
      <hr />
      <div class="content">
        <div class="columns is-multiline is-mobile">
          <div
            class="column is-one-quarter"
            v-for="social in socials"
            :key="social.id"
          >
            <figure class="image is-32x32 has-ratio">
              <a :href="social.url" target="_blank">
                <img :src="social.logo" :alt="social.name" />
              </a>
            </figure>
            <h6 class="title is-6 has-text-centered">
              {{ social.name }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialCard',
  data: () => ({
    socials: [
      {
        id: 1,
        name: 'Mail',
        url: 'mailto:rahbartazim@gmail.com',
        logo: require('../assets/images/gmail.svg'),
      },
      {
        id: 2,
        name: 'Twitter',
        url: 'https://twitter.com/tazim_rahbar',
        logo: require('../assets/images/twitter-icon.svg'),
      },
      {
        id: 3,
        name: 'Github',
        url: 'https://twitter.com/tazim404',
        logo: require('../assets/images/github-icon.svg'),
      },
      {
        id: 4,
        name: 'Insta',
        url: 'https://twitter.com/tazim_rahbar',
        logo: require('../assets/images/instagram-icon.svg'),
      },
      {
        id: 5,
        name: 'Youtube',
        url: 'https://twitter.com/tazim_rahbar',
        logo: require('../assets/images/youtube-icon.svg'),
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
}
.is-6 {
  margin-top: -25px;
}
</style>
