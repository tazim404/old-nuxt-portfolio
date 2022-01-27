<template>
  <div>
    <h2 class="title is-2">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'BlogTitle',
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style></style>
