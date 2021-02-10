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
  created() {
    this.setSEOData();
  },
  methods: {
    setSEOData() {
      let data = {};
      data.title = this.article.title;
      data.subtitle = this.article.subtitle;
      data.featureImage = `${this.$config.baseURL}${this.article.featureImage}`;
      data.url = `${this.$config.baseURL}${this.article.slug}`;
      this.$store.dispatch("setSEO", data);
    }
  }
};
</script>