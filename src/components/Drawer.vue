<template>
  <transition name="slide">
    <div
      v-if="drawerOpen"
      class="min-w-48 min-h-48 bg-black bg-opacity-90 backdrop-filter backdrop-blur shadow-2xl absolute top-16 right-0 px-8 py-4 text-lg"
    >
      <ul class="flex flex-col">
        <li
          class="text-2xl text-white font-nunito"
          v-for="navLink in navLinks"
          :key="navLink.id"
          @click="toggleDrawer"
        >
          <router-link :to="navLink.link">{{ navLink.label }} </router-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    drawerOpen() {
      return this.$store.getters['drawer'];
    },
    navLinks() {
      return this.$store.getters['navLinks'];
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch('toggleDrawer');
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-active {
  transform: translateX(-100%);
}
.active-link {
  color: #ff49cc;
}
</style>
