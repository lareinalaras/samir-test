<template>
  <div>
    <div
      class="card"
      @click="goToLoanDetails(item.id)"
      v-for="item in items"
      :key="item.id"
    >
      <div style="display: flex; justify-content: space-between">
        <div>
          <div style="display: flex">
            <p class="text">Amount</p>
            &nbsp;
            <p class="text" style="color: green; font-weight: bold">
              ${{ item.amount }}
            </p>
          </div>
          <div style="display: flex">
            <p class="text">Interest Rate</p>
            &nbsp;
            <p class="text" style="color: green; font-weight: bold">
              {{ item.interestRate }}
            </p>
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 15px;
          "
        >
          <div
            style="
              background-color: grey;
              color: white;
              border-radius: 50px;
              padding: 8px 15px;
            "
          >
            <p style="margin: 0px">{{ item.term }} days</p>
          </div>
          <h3 class="text" style="color: blue">Lend</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { axios } from "axios";

export default {
  name: "LoanList",

  data() {
    return {
      items: [],
    };
  },

  mounted() {
    this.getLoanList();
  },

  methods: {
    async getLoanList() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/andreascandle/p2p_json_test/main/api/json/loans.json "
        );
        const data = await response.json();
        this.items = data;
        console.log("Loan list:", this.items);
      } catch (error) {
        console.error("Error fetching loan list:", error);
      }
    },

    goToLoanDetails(id) {
      this.$router.push({ name: "LoanDetailsPage", params: { id } });
    },
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.text {
  font-size: 20px;
}
</style>
