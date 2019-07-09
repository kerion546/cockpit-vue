<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <Parameter />
    <JournalEntry />
    <div class="row">
      <div class="col-6">
        <GL />
      </div>
    </div>
    <BalanceSheet />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import BalanceSheet from "@/components/BalanceSheet.vue";
import Parameter from "@/components/Parameter.vue";
import JournalEntry from "@/components/JournalEntry.vue";
import GL from "@/components/GL.vue";

export default {
  name: "home",
  components: {
    BalanceSheet,
    Parameter,
    JournalEntry,
    GL
  }
};
</script>
