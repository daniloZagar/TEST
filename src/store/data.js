import axios from 'axios';
export const data = {
  state: () => ({
    countries: [],
    global: [],
    countryData: [],
  }),
  actions: {
    getCountries({ commit }) {
      axios.get('https://api.covid19api.com/summary').then((response) => {
        commit('SET_COUNTRIES', response.data.Countries);
      });
    },
    getGlobalData({ commit }) {
      axios.get('https://api.covid19api.com/summary').then((response) => {
        commit('GLOBAL_DATA', response.data.Global);
      });
    },
    getCountryInfo({ commit }, payload) {
      axios
        .get(
          `https://api.covid19api.com/total/country/${payload.slug}/status/${payload.case}?${payload.date}`
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
    GLOBAL_DATA(state, global) {
      state.global = global;
    },
  },
  getters: {},
};
