<template>
  <div>
    <!-- Button Filter Term  -->
    <div class="dropdown-container">
      <button @click="toggleDropdown" class="dropdown-button">
        {{ selectedTerm ? selectedTerm + " days" : "Select Term" }}
      </button>
      <div v-if="isDropdownVisible" class="dropdown-popup">
        <button
          v-for="(term, index) in uniqueTerms"
          :key="index"
          :class="['dropdown-item', { selected: selectedIndex === index }]"
          @click="selectOption(index)"
        >
          {{ term }} days
        </button>
      </div>
    </div>

    <!-- Card for Loan List -->
    <div
      class="card"
      @click="goToLoanDetails(item.id)"
      v-for="item in filteredItems"
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
              {{ item.interestRate }}%
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
export default {
  name: "LoanListPage",

  data() {
    return {
      items: [],
      uniqueTerms: [],
      selectedTerm: null,
      isDropdownVisible: false,
      selectedIndex: null,
    };
  },

  mounted() {
    this.getLoanList();
  },

  computed: {
    filteredItems() {
      if (this.selectedTerm) {
        return this.items.filter((item) => item.term === this.selectedTerm);
      }
      return this.items;
    },
  },

  methods: {
    // Method for fetching loan list
    async getLoanList() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/andreascandle/p2p_json_test/main/api/json/loans.json"
        );
        const data = await response.json();
        this.items = data;
        this.uniqueTerms = this.getUniqueTerms(data);
      } catch (error) {
        console.error("Error fetching loan list:", error);
      }
    },

    // Method for getting unique terms (value terms tidak berulang)
    getUniqueTerms(data) {
      const terms = data.map((item) => item.term);
      return [...new Set(terms)].sort((a, b) => a - b);
    },

    // Method for toggling dropdown
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },

    selectOption(index) {
      this.selectedIndex = index;
      this.selectedTerm = this.uniqueTerms[index];
      this.isDropdownVisible = false;
    },

    // Method for go to loan details
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

.dropdown-container {
  display: flex;
  width: auto;
  justify-content: end;
  position: relative;
  margin-right: 15px;
}

.dropdown-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.dropdown-item {
  background-color: #f9f9f9;
  border: none;
  padding: 10px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.dropdown-popup {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  right: 0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
  top: 100%;
}

.dropdown-item:hover {
  background-color: #ddd;
}

.dropdown-item.selected {
  background-color: #4caf50;
  color: white;
}
</style>
