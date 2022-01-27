<template>
  <div class="hero is-fullheight">
    <div class="section mt-5">
      <div class="">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <BlogTitle title="How I makde this website" />
            <BlogDate date="Jan 1 2022" />
            <br />
            <BlogCover />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCover from '../../components/single/BlogCover.vue'
import BlogTitle from '../../components/single/BlogTitle.vue'
import BlogDate from '../../components/single/BlogDate.vue'
export default {
  name: 'SlugPage',
  mounted() {
    console.log(this.$route.params.slug)
  },
  components: {
    BlogCover,
    BlogTitle,
    BlogDate,
  },
}
</script>
