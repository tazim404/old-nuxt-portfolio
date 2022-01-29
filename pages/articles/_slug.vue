<template>
  <div>
    <!-- <div class="hero is-fullheight">
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
  </div> -->
    <!-- {{ blockMap }} -->
    <NotionRenderer :blockMap="blockMap" fullPage />
  </div>
</template>

<script>
// https://tropical-prepared-68a.notion.site/I-am-starting-a-startup-53a9a65bb73c4ac8ae1e51e6eb482f1b
// https://tropical-prepared-68a.notion.site/Devshub-bf43738f07054b719d6412bc1d36e169
import BlogCover from '../../components/single/BlogCover.vue'
import BlogTitle from '../../components/single/BlogTitle.vue'
import BlogDate from '../../components/single/BlogDate.vue'
import { NotionRenderer, getPageBlocks } from 'vue-notion'
export default {
  name: 'SlugPage',
  mounted() {
    console.log(this.$route.params.slug)
  },
  components: {
    BlogCover,
    BlogTitle,
    BlogDate,
    NotionRenderer,
  },
  data: () => ({ blockMap: null }),
  // async created() {
  //   this.blockMap = await getPageBlocks('53a9a65bb73c4ac8ae1e51e6eb482f1b')
  // },
  async asyncData({ $notion }) {
    // use Notion module to get Notion blocks from the API via a Notion pageId
    const blockMap = await $notion.getPageBlocks(
      '53a9a65bb73c4ac8ae1e51e6eb482f1b'
    )
    return { blockMap }
  },
}
</script>
<style>
@import 'vue-notion/src/styles.css';
.notion-title {
  color: #ffffff;
}
.notion-text {
  color: #ffffff;
}
</style>
