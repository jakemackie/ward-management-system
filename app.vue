<template>
  <div class="min-h-screen">
    <Container />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Ward Management System',
  ogTitle: 'Ward Management System',
  description: 'The ward management system is a web application that helps hospital staff manage multiple wards.',
});

// HEAD
useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
