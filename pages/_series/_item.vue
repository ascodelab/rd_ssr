<template>
  <div>
    <h2>series: {{ series }}</h2>
    <h2>item: {{ item }}</h2>
  </div>
</template>
<script>
export default {
  async asyncData({ params, redirect }) {
    // const mountains = await fetch(
    //   "https://api.nuxtjs.dev/mountains"
    // ).then(res => res.json());

    return {
      series: params.series.toLowerCase(),
      item: params.item.toLowerCase()
    };
  }
};
</script>