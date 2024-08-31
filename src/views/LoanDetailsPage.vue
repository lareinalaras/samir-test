<template>
  <MyHeader></MyHeader>
  <div style="padding-bottom: 90px">
    <h2 style="margin-left: 15px; padding-top: 80px">Loan Details Page</h2>

    <div class="card1" v-if="items">
      <div style="display: flex; justify-content: space-between">
        <div>
          <div style="display: flex">
            <p class="text">Amount</p>
            &nbsp;
            <p class="text" style="color: green; font-weight: bold">
              ${{ items.amount }}
            </p>
          </div>
          <div style="display: flex">
            <p class="text">Interest Rate</p>
            &nbsp;
            <p class="text" style="color: green; font-weight: bold">
              {{ items.interestRate }}
            </p>
          </div>
        </div>
        <div style="display: flex; align-items: center; flex-direction: column">
          <div
            style="
              background-color: grey;
              color: white;
              border-radius: 50px;
              padding: 8px 15px;
            "
          >
            <p class="text" style="margin: 0px">{{ items.term }} days</p>
          </div>
        </div>
      </div>
      <!-- <p>{{ items.borrower }}</p> -->
    </div>

    <p class="text-title">Borrower Details:</p>
    <div class="card1" style="display: flex; flex-direction: column">
      <div class="detail-row">
        <p class="text-detail">Nama:</p>
        &nbsp;
        <p class="text-detail" style="color: grey">{{ name }}</p>
      </div>
      <div class="detail-row">
        <p class="text-detail">Email:</p>
        &nbsp;
        <p class="text-detail" style="color: grey">{{ email }}</p>
      </div>
      <div class="detail-row">
        <p class="text-detail">Credit Score:</p>
        &nbsp;
        <p class="text-detail" style="color: grey">{{ creditScore }}</p>
      </div>
    </div>

    <p class="text-title">Repayment Schedule:</p>
    <div style="display: flex; justify-content: space-between">
      <div class="card2" v-for="item in installments" :key="item.id">
        <p style="font-size: 40px; color: green; margin: 10px">
          ${{ item.amountDue }}
        </p>
        <p class="text-detail" style="margin: 0px 0px 10px 0px">
          {{ item.dueDate }}
        </p>
      </div>
    </div>
  </div>

  <footer>
    <div class="footer">
      <div @click="lend" class="button">Lend Now</div>
    </div>
  </footer>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";

export default {
  name: "LoanDetailsPage",
  props: ["id"],

  components: {
    MyHeader,
  },
  // setup() {
  //   const { LoanList } = LoanList();
  // },
  mounted() {
    this.getLoanList();
  },
  data() {
    return {
      items: null,
      name: null,
      email: null,
      creditScore: null,
      installments: null,
    };
  },

  methods: {
    async getLoanList() {
      const response = await fetch(
        "https://raw.githubusercontent.com/andreascandle/p2p_json_test/main/api/json/loans.json "
      );
      const data = await response.json();
      this.items = data.find((item) => item.id === this.id);
      this.name = this.items.borrower.name;
      this.email = this.items.borrower.email;
      this.creditScore = this.items.borrower.creditScore;
      this.installments = this.items.repaymentSchedule.installments;

      console.log("Loan list:", this.items);
    },

    lend(){
        alert("Lend Success!")
    }
  },
};
</script>

<style>
.card1 {
  display: flex;
  width: 95%;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 16px;
  margin: 16px;
  margin-top: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card2 {
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 16px;
  margin: 16px;
  margin-top: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 45%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.detail-row {
  display: flex;
  align-items: center;
}

.text {
  font-size: 20px;
}

.text-detail {
  font-size: 20px;
}

.text-title {
  font-size: 15px;
  font-weight: 600;
  margin-left: 17px;
  margin-bottom: 2px;
}

.footer {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  color: black;
  box-shadow: 5px 5px 1px rgba(0, 0, 0, 1.25);
  height: 90px;
  padding: 5px;
}

.button {
  border-radius: 15px;
  background-color: blue;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 400px) {
  .text-detail {
    font-size: 12px;
    word-break: break-all;
  }
  .text {
    font-size: 12px;
    word-break: break-all;
  }
  .card1 {
    padding: 12px;
    margin: 10px;
  }
}
</style>
