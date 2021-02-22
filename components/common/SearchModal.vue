<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <button @click="modalToggle">
      <i class="fa fa-search"></i>
    </button>
    <!-- modal  -->
    <section v-if="searchModal">
      <div class="fixed z-10 inset-0 overflow-y-auto bg-rd-theme -top-40 sm:-top-0">
        <div class="modal-wrap">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-400 opacity-40"></div>
          </div>
          <span
            class="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >&#8203;</span>
          <div class="modal-main" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="modal-body">
              <search />
            </div>
            <div class="modal-footer">
              <button
                class="fa fa-close rounded-full text-gray-400 p-2 cursor-pointer"
                @click="modalToggle"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  @apply inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full;
}
.modal-body {
  @apply px-4 pt-5 pb-4 sm:p-6 sm:pb-4;
}
.modal-footer {
  @apply text-rd-theme py-2 text-xs px-6 flex flex-row-reverse;
}
</style>