<template>
  <div class="overflow-x-hidden">
    <!-- Header Component -->
    <Header />
    <div class="px-6 py-8">
      <Nuxt />
    </div>
    <!-- footer component -->
    <Footer />
  </div>
</template>
<style lang="postcss">
.dark-mode {
  @apply bg-gray-800 text-gray-100;
}

.light-mode {
  @apply bg-gray-100 text-gray-800;
}
</style>
