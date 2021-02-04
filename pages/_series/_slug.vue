<template>
  <article>
    <h1>{{ page.title }}</h1>
    <Video :videoId="page.video" />
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="page"
    />
  </article>
</template>
<style>
.dark-mode p {
  @apply text-gray-200;
}
</style>
<script>
export default {
  async asyncData({ params, $content }) {
    const page = await $content("hello").fetch();

    return {
      page,
      params
    };
  }
};
</script>