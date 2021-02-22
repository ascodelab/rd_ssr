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