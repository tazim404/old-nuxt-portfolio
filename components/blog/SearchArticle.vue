<template>
  <div class="field is-grouped">
    <p class="control is-expanded">
      <input
        class="input is-primary"
        type="text"
        placeholder="Search For Articles"
      />
    </p>
    <p class="control">
      <a class="button is-link"> Search </a>
      <!-- {{ posts }} -->
    </p>
  </div>
</template>

<script>
export default {
  name: 'SearchArticle',
  data: () => ({
    posts: [],
  }),
  async fetch() {
    this.posts = await this.$axios
      .get('https://api.nuxtjs.dev/posts')
      .then((res) => res.data)
  },
}
</script>

<style></style>
