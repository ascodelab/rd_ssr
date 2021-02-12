<template>
  <div class="s-s-w">
    <fa icon="share-alt" class="mr-1 text-4xl pr-2 text-gray-300" />
    <div class="icons">
      <share platform="facebook">
        <img src="/icons/facebook.svg" />
      </share>
    </div>
    <div class="icons">
      <share platform="twitter">
        <img src="/icons/twitter.svg" />
      </share>
    </div>
    <div class="icons">
      <share platform="linkedIn">
        <img src="/icons/linkedin.svg" />
      </share>
    </div>
    <div class="icons">
      <share platform="whatsApp">
        <img src="/icons/whatsapp.svg" />
      </share>
    </div>
    <div class="icons">
      <share platform="telegram">
        <img src="/icons/telegram.svg" />
      </share>
    </div>
    <div class="icons">
      <share platform="skype">
        <img src="/icons/skype.svg" />
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
  @apply bg-white transition-all duration-300 ease-in-out border p-1 ml-1 rounded-full transform transition-all duration-500 hover:scale-110;
}

.dark-mode .icons {
  @apply bg-gray-300 border-gray-800;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>