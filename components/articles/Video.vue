<template>
  <div class="video-wrapper">
    <iframe :src="getVideoUrl" frameborder="0" :allow="allow" allowfullscreen></iframe>
  </div>
</template>

<style lang="postcss" scoped>
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

<script>
export default {
  props: ["videoId"],
  computed: {
    getVideoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    }
  },
  data() {
    return {
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    };
  }
};
</script>