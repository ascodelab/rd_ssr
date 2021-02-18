<template>
  <section v-if="!videoEnabled" class="article-fet-img">
    <img :src="imageURL" />
  </section>
</template>

<style lang="postcss">
.article-fet-img {
  @apply prose prose-sm pt-8 pb-2 mx-auto transform transition-all duration-1000 ease-in-out scale-100 px-2;
}
</style>
<!-- JS -->
<script>
import { mapState } from "vuex";

export default {
  props: ["imageURL"],
  computed: {
    ...mapState(["videoEnabled"])
  }
};
</script>