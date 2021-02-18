<template>
  <section v-if="videoEnabled" class="article-video-container">
    <div class="video-wrapper">
      <iframe :src="getVideoUrl" frameborder="0" :allow="allow" allowfullscreen></iframe>
    </div>
  </section>
</template>

<style lang="postcss">
.article-video-container {
  @apply prose prose-sm pt-6 pb-2 mx-auto transform transition-all duration-1000 ease-in-out scale-100 px-2;
}
.player {
  height: 360px;
  width: 100%;
}
.video-wrapper {
  @apply player relative;
}
.video-wrapper iframe {
  @apply player;
}
</style>
<!-- JS -->
<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["videoId"],
  computed: {
    getVideoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
    ...mapState(["videoEnabled"])
  },
  data() {
    return {
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    };
  }
};
</script>