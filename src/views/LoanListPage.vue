<template>
  <MyHeader></MyHeader>
  <div>
    <h2 style="margin-left: 15px; margin-bottom: 0px; padding-top: 80px">Loan List</h2>
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
};
</script>
