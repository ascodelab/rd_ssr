<template>
  <button class="btn-theme">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.btn-theme {
  @apply bg-white text-xs border-double border-4  border-gray-100 shadow-inner rounded-3xl text-gray-700 px-4 py-2 transition duration-300 ease-in-out relative -top-6;
}
</style>