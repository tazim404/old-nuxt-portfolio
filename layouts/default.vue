<template>
  <div>
    <section class="main-content">
      <!-- <nav
        class="navbar is-primary is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <img src="@/assets/images/menu.svg" alt="" class="mr-4 ml-3 menu" />
          <a class="navbar-item" href="/"> Tazim Rahbar </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start"></div>
          <div class="navbar-end">
            <a class="navbar-item">
              <img
                src="../../../essentials/icons/project-pixle.png"
                alt="Project Logo Image"
                class="mr-1"
              />
              Projects</a
            >
            <a class="navbar-item is-flex">
              <img
                src="../../../essentials/icons/article-pixel.png"
                alt="Article Logo Image"
                class="mr-1"
              />
              Articles</a
            >
          </div>
        </div>
      </nav> -->
      <Navbar />
      <Nuxt />
      <Footer />
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import Footer from '@/components/common/Footer.vue'
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  components: {
    Footer,
    Navbar,
  },
}
</script>
<style scoped>
.menu {
  border-radius: 8px;
}
.menu:hover {
  background-color: #00c373;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}
a.navbar-item {
  border-radius: 8px;
}
</style>
