<template>
  <div class="article-wrapper">
    <!-- article banner -->
    <section class="article-banner">
      <div class="article-heading">
        <h1>{{ article.title }}</h1>
      </div>
    </section>
    <!-- social and media switc widget -->
    <section class="article-media-switch-widget">
      <media-switch></media-switch>
    </section>
    <!-- video player -->
    <section v-if="videoEnabled" class="article-video-container">
      <Video :videoId="article.videoId" />
    </section>
    <!-- article feature image -->
    <section v-if="!videoEnabled" class="article-fet-img">
      <img :src="article.featureImage" />
    </section>
    <!-- article content -->
    <section class="article-content-wrapper">
      <div class="w-full prose prose-sm mx-auto">
        <nuxt-content :document="article" />
      </div>
    </section>
  </div>
</template>
<style lang="postcss">
.article-banner {
  @apply bg-white flex items-center justify-center pt-8;
}
.dark-mode .article-banner {
  @apply bg-gray-800;
}
.article-heading {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-red-700 text-4xl font-black;
}
.article-video-container {
  @apply prose prose-sm pt-6 pb-2 mx-auto transform transition-all duration-1000 ease-in-out scale-100;
}
.article-fet-img {
  @apply prose prose-sm pt-4 pb-2 mx-auto transform transition-all duration-1000 ease-in-out scale-100;
}
.article-content-wrapper {
  @apply pb-12;
}
.dark-mode .article-content-wrapper {
  @apply bg-gray-800 text-white !important;
}
.dark-mode .prose-sm,
.dark-mode .prose-sm h2 {
  @apply text-gray-100;
}
.dark-mode .prose-sm a,
.dark-mode .prose-sm code,
.dark-mode .prose-sm thead {
  @apply text-gray-100 font-bold;
}
.dark-mode .prose-sm pre {
  @apply bg-gray-600 text-gray-100 font-bold;
}
.article-media-switch-widget {
  @apply bg-white  pt-2 pb-8;
}
.dark-mode .article-media-switch-widget {
  @apply bg-gray-800;
}
</style>
<script>
import { getFormattedDate } from "~/utils/helper";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.article.date);
    },
    ...mapState(["videoEnabled"])
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