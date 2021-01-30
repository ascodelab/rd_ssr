<template>
  <article>
    <h1>{{ page.title }}</h1>
    <iframe
      width="560"
      height="315"
      :src="page.video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
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
  async asyncData({ $content }) {
    const page = await $content("hello").fetch();

    return {
      page
    };
  }
};
</script>