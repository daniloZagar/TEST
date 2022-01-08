<template>
  <header
    class="h-16 flex items-center justify-between z-50 fixed top-0 left-0 right-0 bg-pink"
  >
    <div>
      <router-link
        to="/"
        class="font-montserrat text-2xl font-semibold text-black pl-5"
      >
        COVID APP
      </router-link>
    </div>
    <div class="flex justify-end lg:pr-20">
      <nav class="lg:hidden">
        <button
          class="text-black dark:text-white w-10 h-10 relative focus:outline-none"
          @click="toggleDrawer"
        >
          <div
            class="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              aria-hidden="true"
              class="block absolute h-1 w-8 bg-black transform transition duration-500 ease-in-out"
              :class="{
                'rotate-45': drawerOpen,
                ' -translate-y-1.5': !drawerOpen,
              }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute top-0.5 h-1 w-8 bg-black transform transition duration-500 ease-in-out"
              :class="{ 'opacity-0': drawerOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute top-1 h-1 w-8 bg-black transform transition duration-500 ease-in-out"
              :class="{
                '-rotate-45': drawerOpen,
                ' translate-y-1.5': !drawerOpen,
              }"
            ></span>
          </div>
        </button>
        <Drawer />
      </nav>
      <nav>
        <nav class="hidden lg:block">
          <ul class="flex items-center gap-3 font-montserrat font-semibold">
            <li
              v-for="navLink in navLinks"
              :key="navLink.id"
              class="hover:text-primary text-2xl font-nunito text-black"
            >
              <!-- {{$t(navLink.label)}} -->
              <router-link :to="navLink.link">
                {{ navLink.label }}
              </router-link>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  </header>
</template>

<script>
import Drawer from '@/components/Drawer.vue';
export default {
  components: {
    Drawer,
  },
  computed: {
    navLinks() {
      return this.$store.getters['navLinks'];
    },
    drawerOpen() {
      return this.$store.getters['drawer'];
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
.active-link {
  color: white;
}
</style>
