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
import { getFormattedDate } from "~/utils/helper";

export default {
  data() {
    return {};
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.article.date);
    }
  },
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
  },
  head() {
    let structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${this.$config.baseURL}${this.article.slug}`
      },
      headline: this.article.title,
      description: this.article.subtitle,
      image: `${this.$config.baseURL}${this.article.featureImage}`,
      author: {
        "@type": "Person",
        name: this.article.author
      },
      publisher: {
        "@type": "Organization",
        name: "Rati Digital",
        logo: {
          "@type": "ImageObject",
          url: "https://ratidigital.in/img/logo-white.png"
        }
      },
      datePublished: this.datePretty,
      dateModified: this.datePretty
    };
    //set rich-snippet data
    return {
      script: [{ type: "application/ld+json", json: structuredData }]
    };
  }
};
</script>