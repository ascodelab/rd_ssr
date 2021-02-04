<template>
  <div class="post-card">
    <!-- section -->
    <section>
      <img class="rounded-lg object-fill" :src="getFeatureImage" :alt="postTitle" />
      <NuxtLink class="px-4 py-8" :to="getArticleUrl">{{postTitle}}</NuxtLink>
      <p class="text-sm text-gray-600 p-4">{{postDescription}}</p>
    </section>
    <!-- footer -->
    <footer class="p-4">
      <a href="https://me.ratidigital.in" class="flex items-center">
        <img :src="publisherImage" :alt="publisherName" class="post-card-author-img" />
        {{ publisherName }}
      </a>
      <a href="#" class="float-">
        <img src="https://img.icons8.com/flat_round/24/000000/share--v1.png" />
      </a>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.post-card {
  @apply max-w-4xl p-2 bg-white text-gray-800 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105;
}
.post-card-author-img {
  @apply mr-2 w-6 h-6 object-cover rounded-full;
}
footer {
  @apply border-t border-red-900;
}
</style>
<script>
import { getFormattedDate } from "~/utils/helper";
export default {
  props: [
    "postTitle",
    "postDescription",
    "featureImage",
    "postLink",
    "publisherName",
    "publisherImage",
    "publishedDate",
    "postCategory"
  ],
  computed: {
    getFeatureImage() {
      return `https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80`;
    },
    getArticleUrl() {
      return `${this.postLink}`;
    },
    datePretty() {
      return getFormattedDate(this.publishedDate);
    }
  },
  data() {
    return {};
  }
};
</script>