<template>
  <div>
    <p class="subtitle is-6">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogDate',
  props: {
    date: {
      type: String,
    },
  },
}
</script>

<style></style>
