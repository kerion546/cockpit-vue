<template>
  <div>
    <div>
      <div class="text-center m-2">貸借対照表 (B/S)</div>
      <table class="table table-sm m-2 p-2 financialTableBs">
        <thead class="thead-light">
          <th class style="width: 35%"></th>
          <th class style="width: 15%">金額</th>
          <th class style="width: 35%"></th>
          <th class style="width: 15%">金額</th>
        </thead>
        <tbody>
          <tr>
            <th class="depth4">{{ cash }}</th>
            <td class="tsNo01 tsNo02">{{}}</td>
            <th class="depth4">{{ accountsPayable }}</th>
            <td>{{ accountsPayable }}</td>
          </tr>
          <tr>
            <th class="depth4">{{ goods }}</th>
            <td class>{{ goods }}</td>
            <th class="depth4">{{ shorttermBorrowings }}</th>
            <td>{{ shorttermBorrowings }}</td>
          </tr>
          <tr>
            <th class="depth4">{{ accountsReceivable }}</th>
            <td>{{ accountsReceivable }}</td>
            <th class="depth4">{{ deposit }}</th>
            <td>{{ deposit }}</td>
          </tr>
          <tr>
            <th class="depth2 sumColorLv3">{{ currentAssets | localeNum }}</th>
            <td class="sumColorLv3">{{ currentAssets }}</td>
            <th class="depth4">{{ unpaidCorporateTax }}</th>
            <td>{{ unpaidCorporateTax }}</td>
          </tr>
          <tr>
            <th class="depth4">{{ buildings }}</th>
            <td>{{ buildings }}</td>
            <th class="depth2 sumColorLv3">{{ currentLiability }}</th>
            <td class="sumColorLv3">{{ currentLiability }}</td>
          </tr>
          <tr>
            <th class="depth4">{{ tools }}</th>
            <td>{{ tools }}</td>
            <th class="depth4">{{ longtermBorrowings }}</th>
            <td>{{ longtermBorrowings }}</td>
          </tr>
          <tr>
            <th class="depth4">{{ cars }}</th>
            <td>{{ cars }}</td>
            <th class="depth2 sumColorLv3">{{ fixedLiability }}</th>
            <td class="sumColorLv3">{{ fixedLiability }}</td>
          </tr>
          <tr>
            <th class="depth4">{{ accumlatedDepriciation }}</th>
            <td class>{{ accumlatedDepriciation }}</td>
            <th class="depth1 sumColorLv2">{{ totalLiability }}</th>
            <td class="sumColorLv2">{{ totalLiability }}</td>
          </tr>
          <tr>
            <th class="depth3 sumColorLv4">{{ tangibleAssets }}</th>
            <td class="sumColorLv4">{{ tangibleAssets }}</td>
            <th class="depth4">{{ shareCapital }}</th>
            <td class="tsNo01">{{ shareCapital }}</td>
          </tr>
          <tr>
            <th class="depth4">{{ longtermLoanRe }}</th>
            <td>{{ longtermLoanRe }}</td>
            <th class="depth4">{{ retainedEarnings }}</th>
            <td>{{ retainedEarnings }}</td>
          </tr>
          <tr>
            <th class="depth3 sumColorLv4">{{ investmentAssets }}</th>
            <td class="sumColorLv4">{{ investmentAssets }}</td>
            <th class="depth2 sumColorLv3">{{ shareholdersEquity }}</th>
            <td class="sumColorLv3">{{ shareholdersEquity }}</td>
          </tr>
          <tr>
            <th class="depth2 sumColorLv3">{{ fixedAssets }}</th>
            <td class="sumColorLv3">{{ fixedAssets | localeNum }}</td>
            <th class="depth1 sumColorLv2">{{ totalEquity }}</th>
            <td class="sumColorLv2">{{ totalEquity | localeNum }}</td>
          </tr>
          <tr>
            <th class="depth1 sumColorLv1">{{ totalAssets }}</th>
            <td class="sumColorLv1">{{ totalAssets | localeNum }}</td>
            <th class="depth1 sumColorLv1">{{ totalLiabilityEquity }}</th>
            <td class="sumColorLv1">{{ totalLiabilityEquity | localeNum }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      cash: "現金及び預金",
      goods: "商品",
      accountsReceivable: "売掛金",
      currentAssets: "流動資産合計",
      buildings: "建物",
      tools: "工具器具備品",
      cars: "車両運搬具",
      accumlatedDepriciation: "▲減価償却累計額",
      tangibleAssets: "有形固定資産合計",
      longtermLoanRe: "長期貸付金",
      investmentAssets: "投資その他の資産合計",
      fixedAssets: "固定資産合計",
      totalAssets: "資産合計",
      accountsPayable: "買掛金",
      shorttermBorrowings: "短期借入金",
      deposit: "預り金",
      unpaidCorporateTax: "未払法人税等",
      currentLiability: "流動負債合計",
      longtermBorrowings: "長期借入金",
      fixedLiability: "固定負債合計",
      totalLiability: "負債合計",
      shareCapital: "資本金",
      retainedEarnings: "利益剰余金",
      shareholdersEquity: "株主資本合計",
      totalEquity: "純資産合計",
      totalLiabilityEquity: "負債・純資産合計"
    };
  },
  computed: {},
  filters: {
    toPercentage: function(value) {
      return value * 100;
    },
    localeNum: function(val) {
      return val.toLocaleString();
    }
  }
};
</script>
<style scoped>
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  vertical-align: middle;
}

/* 財務3表 */
table.financialTableBs > tbody > tr > td {
  text-align: right;
  padding-right: 10px;
  font-size: 12px;
}

table.financialTableBs > tbody > tr > th {
  text-align: left;
  font-size: 12px;
}

table.financialTableBs > tbody > tr > th.depth1 {
  padding-left: 10px;
}

table.financialTableBs > tbody > tr > th.depth2,
table.financialTablePl > tbody > tr > th.depth2,
table.financialTableSs > tbody > tr > th.depth2 {
  padding-left: 20px;
}

table.financialTableBs > tbody > tr > th.depth3,
table.financialTablePl > tbody > tr > th.depth3,
table.financialTableSs > tbody > tr > th.depth3 {
  padding-left: 30px;
}

table.financialTableBs > tbody > tr > th.depth4,
table.financialTablePl > tbody > tr > th.depth4,
table.financialTableSs > tbody > tr > th.depth4 {
  padding-left: 40px;
  font-weight: 100;
}

table.financialTableBs > tbody > tr > th.depth5 {
  padding-left: 50px;
}

table.financialTableBs thead tr th:nth-child(2),
table.financialTableBs tbody tr td:nth-child(2) {
  border-right: 1px solid rgb(200, 200, 200);
}

/* /財務3表 */

.table th {
  color: #495057;
  background-color: None;
  border-color: #dee2e6;
}

h3 {
  margin-top: 1rem;
}

.sumColorLv1 {
  background-color: rgb(205, 205, 205);
}

.sumColorLv2 {
  background-color: rgb(220, 220, 220);
}

.sumColorLv3 {
  background-color: rgb(235, 235, 235);
}

.sumColorLv4 {
  background-color: rgb(250, 250, 250);
}
</style>
