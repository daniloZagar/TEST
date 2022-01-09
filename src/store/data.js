import axios from 'axios';
export const data = {
  state: () => ({
    countries: [],
  }),
  actions: {
    getCountries({ commit }) {
      axios.get('https://api.covid19api.com/summary').then((response) => {
        commit('SET_COUNTRIES', response.data.Countries);
      });
    },
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries;
    },
  },
  getters: {},
};
