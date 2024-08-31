<template>
  <div>
    <button class="button-menu" @click="$router.push('/loan-list')">
      Loan List
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.button-menu {
  background-color: #d3f300;
  border: solid black;
  color: black;
  box-shadow: 5px 5px 1px rgba(0, 0, 0, 1.25);
  padding: 15px 45px;
}
</style>
