<template>
  <div>
    <div>
      <div class="table_container m-2">
        <table class="table table-sm table-bordered m-2 p-2 tsTable">
          <thead class="thead-light">
            <th class="col-xs-3"></th>
            <th class="col-xs-3">借方勘定科目</th>
            <th class="col-xs-3">借方金額</th>
            <th class="col-xs-3">貸方勘定科目</th>
            <th class="col-xs-3">貸方金額</th>
          </thead>
          <tbody>
            <tr>
              <th>#</th>
              <th>現金・預金</th>
              <td>{{ tsNo1CrShareCapital }}</td>
              <th>資本金</th>
              <td>{{ tsNo1CrShareCapital }}</td>
            </tr>
            <tr>
              <th>#</th>
              <th>商品</th>
              <td>{{ tsNo2DrGoods }}</td>
              <th>現金・預金</th>
              <td>{{ tsNo2CrCash }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <div>{{this.test}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      // no1_sharePrice: this.$store.state.param.no1_sharePrice,
      // no1_shareNumber: this.$store.state.param.no1_shareNumber
    };
  },
  computed: {
    // test: function() {
    //   return this.no1_sharePrice;
    // },
    no1_sharePrice() {
      return this.$store.state.param.no1_sharePrice
    },
    no1_shareNumber() {
      return this.$store.state.param.no1_shareNumber
    },
    tsNo1CrShareCapital: {
      get() {
        return (
          this.$store.state.param.no1_sharePrice *
          this.$store.state.param.no1_shareNumber
        );
      },
      set(value) {
        this.$store.commit("setTsNo1CrShareCapital", value);
      }
    },
    tsNo2DrGoods: {
      get() {
        return (
          this.$store.state.param.no2_goodsPrice *
          this.$store.state.param.no2_goodsNumber
        );
      },
      set(value) {
        this.$store.commit("setTsNo2Goods", value);
      }
    },
    tsNo2CrCash: {
      get() {
        return this.tsNo2DrGoods;
      },
      set(value) {
        this.$store.commit("setTsNo2Cash", value);
      }
    }
    // tsNo1CrShareCapital: function() {
    //   return this.no1_shareNumber * this.no1_sharePrice;
    // }
  }
};
</script>
<style scoped></style>
