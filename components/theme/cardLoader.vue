<template>
  <div class="post-card">
    <!-- category -->
    <div class="cat-div">
      <button class="cat-btn"></button>
    </div>
    <!-- section -->
    <section>
      <div class="w-full h-40 bg-gray-300 rounded-lg animate-pulse"></div>
      <div class="mt-2">
        <div class="h-4 bg-gray-400 w-3/4 animate-pulse"></div>
      </div>
      <p class="h-4 bg-gray-400 w-full mt-2 p-2 animate-pulse"></p>
    </section>
    <!-- red time calculator -->
    <section class="con-info pb-2">
      <p class="h-6 bg-gray-400 w-28 mt-2 p-2 animate-pulse"></p>
    </section>
    <section class="con-info pb-2">
      <p class="h-6 rounded-lg bg-gray-400 w-28 p-2 animate-pulse"></p>
    </section>
    <!-- footer -->
    <footer>
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-gray-400 h-6 w-6"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-400 rounded w-full"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.post-card {
  @apply max-w-4xl p-2 bg-white rounded-lg shadow-2xl transform h-full;
}
.cat-div {
  @apply flex items-center justify-center;
}
.cat-btn {
  @apply bg-gray-300 w-28 h-9 border-double border-4 border-gray-100 shadow-inner rounded-3xl relative -top-6 animate-pulse;
}
.card-link {
  @apply font-bold text-gray-600 p-2;
}
.con-info {
  @apply flex items-center justify-center;
}
footer {
  @apply p-3 border-t border-gray-300;
}
</style>
