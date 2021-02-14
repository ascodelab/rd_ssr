<template>
  <div class="p-m-d">
    <div>
      <img :src="publisherImage" :alt="author" class="aut-img" />
    </div>
    <div class="pl-2">
      <a href="https://me.ratidigital.in" class="aut-link">{{ author }}</a>
    </div>
    <div class="flex items-center date">
      <i class="fa fa-calendar" aria-hidden="true"></i>
      <span class="pl-2">{{ date }}</span>
    </div>
    <div class="flex items-center date">
      <i class="fa fa-list-alt" aria-hidden="true"></i>
      <span class="pl-2">{{ cat}}</span>
    </div>
    <div class="pl-2 text-gray-400 font-bold">
      <i class="fa fa-clock-o" aria-hidden="true"></i>
      <reading-time :content="content"></reading-time>
    </div>
  </div>
</template>

<style lang="postcss">
.p-m-d {
  @apply flex items-center prose prose-sm mx-auto pt-2;
}
.prose-sm.p-m-d img {
  @apply p-1 m-0;
}
.p-m-d .aut-link {
  @apply no-underline text-gray-400 font-bold;
}
.p-m-d .aut-img {
  @apply mr-2 w-6 h-6 object-cover rounded-full border;
}
.p-m-d .date {
  @apply font-bold  text-gray-400 pl-2;
}
</style>
<!-- JS -->
<script>
export default {
  props: ["author", "date", "cat", "content"],
  computed: {},
  data() {
    return {
      publisherImage:
        "https://s.gravatar.com/avatar/017c2f452a5b71e2bb49cd8932d42e74?s=80"
    };
  }
};
</script>