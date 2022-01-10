import axios from 'axios';
export const data = {
  state: () => ({
    totalData: [],
    countryData: [],
    loadingStatus: false,
  }),
  actions: {
    getTotalData({ commit }) {
      axios.get('https://api.covid19api.com/summary').then((response) => {
        commit('SET_TOTAL_DATA', response.data);
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
    SET_TOTAL_DATA(state, totalData) {
      state.totalData = totalData;
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
