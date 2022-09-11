<template>I'm SSR with these data: {{ data }}</template>

<script setup lang="ts">
const { data } = await useFetch('/api/ssr');
</script>
