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
      <div class="p-1">
        <b-menu> </b-menu>
      </div>
    </b-sidebar>

    <!-- <b-button @click="open = true">Show</b-button> -->
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
}
</style>
