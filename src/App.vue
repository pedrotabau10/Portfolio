<template>
  <div class="bg-[#D4EBF8] dark:bg-[#1E293B] min-h-screen">
    <Navbar />
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/layout/navbar.vue'));
</script>
