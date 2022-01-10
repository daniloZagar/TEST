<template>
  <div>
    <div
      :class="checkIfAllZero ? 'hidden' : 'block'"
      class="flex flex-col items-center pt-10"
    >
      <div class="w-full pl-5 pr-5 pb-10 md:pl-0 md:pr-0 md:w-1/2">
        <p class="font-poppins text-2xl text-white pb-10">
          Last week
          <span class="font-bold text-3xl">{{ this.case.toUpperCase() }}</span>
          cases
        </p>
        <line-chart
          v-if="cases.length > 0"
          :label="this.case"
          :labels="formatedDates"
          :chartData="cases"
        ></line-chart>
      </div>
    </div>
    <div class="flex justify-center">
      <p
        :class="checkIfAllZero ? 'block' : 'hidden'"
        class="font-poppins text-2xl text-white pb-10"
      >
        <span class="font-bold text-3xl">{{ this.case.toUpperCase() }} 0</span>
      </p>
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
      countryData: [],
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
    checkIfAllZero() {
      return this.cases.every((item) => item === 0);
    },
  },
  methods: {
    getParams() {
      this.payload.slug = this.$route.params.slug;
      this.payload.case = this.case;
      this.payload.date = this.fromToDate;
      return this.payload;
    },
  },
  async created() {
    await axios
      .get(
        `https://api.covid19api.com/total/country/${
          this.getParams().slug
        }/status/${this.getParams().case}?${this.getParams().date}`
      )
      .then((resp) => {
        this.countryData = resp.data;
        this.cases = resp.data.map((cas) => cas.Cases);
        this.dates = resp.data.map((dat) => dat.Date);
        this.dates.map((d) => {
          let date = d.substring(0, 10);
          this.formatedDates.push(date);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
