import { Module } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state: any = {
  count: 0,
};

const {{name_cc}}: Module<any, any> = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};

export default {{name_cc}};
