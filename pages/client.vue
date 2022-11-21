<template>I'm rendering on the client (see the network tab): {{ useDate(data?.date) }}</template>

<script setup lang="ts">
const { data } = await useFetch("/api/date");
</script>
