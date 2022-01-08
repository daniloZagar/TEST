<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
};
</script>

<style scoped></style>
