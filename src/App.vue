<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const defaultLayout = 'default';
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout';
    },
  },
};
</script>

<style></style>
