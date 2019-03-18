import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  add(state, payload) {
    state.count += 1;
  },
};

export default mutations;
