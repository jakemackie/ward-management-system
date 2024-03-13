<template>
  <div class="flex flex-col md:flex-row">
    <Sidebar />
    <Content />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Dashboard page',
    },
  ],
})
</script>