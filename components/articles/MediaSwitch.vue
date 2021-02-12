<template>
  <div class="flex items-center justify-center">
    <!-- Toggle Button -->
    <label for="mid-switch" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="mid-switch" type="checkbox" class="hidden" @click="change()" />
        <!-- line -->
        <div class="toggle__line"></div>
        <!-- dot -->
        <div class="toggle__dot"></div>
      </div>
      <!-- label -->
      <div class="ml-2 text-gray-400 font-xs">video</div>
    </label>
  </div>
</template>
<!-- JS -->
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["videoEnabled"])
  },
  methods: {
    change() {
      let data = {};
      data.videoEnabled = this.videoEnabled == false ? true : false;
      console.log(data);
      this.$store.dispatch("setData", data);
    }
  }
};
</script>
<!-- CSS -->
<style lang="postcss">
.toggle__line {
  @apply w-8 h-2 bg-gray-400 rounded-full shadow-inner;
}
.toggle__dot {
  @apply transition-all duration-300 ease-in-out bg-rd-theme absolute w-5 h-2 bg-gray-300 rounded-full shadow inset-y-0 left-0;
}
input:checked ~ .toggle__dot {
  transform: translateX(70%);
  background-color: #d47192;
}
</style>