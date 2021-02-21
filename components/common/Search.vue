<template>
  <div>
    <div class="container mx-auto pt-2">
      <form>
        <input type="search" placeholder="Search..." v-model="query" autocomplete="off" id="search" />
      </form>
    </div>
    <!-- results box -->
    <div class="results-wrapper p-2">
      <ul v-if="articles.length">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="`/${article.slug}`">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      articles: []
    };
  },
  methods: {},
  watch: {
    async query(query) {
      if (!query) {
        this.articles = [];
        return;
      }
      //put your search endpoint api here
      this.articles = await this.$content("posts")
        .only(["title", "slug"])
        .sortBy("createdAt", "asc")
        .limit(12)
        .search(query)
        .fetch();
    }
  }
};
</script>
<style lang="postcss" scoped>
input {
  @apply w-full h-12 rounded focus:outline-none text-xl px-4 shadow;
}
</style>