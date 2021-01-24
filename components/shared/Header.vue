<template>
  <header class="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <!-- logo as per dark/light theme -->
      <img v-if="isLightMode" src="/img/logo-white.png" />
      <img v-else src="/img/logo-black.png" />
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
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              href="https://me.ratidigital.in"
            >Portfolio</a>
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
              href="#"
            >#AskMeTech</a>
          </li>
          <li>
            <ColorMode></ColorMode>
          </li>
        </ul>
      </nav>
      <a
        href="https://www.linkedin.com/in/realanilsharma"
        class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
      >
        <img
          class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
          src="https://s.gravatar.com/avatar/017c2f452a5b71e2bb49cd8932d42e74?s=80"
          alt="Anil Sharma | Software Engineer"
        />
      </a>
    </div>
  </header>
</template>
<style lang="postcss" scoped>
.dark-mode header {
  @apply bg-black text-gray-200;
}
.light-mode header {
  @apply bg-white text-gray-700;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isLightMode() {
      return this.$colorMode.preference === "dark" ? false : true;
    }
  }
};
</script>