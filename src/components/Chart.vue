<template>
  <div>
    {{ cases }}<list-chart :label="this.case" :chartData="cases"></list-chart>
  </div>
</template>

<script>
import axios from 'axios';
import ListChart from './ListCharts.vue';
export default {
  components: {
    ListChart,
  },
  props: {
    case: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      cases: [],
      casesChart: [],
      payload: {
        slug: '',
        case: '',
        date: '',
      },
    };
  },
  computed: {
    // countryData() {
    //   return this.$store.state.data.countryData;
    // },
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
      this.payload.case = this.case;
      this.payload.date = this.fromToDate;
      return this.payload;
    },
    getData() {
      axios
        .get(
          `https://api.covid19api.com/total/country/${
            this.getParams().slug
          }/status/${this.getParams().case}?${this.getParams().date}`
        )
        .then((resp) => {
          this.cases = resp.data.map((ex) => ex.Cases);
          console.log(resp);
          console.log(this.cases);
        });
    },
    // getChartData() {
    //   this.casesChart = this.getData().map((sd) => sd.Cases);
    //   console.log(this.casesChart);
    //   return this.casesChart;
    // },
  },
  created() {
    // this.$store.dispatch('getCountryInfo', this.getParams());
    this.getData();
  },
};
</script>

<style scoped></style>
