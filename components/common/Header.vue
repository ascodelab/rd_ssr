<template>
  <header class="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <!-- logo as per dark/light theme -->
      <NuxtLink v-if="isLightMode" :to="home">
        <img src="/img/logo-white.png" />
      </NuxtLink>
      <NuxtLink v-else :to="home">
        <img src="/img/logo-black.png" />
      </NuxtLink>
      <!-- logo ends -->
    </div>
    <label for="menu-toggle" class="pointer-cursor lg:hidden block">
      <svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </label>
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full">
      <nav>
        <ul class="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
          <li>
            <NuxtLink class="header-link" to="/">
              <fa icon="home" class="mr-1"></fa>Home
            </NuxtLink>
          </li>
          <li>
            <a class="header-link" href="https://me.ratidigital.in">
              <fa icon="briefcase" class="mr-1 text-rd-theme dark:text-gray-200"></fa>Portfolio
            </a>
          </li>
          <li>
            <NuxtLink class="header-link" to="contact">
              <b>#</b>AskMeTech
            </NuxtLink>
          </li>
          <li>
            <ColorMode></ColorMode>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="postcss" scoped>
.light-mode header {
  @apply bg-white text-rd-theme border-b border-gray-100;
}
.dark-mode header {
  @apply bg-black text-gray-200 border-b border-gray-700;
}
.header-link {
  @apply lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-rd-theme;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    home() {
      return "/";
    },
    isLightMode() {
      return this.$colorMode.preference === "dark" ? false : true;
    }
  }
};
</script>