export const navLinks = {
  state: () => ({
    links: [
      { id: 1, label: 'Home', link: '/home' },
      { id: 2, label: 'Info', link: '/info' },
    ],
    drawer: false,
  }),
  actions: {
    setDrawer: ({ commit, state }) => {
      commit('setDrawer', !state.drawer);
    },
  },
  mutations: {
    setDrawer: (state, data) => {
      state.drawer = data;
    },
  },
  getters: {
    links(state) {
      return state.links;
    },
    drawer(state) {
      return state.drawer;
    },
  },
};
