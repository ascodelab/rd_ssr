<template>
  <span class="justify-between items-center cursor-pointer" @click="changeMode">
    <span
      v-if="isLightMode"
      class="rounded-xl text-sm border border-gray-100 text-rd-theme px-4 py-2 transition-colors duration-300 ease-linear"
    >
      <fa
        icon="sun"
        class="duration-700 ease-in-out fa-spin text-rd-theme"
        :class="{ 'text-orange-500': isLightMode,}"
      />
    </span>
    <span
      v-if="!isLightMode"
      class="rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300 ease-linear px-3 py-2"
    >
      <fa
        icon="moon"
        class="duration-700 ease-in-out animate-pulse"
        :class="{ 'text-yellow-500 ': !isLightMode,}"
      />
    </span>
  </span>
</template>

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