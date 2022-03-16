<script setup>
  import { router } from "@/router";
  import { auth } from "@/auth";

  function login() {
    auth.login()
    router.replace('/')
  }
</script>

<template>
  <button @click="login()" type="button">log in</button>
</template>
