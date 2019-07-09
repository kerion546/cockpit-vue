<template>
  <div>
    <div>
      <div class="table_container m-2">
        <div class="text-center m-2">現金・預金勘定</div>
        <table class="table table-sm table-bordered m-2 p-2 tsTable">
          <thead class="thead-light">
            <th class="col-xs-3">日付</th>
            <th class="col-xs-3">相手勘定</th>
            <th class="col-xs-3">金額</th>
            <th class="col-xs-3">日付</th>
            <th class="col-xs-3">相手勘定</th>
            <th class="col-xs-3">金額</th>
          </thead>
          <tbody>
            <tr>
              <th>#1</th>
              <td>資本金</td>
              <td>{{ tsNo1CrShareCapital }}</td>
              <th>#2</th>
              <td>商品</td>
              <td>{{ tsNo2CrCash }}</td>
            </tr>
            <tr>
              <th>#3</th>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import state from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    tsNo1CrShareCapital() {
      return this.$store.state.param.tsNo1CrShareCapital;
    },
    tsNo2CrCash() {
      return this.$store.state.param.tsNo2CrCash;
    }
    // tsNo1CrShareCapital: {
    //   get() {
    //     return (
    //       this.$store.state.param.no1_sharePrice *
    //       this.$store.state.param.no1_shareNumber
    //     );
    //   }
    // }

    // ...mapMutation(["setTsNo1CrShareCapital"])
    // tsNo1CrShareCapital: {
    //   get() {
    //     return (
    //       this.$store.state.param.no1_sharePrice *
    //       this.$store.state.param.no1_shareNumber
    //     );
    //   },
    //   set(value) {
    //     this.$store.commit("setTsNo1CrShareCapital", value);
    //   }
    // }
  }
};
</script>
<style scoped></style>
