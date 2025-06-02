<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="flex justify-between items-center p-4 lg:px-12 max-w-7xl mx-auto">
      <!-- Logo -->
      <div class="text-2xl font-bold text-indigo-600">
        pedrotabau
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#about" class="hover:text-indigo-500 transition">About</a>
        <a href="#projects" class="hover:text-indigo-500 transition">Projects</a>
        <a href="#contact" class="hover:text-indigo-500 transition">Contact</a>
      </nav>

      <!-- Mobile Menu (optional) -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-white px-6 pb-4">
      <a href="#about" class="block py-2 text-gray-700 hover:text-indigo-500">About</a>
      <a href="#projects" class="block py-2 text-gray-700 hover:text-indigo-500">Projects</a>
      <a href="#contact" class="block py-2 text-gray-700 hover:text-indigo-500">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Opcional: estilização adicional */
</style>
