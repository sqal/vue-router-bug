<script setup>
</script>

<template>
  <h1>Home</h1>
  <RouterLink :to="{ name: 'item:edit', params: { id: 1 } }">Go to /item/edit/1</RouterLink>
</template>
