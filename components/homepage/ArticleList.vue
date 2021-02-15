<template>
  <div class="w-al">
    <div class="grid-config">
      <article v-for="(article, index) in articleList" :key="index">
        <post-card
          :postTitle="article.title"
          :postDescription="article.subtitle"
          :featureImage="article.featureImage"
          :postLink="article.slug"
          :publisherName="article.author"
          :publisherImage="publisherImage"
          :publishedDate="article.createdAt"
          :postCategory="article.category"
          :postContent="article.body"
        ></post-card>
      </article>
      <div v-observe-visibility="handleScrolledToBottom"></div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.w-al {
  @apply flex justify-center mx-4 my-16;
}
.grid-config {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 flex-1;
}
</style>
<script>
export default {
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      //const response = await this.$axios.$get(`/article?page=${this.page}`);
      const response = await this.$content("posts")
        .skip(this.skip)
        .limit(3)
        .fetch();
      if (response.length === 0) {
        this.lastPage = true;
        return;
      }
      //push articles to the bottom
      response.forEach(element => {
        this.articleList.push(element);
      });
    },
    handleScrolledToBottom(isVisible, entry) {
      if (!isVisible) return;
      // handle on scroll calls
      if (this.lastPage) return false;
      this.page++;
      this.skip += 3;
      this.fetchData();
    }
  },
  data() {
    return {
      articleList: [],
      page: 1,
      skip: 0,
      lastPage: false,
      publisherImage:
        "https://s.gravatar.com/avatar/017c2f452a5b71e2bb49cd8932d42e74?s=80"
    };
  }
};
</script>