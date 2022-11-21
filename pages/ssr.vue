<template>I'm server-side rendering: {{ data }}</template>

<script setup lang="ts">
const { data } = await useFetch("/api/date");
</script>
