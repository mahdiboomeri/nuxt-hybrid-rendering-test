<template>Pre-rendered on build: {{ data }}</template>

<script setup lang="ts">
const { data } = await useFetch("/api/date");
</script>
