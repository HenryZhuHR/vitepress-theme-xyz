<script setup lang="ts">
// import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
// const { theme } = useData()
// console.log('theme', theme)


</script>

<template>
  <Layout>
    <template #doc-before>
      <div>Before Doc Content</div>
    </template>
  </Layout>
</template>
