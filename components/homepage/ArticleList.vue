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
          :publishedDate="article.date"
          :postCategory="article.category"
          :postContent="article.body"
        ></post-card>
      </article>
      <!-- card loader -->
      <div v-for="i in 3" :key="i*Math.random()">
        <card-loader v-if="fetching"></card-loader>
      </div>
      <!-- observer loading -->
      <div v-observe-visibility="handleScrolledToBottom"></div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.w-al {
  @apply flex justify-center w-full mx-4 mt-16;
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
      //hide card loader on complete
      this.fetching = false;
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
      //enable card loader
      this.fetching = true;
      this.fetchData();
    }
  },
  data() {
    return {
      fetching: true,
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