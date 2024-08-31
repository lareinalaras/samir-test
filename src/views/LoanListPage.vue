<template>
  <MyHeader></MyHeader>
  <div>
    <h2 style="margin-left: 15px; padding-top: 80px">Loan List</h2>
    <LoanList> </LoanList>
  </div>
</template>

<script>
import LoanList from "@/components/LoanList.vue";
import MyHeader from "@/components/MyHeader.vue";

export default {
  name: "LoanListPage",
  components: {
    LoanList,
    MyHeader,
  },
  // setup() {
  //   const { LoanList } = LoanList();
  // },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style></style>
