export const navigation = {
  state: () => ({
    navLinks: [
      { id: 1, label: 'Home', link: '/home' },
      { id: 2, label: 'Info', link: '/info' },
    ],
    drawerOpen: false,
  }),
  actions: {
    showDrawer({ commit }) {
      commit('TOGGLE_DRAWER', true);
    },
    hideDrawer({ commit }) {
      commit('TOGGLE_DRAWER', false);
    },
    toggleDrawer({ commit, state }) {
      commit('TOGGLE_DRAWER', !state.drawerOpen);
    },
  },
  mutations: {
    TOGGLE_DRAWER(state, data) {
      state.drawerOpen = data;
    },
  },
  getters: {
    navLinks(state) {
      return state.navLinks;
    },
    drawer(state) {
      return state.drawerOpen;
    },
  },
};
