<template>
  <button class="btn-theme">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.btn-theme {
  @apply bg-rd-theme rounded-3xl text-white px-4 py-2 transition duration-300 ease-in-out relative -top-6;
}
</style>