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
      <p class="text-sm text-gray-600 dark:text-gray-300 p-2">{{postDescription}}</p>
    </section>
    <!-- red time calculator -->
    <section class="post-card-read-time">
      <reading-time :content="postContent"></reading-time>
    </section>
    <!-- <read more>  -->
    <section class="read-more">
      <NuxtLink class="read-more-link" :to="getArticleUrl">░R░E░A░D░</NuxtLink>
    </section>
    <!-- footer -->
    <footer>
      <a href="https://me.ratidigital.in" class="flex items-center">
        <img :src="publisherImage" :alt="publisherName" class="post-card-author-img" />
        {{ publisherName }}
      </a>
      <div class="flex items-center">
        <i class="fa fa-calendar text-base" aria-hidden="true"></i>
        <span class="pl-1">{{ datePretty }}</span>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.post-card {
  @apply max-w-4xl p-2 bg-white text-gray-800 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 h-full hover:scale-105;
}
.dark-mode .post-card {
  @apply bg-gray-700;
}
.cat-div {
  @apply flex items-center justify-center;
}
.btn-cat {
  @apply bg-rd-theme rounded-3xl font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6;
}
.card-link {
  @apply font-bold text-gray-900 p-2 hover:text-rd-theme;
}
.dark-mode .card-link {
  @apply text-gray-200;
}
.post-card-read-time {
  @apply flex items-center justify-center text-xs font-light text-gray-500 dark:text-gray-400;
}
.read-more {
  @apply flex items-center justify-center font-bold py-2 text-rd-theme;
}
.read-more-link {
  @apply text-sm border-gray-100 rounded-2xl border text-rd-theme px-2 py-1 transition duration-300 ease-in-out hover:bg-rd-theme hover:text-gray-100;
}
.dark-mode .read-more-link {
  @apply border-gray-600;
}
.post-card-author-img {
  @apply mr-2 w-6 h-6 object-cover rounded-full border border-gray-400 p-1;
}
footer {
  @apply flex justify-between items-center p-3 border-t border-gray-300 text-xs font-light text-gray-500 dark:text-gray-400;
}
.dark-mode footer {
  @apply border-gray-600;
}
</style>
<script>
import { getFormattedDate } from "~/utils/helper";
const readingTime = require("reading-time");
export default {
  props: [
    "postTitle",
    "postDescription",
    "featureImage",
    "postLink",
    "publisherName",
    "publisherImage",
    "publishedDate",
    "postCategory",
    "postContent"
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
    },
    readTime() {
      return readingTime(this.postContent);
    }
  },
  data() {
    return {};
  }
};
</script>