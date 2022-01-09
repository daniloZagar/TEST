<template>
  <div class="pt-20 w-full min-h-screen bg-black">
    <div class="container p-5">
      <table class="table-fixed border-collapse w-full">
        <thead class="bg-gray">
          <tr>
            <th
              class="text-xs sm:text-base md:text-xl text-center md:text-left border-solid border-1 border-white bg-pink pl-0 sm:pl-2"
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
          <tr class="" v-for="country in fetchCountries" :key="country.ID">
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2"
            >
              <router-link :to="'/home/country/' + country.Slug">
                {{ country.Country }}
              </router-link>
            </td>
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2"
            >
              {{ country.TotalConfirmed }}
            </td>
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2"
            >
              {{ country.TotalRecovered }}
            </td>
            <td
              class="text-xs sm:text-base md:text-lg text-center md:text-left text-white border-solid border-1 border-white pl-0 sm:pl-2"
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
    fetchCountries() {
      return this.$store.state.data.countries;
    },
  },
  mounted() {
    this.$store.dispatch('getCountries');
  },
};
</script>

<style lang="scss" scoped></style>
