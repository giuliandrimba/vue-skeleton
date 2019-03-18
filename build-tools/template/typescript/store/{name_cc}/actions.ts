import { ActionTree } from 'vuex';

const actions: ActionTree<any, any> = {
  add({ commit }, payload: any): void {
    commit('add', payload);
  },
};

export default actions;
