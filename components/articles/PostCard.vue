<template>
  <div class="post-card">
    <!-- category -->
    <div class="cat-div">
      <theme-button class="btn-theme">{{ postCategory }}</theme-button>
    </div>
    <!-- section -->
    <section>
      <img :src="featureImage" :alt="postTitle" :title="postTitle" />
      <div class="mt-2">
        <NuxtLink class="card-link" :to="getArticleUrl">{{postTitle}}</NuxtLink>
      </div>
      <p class="text-sm text-gray-600 p-2">{{postDescription}}</p>
    </section>
    <!-- <read more>  -->
    <section class="read-more">
      <NuxtLink class="read-more-link" :to="getArticleUrl">explore ✈</NuxtLink>
    </section>
    <!-- footer -->
    <footer>
      <a href="https://me.ratidigital.in" class="flex items-center">
        <img :src="publisherImage" :alt="publisherName" class="post-card-author-img" />
        {{ publisherName }}
      </a>
      <div class="flex items-center">
        <img src="https://img.icons8.com/offices/20/000000/calendar.png" />
        <span class="pl-1">{{ datePretty }}</span>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.post-card {
  @apply max-w-4xl p-2 bg-white text-gray-800 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 h-full hover:scale-105;
}
.cat-div {
  @apply flex items-center justify-center;
}
.btn-cat {
  @apply bg-rd-theme rounded-3xl font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6;
}
.card-link {
  @apply font-bold text-gray-600 p-2 hover:underline hover:text-blue-900;
}
.read-more {
  @apply flex items-center justify-center py-2 text-rd-theme;
}
.read-more-link {
  @apply text-sm border-gray-100 rounded-2xl border text-rd-theme px-2 py-1 transition duration-300 ease-in-out hover:bg-rd-theme hover:text-gray-100;
}
.post-card-author-img {
  @apply mr-2 w-6 h-6 object-cover rounded-full border border-yellow-900 p-1;
}
footer {
  @apply flex justify-between items-center p-4 border-t border-red-900 text-rd-theme;
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
      return this.featureImage;
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