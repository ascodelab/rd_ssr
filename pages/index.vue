<template>
  <div class="wrapper">
    <ArticleList />
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply flex justify-center container mx-auto;
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
        subTitle:
          "PHP, Node.js, Javascript, Typescript, HTML, CSS, Database, Cloud, redis, Serverless and much more.",
        featureImage: `${this.$config.baseURL}uploads/anil-sharma.jpg`,
        url: this.$config.baseURL
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
  }
};
</script>