<template>
  <div>{{ fromToDate }}{{ getInfo }}</div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        slug: '',
        case: '',
        date: '',
      },
    };
  },
  computed: {
    getInfo() {
      return this.$store.state.data.countryData;
    },
    fromToDate() {
      let dateBefore = new Date();
      dateBefore.setDate(dateBefore.getDate() - 8);
      let dateNow = new Date();
      dateNow.setDate(dateNow.getDate() - 1);
      return `from=${dateBefore.toISOString()}&to=${dateNow.toISOString()}`;
    },
  },
  methods: {
    getParams() {
      this.payload.slug = this.$route.params.slug;
      this.payload.case = 'confirmed';
      this.payload.date = this.fromToDate;
      return this.payload;
    },
  },
  mounted() {
    this.$store.dispatch('getCountryInfo', this.getParams());
  },
};
</script>

<style lang="scss" scoped></style>
