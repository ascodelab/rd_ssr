<template>
  <div class="pnl-wrap">
    <div class="link">prev</div>
    <div class="link">next</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["related"])
  }
};
</script>
<style lang="postcss" scoped>
.pnl-wrap {
  @apply border-b prose prose-sm mx-auto mb-12 px-4 py-2 flex justify-between;
}
</style>