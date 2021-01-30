<template>
  <div>
    <div>
      <div v-for="(title, index) in titles" :key="index">
        <div flat hover class="white pb-2 mb-1 pl-2">
          <div>
            <div xs10>
              <div class="py-2">{{ title.body }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-observe-visibility="handleScrolledToBottom"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      titles: [],
      page: 1,
      lastPage: false
    };
  },
  computed: {
    url() {
      return "https://jsonplaceholder.typicode.com/posts?_page=" + this.page;
    }
  },
  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const response = await axios.get(this.url);
      if (response.data.length === 0) this.lastPage = true;
      this.titles.push(...response.data);
    },
    handleScrolledToBottom(isVisible, entry) {
      if (!isVisible) return;
      // handle on scroll calls
      if (this.lastPage) return false;
      this.page++;
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.theme--light.v-card {
  background-color: #f5f5f5;
}
</style>
