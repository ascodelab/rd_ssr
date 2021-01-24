<template>
  <span class="justify-between items-center cursor-pointer" @click="changeMode">
    <span v-if="isLightMode">
      <fa icon="sun" class="duration-700 ease-in-out" :class="{ 'text-orange-500': isLightMode,}" />
    </span>
    <span v-if="!isLightMode">
      <fa
        icon="moon"
        class="duration-700 ease-in-out"
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
      return this.$colorMode.preference === "light" ? true : false;
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