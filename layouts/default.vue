<template>
  <div class="overflow-x-hidden">
    <!-- Header Component -->
    <Header />
    <div>
      <Nuxt />
    </div>
    <!-- footer component -->
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.$store.state.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$store.state.subtitle
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$store.state.subtitle
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$store.state.title
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$store.state.featureImage
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.$store.state.url
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: `summary_large_image`
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Rati Digital"
        }
      ]
    };
  }
};
</script>
<style lang="postcss">
.dark-mode {
  @apply bg-gray-800 text-gray-100;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  @apply font-extrabold;
}
</style>
