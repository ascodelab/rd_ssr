!-- ~/components/Comments.vue -->
<template>
  <div class="comments-wrapper w-full prose prose-sm mx-auto px-2">
    <!-- comments button -->
    <div class="flex items-center justify-center">
      <a v-if="!displayed" class="rounded-lg" @click="displayed = true">
        <theme-button class="bg-td-theme">Load Comments</theme-button>
      </a>
    </div>
    <div class="pb-8">
      <disqus
        :shortname="disqusId"
        v-if="displayed"
        :identifier="`${metadata.title}`"
        :url="`${metadata.url}`"
      ></disqus>
    </div>
  </div>
</template>
<!-- COmments CSS-->
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      displayed: false
    };
  },
  computed: {
    metadata() {
      return {
        title: this.$store.state.title,
        url: this.$store.state.url
      };
    },
    disqusId() {
      return this.$config.disqusId;
    }
  }
};
</script>