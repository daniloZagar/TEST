<template>
  <div class="pt-20 w-full min-h-screen bg-black">
    <div class="container p-5">
      <div class="flex flex-col pb-10 text-white">
        <h3 class="text-white text-2xl">
          Total Confirmed Cases:
          {{ totalData.Global.TotalConfirmed }}
        </h3>
        <h3 class="text-white text-2xl">
          Total Death Cases:
          {{ totalData.Global.TotalDeaths }}
        </h3>
        <h3 class="text-white text-2xl">
          Total Recovered Cases:
          {{ totalData.Global.TotalRecovered }}
        </h3>
      </div>
      <table class="table-fixed border-collapse w-full">
        <thead class="bg-gray">
          <tr>
            <th
              class="text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2 pt-3 pb-3"
            >
              Country
            </th>
            <th
              class="text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2"
            >
              Confirmed
            </th>
            <th
              class="text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2"
            >
              Recovered
            </th>
            <th
              class="text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2"
            >
              Deaths
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-500">
          <tr class="" v-for="country in totalData.Countries" :key="country.ID">
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
            >
              <router-link :to="'/home/country/' + country.Slug">
                {{ country.Country }}
              </router-link>
            </td>
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
            >
              {{ country.TotalConfirmed }}
            </td>
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
            >
              {{ country.TotalRecovered }}
            </td>
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2 pt-2 pb-2"
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
    totalData() {
      return this.$store.state.data.totalData;
    },
  },
  created() {
    this.$store.dispatch('getTotalData');
  },
};
</script>

<style lang="scss" scoped></style>
