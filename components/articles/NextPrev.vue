<template>
  <div class="pnl-wrap">
    <div class="link">
      <p v-if="related.prev">
        <NuxtLink class="header-link" :to="related.prev">
          <i class="fa fa fa-arrow-left mr-1" aria-hidden="true"></i>
          {{related.prev}}
        </NuxtLink>
      </p>
    </div>
    <div class="link">
      <p v-if="related.next">
        <NuxtLink class="header-link" :to="related.next">
          {{related.next}}
          <i class="fa fa-arrow-right ml-1"></i>
        </NuxtLink>
      </p>
    </div>
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
  @apply border-b prose prose-sm mx-auto mb-16 px-4 py-2 flex justify-between;
}
.link {
  @apply text-rd-theme font-bold text-base;
}
.link a {
  @apply no-underline text-rd-theme text-opacity-70 hover:text-opacity-100;
}
</style>