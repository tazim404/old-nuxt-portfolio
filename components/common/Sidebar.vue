<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      v-model="open"
    >
      <div class="">
        <b-menu>
          <b-collapse
            class="card"
            animation="slide"
            v-for="(category, index) of categories"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index"
          >
            <template #trigger="props">
              <div class="card-header" role="button">
                <p class="card-header-title">
                  {{ category.title }}
                </p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
            </template>
            <div class="card-content">
              <div
                class="columns is-mobile is-centered"
                v-for="(blog, index) in category.blogs"
                :key="index"
              >
                <!-- <div v-for="(blog, index) in category.blogs" :key="index"> -->
                <div class="column is-1">
                  <svg viewBox="0 0 20 20" width="18" height="20">
                    <path
                      fill="#00dc82"
                      d="M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"
                    ></path>
                  </svg>
                </div>
                <div class="column is-12">
                  <h6 class="subtitle is-6">
                    {{ blog }}
                  </h6>
                </div>
              </div>
            </div>
          </b-collapse>
        </b-menu>
      </div>
    </b-sidebar>

    <img
      src="@/assets/images/menu.svg"
      alt="Sidebar Toggle"
      class="mr-4 ml-3 mt-3 menu-item"
      @click="open = true"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false,
      isOpen: false,
      categories: [
        {
          title: 'Category 1',
          blogs: [
            'This is blog 1 of category 1',
            'This is blog 2 of category 1',
            'This is blog 3 of category 1',
            'This is blog 4 of category 1',
          ],
        },
        {
          title: 'Categoty 2',
          blogs: [
            'This is blog 1 of category 2',
            'This is blog 2 of category 2',
            'This is blog 3 of category 2',
            'This is blog 4 of category 2',
          ],
        },
        {
          title: 'Category 3',
          blogs: [
            'This is blog 1 of category 3',
            'This is blog 2 of category 3',
            'This is blog 3 of category 3',
            'This is blog 4 of category 3',
          ],
        },
      ],
    }
  },
}
</script>

<style>
.p-1 {
  /* padding: 1em; */
}
.menu-item {
  border-radius: 8px;
}
.menu-item:hover {
  background-color: #00c373;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}
.b-sidebar .sidebar-content.is-fullheight {
  background-color: #003543;
  /* background-color: #00dc82; */
}
</style>
