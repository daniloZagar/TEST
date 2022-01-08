<template>
  <header>
    <hamburger-button @changeDrawer="setDrawer"></hamburger-button>
    <drawer />
  </header>
</template>

<script>
import Drawer from './Drawer.vue';
import HamburgerButton from './HamburgerButton.vue';
import { mapState } from 'vuex';

export default {
  components: {
    HamburgerButton,
    Drawer,
  },
  computed: {
    ...mapState(['drawer']),
  },
  methods: {
    setDrawer(v) {
      console.log(v);
      this.$emit('changeDrawer', v);
    },
  },
};
</script>

<style scoped></style>
