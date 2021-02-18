<template>
  <span class="cm-btn justify-between items-center cursor-pointer" @click="changeMode">
    <span v-if="isLightMode">
      <fa icon="sun" class="duration-700 ease-in-out fa-spin" />
    </span>
    <span v-if="!isLightMode">
      <fa icon="moon" class="duration-700 ease-in-out animate-pulse" />
    </span>
  </span>
</template>
<style lang="postcss">
.cm-btn {
  @apply bg-rd-theme text-white fixed bottom-44 sm:bottom-80 pl-2 pr-3 py-2 rounded-r-lg transition-colors duration-300 ease-linear dark:bg-black;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isLightMode() {
      return this.$colorMode.preference === "dark" ? false : true;
    }
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    }
  }
};
</script>