<template>SWR: {{ data }}</template>

<script setup lang="ts">
const { data } = await useFetch('/api/ssr');
</script>
