import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
  amount(state) {
    return state.count;
  },
};

export default getters;
