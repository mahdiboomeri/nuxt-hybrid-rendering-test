<template>Stale-while-revalidate (ISR): {{ useDate(data?.date) }}</template>

<script setup lang="ts">
const { data } = await useFetch("/api/date");
</script>
