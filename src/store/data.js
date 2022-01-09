import axios from 'axios';
export const data = {
  state: () => ({
    countries: [],
    countryData: [],
  }),
  actions: {
    getCountries({ commit }) {
      axios.get('https://api.covid19api.com/summary').then((response) => {
        commit('SET_COUNTRIES', response.data.Countries);
      });
    },
    getCountryInfo({ commit }, payload) {
      axios
        .get(
          `https://api.covid19api.com/country/${payload.slug}/status/${payload.case}?${payload.date}`
        )
        .then((response) => {
          commit('SET_COUNTRY', response.data);
        });
    },
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries;
    },
    SET_COUNTRY(state, countryData) {
      state.countryData = countryData;
    },
  },
  getters: {},
};
