<template>
  Stale-while-revalidate (ISR) in dynamic route ({{ route.params.id }}):
  {{ useDate(data?.date) }}
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch("/api/date");
</script>
