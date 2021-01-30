<template>
  <div class="al-wrp">
    <div v-for="(article, index) in articleList" :key="index">
      <post-card
        :postTitle="article.post_title"
        :postDescription="article.post_excerpt"
        :featureImage="article.meta_value"
        :postLink="article.post_name"
        :publisherName="article.display_name"
        :publisherImage="publisherImage"
        :publishedDate="article.post_date"
        :postCategory="article.Categories"
      ></post-card>
    </div>
    <div v-observe-visibility="handleScrolledToBottom"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("modules/article", {
      articles: state => state.articles
    })
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await this.$axios.$get(`/article?page=${this.page}`);
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
      this.fetchData();
    }
  },
  data() {
    return {
      articleList: [],
      page: 1,
      lastPage: false,
      publisherImage:
        "https://s.gravatar.com/avatar/017c2f452a5b71e2bb49cd8932d42e74?s=80"
    };
  }
};
</script>