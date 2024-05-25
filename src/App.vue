<script setup>

</script>

<template>
<div class="container-fluid bg-dark m-0">
  <router-link :to="{name:'home'}">
    <h4 class="text-center text-light p-4">MOVIE <span class="text-success me-3"> APP</span> </h4>
  </router-link>
</div>

<main>
  <router-view></router-view>
</main>

</template>

<style scoped>

</style>
