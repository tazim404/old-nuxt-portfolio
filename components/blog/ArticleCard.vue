<template>
  <div class="columns">
    <div
      class="column is-one-third"
      v-for="article in articles"
      :key="article.id"
    >
      <div class="card-wrap">
        <div class="card">
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
  font-weight: 500;
}

.card {
  border: 1px solid #255461;
  background-color: #001e26;
  border-radius: 5px;
  height: 100%;
}
</style>
