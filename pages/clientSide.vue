<template>I'm client side with these data: {{ data }}</template>

<script setup lang="ts">
const { data } = await useFetch('/api/client');
</script>
