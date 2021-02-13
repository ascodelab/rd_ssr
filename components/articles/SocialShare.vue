<template>
  <div class="s-s-w">
    <fa icon="share-alt" class="mr-1 text-4xl pr-2 text-rd-theme" />
    <div class="icons">
      <share platform="facebook">
        <i href="#" class="fa fa-facebook"></i>
      </share>
    </div>
    <div class="icons">
      <share platform="twitter">
        <i href="#" class="fa fa-twitter"></i>
      </share>
    </div>
    <div class="icons">
      <share platform="linkedIn">
        <i href="#" class="fa fa-linkedin"></i>
      </share>
    </div>
    <div class="icons">
      <share platform="whatsApp">
        <i href="#" class="fa fa-whatsapp"></i>
      </share>
    </div>
    <div class="icons">
      <share platform="telegram">
        <i href="#" class="fa fa-telegram"></i>
      </share>
    </div>
    <div class="icons">
      <share platform="skype">
        <i href="#" class="fa fa-skype"></i>
      </share>
    </div>
    <!-- social and media switc widget -->
    <media-switch />
  </div>
</template>

<style lang="postcss">
.s-s-w {
  @apply flex items-center justify-center border-b border-gray-100 pt-2 pb-6;
}
.dark-mode .s-s-w {
  @apply border-gray-700;
}
.icons {
  @apply bg-transparent p-1;
}
.dark-mode .icons {
  @apply bg-transparent;
}
.icons i {
  @apply flex items-center justify-center rounded-full bg-rd-theme text-white text-xs h-4 w-4 p-3 transform transition-all duration-500 hover:scale-105 hover:bg-red-900;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>