<template>
  <div class="article-wrapper">
    <!-- article banner -->
    <section class="article-banner">
      <div class="article-heading">
        <h1>{{ article.title }}</h1>
      </div>
    </section>
    <!-- social share -->
    <social-share />
    <!-- video player -->
    <Video :videoId="article.videoId" />
    <!-- article feature image -->
    <feature-image :imageURL="article.featureImage" />
    <!-- post date/author information -->
    <post-meta
      :date="datePretty"
      :cat="article.category"
      :author="article.author"
      :content="article.body"
    />
    <!-- article content -->
    <section class="article-content-wrapper">
      <div class="w-full prose prose-sm mx-auto px-2">
        <nuxt-content :document="article" />
      </div>
    </section>
    <!-- prev next section -->
    <next-prev />
    <!-- comments -->
    <Comments />
  </div>
</template>
<style lang="postcss">
.article-banner {
  @apply bg-white flex items-center justify-center p-4 pb-0 text-lg sm:text-3xl;
}
.dark-mode .article-banner {
  @apply bg-gray-800;
}
.article-heading {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-red-700 font-black;
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
.prose-sm p {
  @apply p-0 pt-4 m-0;
}
.prose-sm h2 {
  @apply p-0 pt-4 m-0;
}
.prose hr {
  @apply mt-3 mb-0;
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
    //infolinks ads
    var infolinks_pid = 3312746;
    var infolinks_wsid = 0;
    this.setSEOData();
  },
  methods: {
    setSEOData() {
      let data = {};
      data.title = `${this.article.title}`;
      data.subtitle = this.article.subtitle;
      data.featureImage = `${this.$config.baseURL}${this.article.featureImage}`;
      data.url = `${this.$config.baseURL}${this.article.slug}`;
      data.articlePublishedTime = this.article.date;
      data.author = this.article.author;
      data.related = this.article.related;
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
      script: [
        { type: "application/ld+json", json: structuredData },
        {
          hid: "infolinks",
          src: "//resources.infolinks.com/js/infolinks_main.js",
          defer: true
        }
      ]
    };
  }
};
</script>