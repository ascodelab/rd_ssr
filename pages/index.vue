<template>
  <div class="art-lst-bg">
    <div class="wrapper">
      <ArticleList />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bg-cloud {
  background-image: url("/img/article-list-bg.jpg");
  background-repeat: no-repat;
  background-size: cover;
  background-blend-mode: multiply;
}
.wrapper {
  @apply flex justify-center container mx-auto;
}
.art-lst-bg {
  @apply bg-cloud bg-fixed bg-gray-300;
}
.dark-mode .art-lst-bg {
  @apply bg-cloud bg-gray-800;
}
</style>
<!--  JS --->
<script>
export default {
  data() {
    return {
      seoData: {
        title:
          "PHP, Node.js, Javascript, Typescript, HTML, CSS, Database, Cloud, redis, Serverless and much more.",
        subtitle:
          "PHP, Node.js, Javascript, Typescript, HTML, CSS, Database, Cloud, redis, Serverless and much more. rati digital",
        featureImage: `${this.$config.baseURL}uploads/anil-sharma.jpg`,
        url: this.$config.baseURL
      },
      structuredData: {
        "@context": "http://www.schema.org",
        "@type": "EducationalOrganization",
        name: "Rati Digital",
        url: "https://ratidigital.in",
        logo: "https://ratidigital.in/img/logo-white.png",
        image: "https://ratidigital.in/img/logo-white.png",
        description: "E-learning and training institute.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "53, village hargangoli",
          addressLocality: "joura",
          addressRegion: "madhya pradesh",
          postalCode: "476221",
          addressCountry: "india"
        },
        openingHours:
          "Mo 09:00-18:00 Tu 09:00-18:00 We 09:00-18:00 Th 09:00-18:00 Fr 09:00-18:00"
      }
    };
  },
  created() {
    this.setSEOData();
  },
  methods: {
    setSEOData() {
      this.$store.dispatch("setSEO", this.seoData);
    }
  },
  head() {
    return {
      script: [{ type: "application/ld+json", json: this.structuredData }]
    };
  }
};
</script>
