<template>
  <div>
    <div class="container mx-auto pt-2">
      <input
        type="search"
        placeholder="What would you learn today?"
        v-model="query"
        autocomplete="off"
        id="search"
      />
    </div>
    <!-- line break -->
    <div>
      <hr />
    </div>
    <!-- results box -->
    <div class="results-wrapper py-2 md:max-h-80 overflow-scroll">
      <ul v-if="articles.length">
        <li v-for="article of articles" :key="article.slug">
          <p class="sr-link" @click="read(article.slug)">
            {{ article.title }}
            <i class="fa fa-arrow-circle-o-right ml-1 text-sm" />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      query: "",
      articles: []
    };
  },
  methods: {
    read(url) {
      //close the modal on click of link
      let data = {};
      data.searchModal = false;
      this.$store.dispatch("setData", data);
      //redirect to the url
      window.$nuxt.$router.push(`/${url}`);
    }
  },
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
        .limit(15)
        .search(query)
        .fetch();
    }
  }
};
</script>
<style lang="postcss" scoped>
input {
  @apply w-full h-12 rounded focus:outline-none text-gray-500 text-xl px-1 py-4;
}
.sr-link {
  @apply bg-gray-100 text-gray-900 text-sm rounded px-4 py-3 my-2 transform transition ease-in duration-200 cursor-pointer hover:bg-rd-theme hover:text-white;
}
</style>