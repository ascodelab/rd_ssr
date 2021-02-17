<template>
  <div class="overflow-x-hidden">
    <!-- Header Component -->
    <Header />
    <div>
      <Nuxt />
    </div>
    <!-- footer component -->
    <!-- color mode -->
    <ColorMode></ColorMode>
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `${this.$store.state.title} | ${this.$store.state.siteName} | by ${this.$store.state.author}`,
      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$store.state.title
        },
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
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "article"
        },
        {
          hid: "article:published_time",
          name: "article:published_time",
          content: this.$store.state.articlePublishedTime
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@ratidigital"
        },
        {
          hid: "al:web:url",
          property: "al:web:url",
          content: this.$store.state.handle
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: this.$store.state.handle
        },
        {
          hid: "author",
          name: "author",
          content: this.$store.state.author
        },
        {
          hid: "robots",
          name: "robots",
          content: "index,follow,max-image-preview:large"
        },
        {
          hid: "canonical",
          rel: "canonical",
          content: this.$store.state.url
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
.nuxt-content-highlight {
  @apply relative;
}
.nuxt-content-highlight .filename {
  @apply absolute right-0 text-gray-400 font-light z-10 mr-2 mt-1 text-sm;
}
</style>
