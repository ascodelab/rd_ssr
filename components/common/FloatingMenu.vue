<template>
  <div class="_fm-wrap">
    <div class="_fm_items">
      <color-mode></color-mode>
    </div>
    <div class="_fm_items">
      <search-modal></search-modal>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
._fm-wrap {
  @apply bg-rd-theme text-white fixed bottom-44 bottom-80 pl-2 pr-3 py-2 rounded-r-lg transition-all duration-100 ease-linear dark:bg-black;
}
._fm_items:hover {
  @apply text-black;
}
</style>