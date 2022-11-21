<template>Stale-while-revalidate (ISR): {{ data }}</template>

<script setup lang="ts">
const { data } = await useFetch("/api/ssr");
</script>
