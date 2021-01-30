<template>
  <div class="post-card">
    <div class="md:flex">
      <div class="flex-shrink-0">
        <img class="rounded-lg" :src="getFeatureImage" :alt="postTitle" />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <NuxtLink :to="getArticleUrl" class="post-card-title hover:underline">{{ postTitle }}</NuxtLink>
        <p class="mt-2">{{ postDescription }}</p>
        <a :href="getArticleUrl" class="text-blue-500 hover:underline">Read more ➜</a>
      </div>
    </div>
    <div class="post-card-footer mt-2">
      <!-- card footer -->
      <div class="footer-items">
        <div class="item">
          <a href="javascript:void()" class="flex items-center">
            <img :src="publisherImage" :alt="publisherName" class="post-card-author-img" />
            <h1 class>{{ publisherName }}</h1>
          </a>
        </div>
        <div class="item px-4">
          <fa icon="calendar" class="post-card-icons" />
          <span>{{ datePretty }}</span>
        </div>
        <div class="item">
          <fa icon="list" class="post-card-icons" />
          <span class="px-1">{{postCategory}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.post-card {
  @apply max-w-4xl p-6 my-6 bg-white text-gray-800 rounded-lg shadow-xl cursor-pointer;
}
.post-card:hover {
  @apply bg-gray-100;
}
.post-card-title {
  @apply block text-lg leading-tight font-semibold;
}
.post-card-footer {
  @apply flex justify-between items-center mt-4;
}
.footer-items {
  @apply sm:flex;
}
.post-card-author-img {
  @apply mr-2 w-6 h-6 object-cover rounded-full;
}
.post-card-icons {
  @apply text-gray-400;
}
/* theme for dark mode */
.dark-mode .post-card {
  @apply bg-yellow-100 text-gray-900;
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
      return `${this.$config.imagePath}tr:w-380,h-220,fo-auto/${this.featureImage}`;
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