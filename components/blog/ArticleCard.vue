<template>
  <div class="columns">
    <div
      class="column is-one-third"
      v-for="article in articles"
      :key="article.id"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="article.coverPhoto" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h5 class="subtitle is-5">
              {{ article.title }}
            </h5>
            <time datetime="2016-1-1">{{ article.date }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    articles: {
      type: Array,
    },
  },
}
</script>

<style scoped>
.subtitle {
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
}
</style>
