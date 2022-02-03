<template>
  <div class="hero is-fullheight">
    <div>
      <div class="container section mt-5">
        <h4 class="title is-4">Articles 📝</h4>
        <hr />
        <!-- <ArticleTags :tags="getTags()" /> -->
        <!-- <SearchArticle /> -->

        <br />
        <!-- <ArticlePlaecholder v-if="articles.length == 0" /> -->
        <ArticleCard :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchArticle from '@/components/blog/SearchArticle.vue'
import ArticleCard from '@/components/blog/ArticleCard.vue'
import ArticleTags from '@/components/blog/ArticleTags.vue'
import ArticlePlaecholder from '@/components/blog/ArticlePlaecholder.vue'
// import { NotionRenderer, getPageBlocks, getPageTable } from 'vue-notion'
export default {
  head: {
    title: 'Articles.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Articles by tazim rahbar',
      },
    ],
  },
  name: 'ArticlePage',
  components: {
    SearchArticle,
    ArticleCard,
    ArticleTags,
    ArticlePlaecholder,
  },

  data: () => ({
    articles: null,
    tags: [],
    blockMap: null,
  }),
  async asyncData({ $notion, route }) {
    console.log(route.name)
    const articles = await $notion.getPageTable(
      '8cf90db2d8b245ad8625787be76d63b9'
    )
    return { articles }
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
