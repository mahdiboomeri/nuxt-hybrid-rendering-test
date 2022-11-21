<template>I'm rendering on the client (see the network tab): {{ data }}</template>

<script setup lang="ts">
const { data } = await useFetch("/api/date");
</script>
