<template>
  <div>
    <div>
      <div class="table_container m-2">
        <table class="table table-sm table-bordered m-2 p-2 tsTable">
          <thead class="thead-light">
            <th class="col-xs-3"></th>
            <th class="col-xs-3">取引内容</th>
            <th class="col-xs-3">要素1</th>
            <th class="col-xs-3">要素2</th>
          </thead>
          <tbody>
            <tr>
              <th>#</th>
              <td>
                元手
                {{
                  no1_shareNumber * no1_sharePrice
                }}で会社を設立し、その全額を資本金とした。
              </td>
              <td>
                <div>
                  <span>発行株式数：{{ no1_shareNumber }}</span>
                  <input
                    v-model.number="no1_shareNumber"
                    type="range"
                    min="0"
                    max="100"
                    width="200px"
                  />
                </div>
              </td>
              <td>
                <div>
                  <span>発行株価：{{ no1_sharePrice }}</span>
                  <input
                    v-model.number="no1_sharePrice"
                    type="range"
                    min="0"
                    max="100"
                    width="200px"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th>#</th>
              <td>
                商品{{
                  no2_goodsPrice * no2_goodsNumber
                }}を購入し、全額を現金で支払った
              </td>
              <td>
                <div>
                  <span>購入数：{{ no2_goodsNumber }}</span>
                  <input
                    v-model.number="no2_goodsNumber"
                    type="range"
                    min="0"
                    max="100"
                    width="200px"
                  />
                </div>
              </td>
              <td>
                <div>
                  <span>購入単価：{{ no2_goodsPrice }}</span>
                  <input
                    v-model.number="no2_goodsPrice"
                    type="range"
                    min="0"
                    max="100"
                    width="200px"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    no1_sharePrice: {
      get() {
        return this.$store.state.param.no1_sharePrice;
      },
      set(value) {
        this.$store.commit("setNo1_sharePrice", value);
      }
    },
    no1_shareNumber: {
      get() {
        return this.$store.state.param.no1_shareNumber;
      },
      set(value) {
        this.$store.commit("setNo1_shareNumber", value);
      }
    },

    no2_goodsPrice: {
      get() {
        return this.$store.state.param.no2_goodsPrice;
      },
      set(value) {
        this.$store.commit("setNo2_goodsPrice", value);
      }
    },
    no2_goodsNumber: {
      get() {
        return this.$store.state.param.no2_goodsNumber;
      },
      set(value) {
        this.$store.commit("setNo2_goodsNumber", value);
      }
    }
  }
};
</script>
<style scoped>
input[type="range"] {
  height: 10px;
  -webkit-appearance: none;
  margin: 2px 0;
  width: 100%;
  padding: 2px 2px;
  border: none;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: #c5c6c9;
  border-radius: 14px;
  border: 0px solid #000000;
}

input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 18px;
  background: #000587;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6.5px;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #c5c6c9;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: #c5c6c9;
  border-radius: 14px;
  border: 0px solid #000000;
}

input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497e3;
  height: 24px;
  width: 26px;
  border-radius: 20px;
  background: #000587;
  cursor: pointer;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"]::-ms-fill-lower {
  background: #c5c6c9;
  border: 0px solid #000000;
  border-radius: 28px;
  box-shadow: 0px 0px 0px #000000;
}

input[type="range"]::-ms-fill-upper {
  background: #c5c6c9;
  border: 0px solid #000000;
  border-radius: 28px;
  box-shadow: 0px 0px 0px #000000;
}

input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497e3;
  height: 24px;
  width: 26px;
  border-radius: 20px;
  background: #000587;
  cursor: pointer;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #c5c6c9;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #c5c6c9;
}
</style>
