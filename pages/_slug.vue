<template>
  <article>
    <h1>{{ article.title }}</h1>
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="article"
    />
  </article>
</template>
<style>
.dark-mode p {
  @apply text-gray-200;
}
</style>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("posts", params.slug).fetch();
    return {
      article
    };
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description
        }
      ]
    };
  }
};
</script>