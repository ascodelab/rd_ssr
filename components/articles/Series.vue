<template>
  <div class="series-wrapper">
    <ul id="list">
      <li v-for="item in items" :key="item">
        <NuxtLink :to="`/${seriesName}/${item}`" class="block">{{item}}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style lang="postcss" scoped>
.list-height {
  height: 350px;
}
.series-wrapper {
  @apply text-gray-100 list-height mt-8 mx-auto overflow-y-scroll;
}
li {
  @apply bg-rd-theme text-gray-200 block p-2 mb-1 rounded shadow;
}
</style>
<script>
export default {
  props: ["seriesName"],
  data() {
    return {
      items: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      //const response = await this.$axios.$get(`/article?page=${this.page}`);
      const results = await this.$content("series")
        .where({ title: "laravel" })
        .only(["items"])
        .fetch();
      //assigning value
      this.items = results[0].items;
    }
  }
};
</script>