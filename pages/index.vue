<template>
  <div class="flex justify-between container mx-auto">
    <div class="w-full lg:w-8/12">
      <!-- dropdown component -->
      <Search />
      <!-- post card ccomponent -->
      <ArticleList />
      <ColorMode></ColorMode>
    </div>
    <div class="-mx-8 w-4/12 hidden lg:block">
      <!-- author component -->
      <Author />
      <!-- categories component -->
      <Categories />
      <!-- recent posts component -->
      <RecentPosts />
      <fa icon="envelope" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("modules/article", {
      articles: state => state.articles
    })
  }
};
</script>
