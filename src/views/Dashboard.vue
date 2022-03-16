<script setup>
  import { auth } from "@/auth";
</script>

<template>
  <button @click="auth.logout()" type="button">Log out</button>
  <main>
    <RouterView />
  </main>
</template>
