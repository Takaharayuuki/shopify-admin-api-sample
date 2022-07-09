<template>
  <NuxtLayout>
    <div v-for="(page, i) in pages" :key="`page-${i}`">
      <NuxtLink :to="page.name">
        {{ page.name }}
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const pages = [{ name: "/products" }];
</script>
