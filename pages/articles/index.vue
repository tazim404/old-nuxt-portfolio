<template>
  <div>
    <div class="container section mt-5">
      <!-- <mark>These are dummy data right now.</mark> -->
      <h4 class="title is-4">Articles 📝</h4>
      <hr />

      <!-- <ArticleTags :tags="tags" /> -->
      <!-- <SearchArticle /> -->
      <br />
      <!-- <ArticleCard :articles="articles" /> -->
      <ArticlePlaecholder />
    </div>
  </div>
</template>

<script>
import SearchArticle from '@/components/blog/SearchArticle.vue'
import ArticleCard from '@/components/blog/ArticleCard.vue'
import ArticleTags from '@/components/blog/ArticleTags.vue'
import ArticlePlaecholder from '@/components/blog/ArticlePlaecholder.vue'
import { NotionRenderer, getPageBlocks } from 'vue-notion'
export default {
  name: 'ArticlePage',
  components: {
    SearchArticle,
    ArticleCard,
    ArticleTags,
    ArticlePlaecholder,
    NotionRenderer,
  },

  data: () => ({
    articles: [],
    tags: ['Tag1'],
    blogs: null,
  }),
  async asyncData({ $notion }) {
    const blogs = await $notion.getPageBlocks()
    return { blogs }
  },
  async fetch() {
    // this.articles = await this.$axios
    //   .get('https://tazimblog.herokuapp.com/blogs')
    //   .then((res) => {
    //     // console.log(res.data.data)
    //     // this.articles = res.data.data
    //     res.data.data
    //   })
    await this.$axios
      .get('https://tazimblog.herokuapp.com/blogs')
      .then((res) => {
        this.articles = res.data.data
      })
  },
}
</script>
<style scoped>
mark {
  width: 100%;
}
.title {
  font-family: 'DM Sans', sans-serif;
}
hr {
  margin-top: 0px;
}
h3 {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
