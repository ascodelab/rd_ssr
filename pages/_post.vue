<template>
  <div>
    <h1>{{ this.response[0].post_title }}</h1>
    <div v-html="this.response[0].post_content"></div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    const slug = params.post;
    const response = await $axios.$get(`/article?post_name=${slug}`);
    return { response };
  }
};
</script>
