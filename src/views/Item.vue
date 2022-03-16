<script setup>
  import { onBeforeRouteLeave } from "vue-router";

  onBeforeRouteLeave((to, from, next) => {
    console.log('onBeforeRouteLeave')
    next(false)
  })
</script>

<template>
  <h1>{{ $route.fullPath }}</h1>
  <RouterLink :to="{ name: 'home' }">Go to /home</RouterLink>
</template>
