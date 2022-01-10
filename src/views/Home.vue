<template>
  <div class="pt-20 w-full min-h-screen bg-black">
    <div class="container p-5">
      <div class="pb-10">
        <h3 class="font-montserrat text-white text-xl">
          Total Confirmed:
          <span class="text-2xl font-semibold">{{
            globalData.TotalConfirmed
          }}</span>
        </h3>
        <h3 class="font-montserrat text-white text-xl">
          Total Deaths:
          <span class="text-2xl font-semibold">{{
            globalData.TotalDeaths
          }}</span>
        </h3>
        <h3 class="font-montserrat text-white text-xl">
          Total Recovered:
          <span class="text-2xl font-semibold">{{
            globalData.TotalRecovered
          }}</span>
        </h3>
      </div>
      <table class="table-fixed border-collapse w-full">
        <thead class="bg-gray">
          <tr>
            <th
              class="font-poppins text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2 pt-3 pb-3"
            >
              Country
            </th>
            <th
              class="font-poppins text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2"
            >
              Confirmed
            </th>
            <th
              class="font-poppins text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2"
            >
              Recovered
            </th>
            <th
              class="font-poppins text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2"
            >
              Deaths
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-500">
          <tr class="" v-for="country in countriesData" :key="country.ID">
            <td
              class="font-poppins hover:bg-gray text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
            >
              <router-link :to="'/home/country/' + country.Slug">
                {{ country.Country }}
              </router-link>
            </td>
            <td
              class="font-poppins text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
            >
              {{ country.TotalConfirmed }}
            </td>
            <td
              class="font-poppins text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
            >
              {{ country.TotalRecovered }}
            </td>
            <td
              class="font-poppins text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
            >
              {{ country.TotalDeaths }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    countriesData() {
      return this.$store.state.data.countriesData;
    },
    globalData() {
      return this.$store.state.data.globalData;
    },
  },
  created() {
    this.$store.dispatch('getTotalData');
  },
};
</script>

<style lang="scss" scoped></style>
