<template>
  <header class="header">
    <img
      style="height: 70px; padding-left: 15px"
      src="../assets/samir-logo.jpg"
      alt="logo"
    />
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 10px 0;
  z-index: 1000;
}
</style>
