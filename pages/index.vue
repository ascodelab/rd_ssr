<template>
  <div class="py-6 flex justify-between container mx-auto">
    <div class="w-full lg:w-8/12">
      <!-- post card ccomponent -->
      <ArticleList />
    </div>
    <div class="-mx-8 w-4/12 hidden lg:block">
      <!-- author component -->
      <Author />
      <!-- categories component -->
      <Categories />
      <!-- recent posts component -->
      <RecentPosts />
    </div>
  </div>
</template>
