<template>Pre-rendered on build: {{ useDate(data?.date) }}</template>

<script setup lang="ts">
const { data } = await useFetch("/api/date");
</script>
