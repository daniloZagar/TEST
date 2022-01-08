<template>
  <div>
    <div class="slider" v-if="isActive">
      <ul>
        <li v-for="l in navLinks" :key="l">
          <router-link :to="l.link">{{ l.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    navLinks() {
      return this.$store.getters['links'];
    },
    isActive() {
      return this.$store.getters['drawer'];
    },
  },
  methods: {},
};
</script>

<style scoped></style>
