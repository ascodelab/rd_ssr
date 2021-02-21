<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="modal-wrap">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-900 opacity-70"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="modal-main" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="modal-body">
          <search />
        </div>
        <div class="modal-footer">
          <button
            class="fa fa-close rounded-full bg-gray-300 p-2 px-3 cursor-pointer"
            @click="modalToggle"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["searchModal"])
  },
  methods: {
    modalToggle() {
      let data = {};
      data.searchModal = this.searchModal == false ? true : false;
      //console.log(data);
      this.$store.dispatch("setData", data);
    }
  }
};
</script>
<style lang="postcss" scoped>
.modal-wrap {
  @apply flex items-end justify-center min-h-screen pt-4 px-4 pb-4 text-center sm:block sm:p-0;
}
.modal-main {
  @apply inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full;
}
.modal-body {
  @apply bg-rd-theme px-4 pt-5 pb-4 sm:p-6 sm:pb-4;
}
.modal-footer {
  @apply bg-rd-theme  text-gray-600 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse;
}
</style>