<template>
  <section class="article-media-switch-widget">
    <div class="flex items-center justify-center">
      <label for="mid-switch" class="flex items-center cursor-pointer">
        <div class="relative">
          <input id="mid-switch" type="checkbox" class="hidden" @click="change()" />
          <div class="toggle__line"></div>
          <div class="toggle__dot"></div>
        </div>
        <div class="ml-1 text-rd-theme font-xs">video</div>
      </label>
    </div>
  </section>
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
      //console.log(data);
      this.$store.dispatch("setData", data);
    }
  }
};
</script>
<!-- CSS -->
<style lang="postcss">
.article-media-switch-widget {
  @apply bg-white ml-2;
}
.dark-mode .article-media-switch-widget {
  @apply bg-gray-800;
}
.toggle__line {
  @apply w-8 h-2 bg-red-200 rounded-full shadow-inner;
}
.toggle__dot {
  @apply transition-all duration-300 ease-in-out bg-gray-400 absolute w-5 h-2 rounded-full shadow inset-y-0 left-0;
}
input:checked ~ .toggle__dot {
  transform: translateX(70%);
  background-color: #d47192;
}
</style>