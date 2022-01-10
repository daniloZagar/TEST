<template>
  <div class="pt-20 w-full h-screen">
    <h1 class="text-black">Details</h1>
    <Chart :case="'confirmed'" />
    <Chart :case="'deaths'" />
    <Chart :case="'recovered'" />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
export default {
  components: {
    Chart,
  },
};
</script>

<style scoped></style>
