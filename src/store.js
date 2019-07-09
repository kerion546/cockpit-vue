import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    param: {
      no1_sharePrice: 50,
      no1_shareNumber: 0,
      tsNo1CrShareCapital: 0,
      no2_goodsPrice: 50,
      no2_goodsNumber: 0,
      tsNo2DrGoods: "",
      tsNo2CrCash: ""
    }
  },
  mutations: {
    // 以下、パラメータ管理
    setNo1_sharePrice(state, val) {
      state.param.no1_sharePrice = val;
    },
    setNo1_shareNumber(state, val) {
      state.param.no1_shareNumber = val;
    },
    setNo2_goodsPrice(state, val) {
      state.param.no2_goodsPrice = val;
    },
    setNo2_goodsNumber(state, val) {
      state.param.no2_goodsNumber = val;
    },
    // 以下、仕訳管理
    setTsNo1CrShareCapital(state, val) {
      state.param.tsNo1CrShareCapital = val;
    },
    setTsNo2Goods(state, val) {
      state.param.tsNo2DrGoods = val;
    },
    setTsNo2Cash(state, val) {
      state.param.tsNo2CrCash = val;
    }
    // cashBalance(state, val) {
    //   state.param.cashBalance = val;
    // }
  },
  actions: {
    // updateNo1_shareNumber({ commit }, val) {
    //   commit("addNo1_shareNumber", { val });
    // }
  },
  getters: {
    // tsNo1CrShareCapital: state => {
    //   return state.param.no1_shareNumber * state.param.no1_sharePrice;
    // }
    // cashBalance: state => {
    //   return state;
    // }
  }
});
