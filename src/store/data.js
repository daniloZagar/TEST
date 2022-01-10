import axios from 'axios';
export const data = {
  state: () => ({
    countriesData: [],
    globalData: {},
  }),
  actions: {
    getTotalData({ commit }) {
      axios
        .get('https://api.covid19api.com/summary')
        .then((response) => {
          commit('SET_TOTAL_DATA', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    SET_TOTAL_DATA(state, countriesData) {
      state.countriesData = countriesData.Countries;
      state.globalData = countriesData.Global;
    },
  },
  getters: {},
};
