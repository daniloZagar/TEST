<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="w-full pl-5 pr-5 md:pl-0 md:pr-0 md:w-1/2">
        {{ cases
        }}<line-chart
          :label="this.case"
          :labels="formatedDates"
          :chartData="cases"
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LineChart from './LineChart.vue';
export default {
  components: {
    LineChart,
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
      dates: [],
      formatedDates: [],
      casesChart: [],
      payload: {
        slug: '',
        case: '',
        date: '',
      },
    };
  },
  computed: {
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
          this.cases = resp.data.map((cas) => cas.Cases);
          this.dates = resp.data.map((dat) => dat.Date);
          this.dates.map((d) => {
            let date = d.substring(0, 10);
            this.formatedDates.push(date);
          });
        });
    },
  },
  mounted() {
    // this.$store.dispatch('getCountryInfo', this.getParams());
    this.getData();
  },
};
</script>

<style scoped></style>
