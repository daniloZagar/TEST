<template>
  <div class="pt-20 w-full min-h-screen bg-black">
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
