<template>
  <div class="flex justify-between items-center" @click="changeMode">
    <div
      class="w-16 h-4 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
      :class="{ 'bg-green': toggleActive}"
    >
      <div
        class="bg-white w-8 h-5 rounded-full shadow-md transform duration-300 ease-in-out"
        :class="{ 'translate-x-6': toggleActive,}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleActive: false
    };
  },
  computed: {
    mode() {
      return this.$colorMode.preference === "light" ? "dark" : "light";
    }
  },
  methods: {
    changeMode() {
      this.toggleActive = !this.toggleActive;
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    }
  }
};
</script>