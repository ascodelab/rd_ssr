<template>
  <ShareNetwork
    :network="platform"
    :url="url"
    :title="title"
    :description="description"
    :quote="quote"
    :hashtags="hashtags"
  >
    <slot />
  </ShareNetwork>
</template>

<script>
export default {
  props: ["platform"],
  data() {
    return {
      url: this.$store.state.url,
      title: this.$store.state.title,
      description: this.$store.state.subtitle,
      quote: this.$store.state.quote,
      hashtags: this.$store.state.hashtags,
      handle: this.$store.state.handle
    };
  }
};
</script>