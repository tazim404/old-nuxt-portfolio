<template>
  <div>
    <div class="container section mt-5">
      <mark>These are dummy data right now.</mark>
      <h4 class="title is-4">Articles 📝</h4>

      <ArticleTags :tags="tags" />
      <SearchArticle />
      <ArticleCard :articles="articles" />
    </div>
  </div>
</template>

<script>
import SearchArticle from '@/components/blog/SearchArticle.vue'
import ArticleCard from '@/components/blog/ArticleCard.vue'
import ArticleTags from '@/components/blog/ArticleTags.vue'
export default {
  name: 'ArticlePage',
  components: {
    SearchArticle,
    ArticleCard,
    ArticleTags,
  },
  data: () => ({
    articles: [
      {
        id: 1,
        title: 'Hello world ',
        date: 'January 1 2022',
        coverPhoto:
          'https://i.picsum.photos/id/845/536/354.jpg?hmac=N0jid6KpFZyaCJhFdFJVRQUImWIJuxYl53n3GkFj9Ps',
      },
    ],
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'],
  }),
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
</style>
