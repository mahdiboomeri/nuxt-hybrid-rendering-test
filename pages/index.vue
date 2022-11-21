<template>
  <div class="links">
    <NuxtLink href="/ssr">SSR</NuxtLink>
    <NuxtLink href="/swr">Stale-while-revalidate (ISR)</NuxtLink>
    <NuxtLink href="/client">Client-side Rendering</NuxtLink>
    <NuxtLink href="/redirectToSSR">Redirect to `/ssr`</NuxtLink>
    <NuxtLink href="/prerender">Fully static</NuxtLink>

    <NuxtLink href="/blog">Blog archive</NuxtLink>
    <NuxtLink href="/blog/test">Blog article</NuxtLink>
    <NuxtLink href="/blog/category/cat1">Blog Category</NuxtLink>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
}
</style>