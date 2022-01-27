<template>
  <div class="tags">
    <div
      class="tag is-medium is-link"
      v-for="(tag, index) in tags"
      :key="index"
    >
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleTags',

  props: {
    tags: {
      type: Array,
    },
  },
}
</script>

<style></style>
