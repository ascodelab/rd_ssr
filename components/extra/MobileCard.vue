<template>
  <article>
    <img
      src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Just a flower"
      class="w-full rounded-lg"
    />
    <div class="body">
      <h2>hypnotherapy for motivation getting the drive back</h2>by
      <a href="#" class>dorothy parks</a>
    </div>
    <div class="justify-self-end">
      <img
        src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Bookmark-256.png"
        alt="Bookmark"
        class="aut-img"
      />
    </div>
  </article>
</template>

<style lang="postcss" scoped>
article {
  @apply sm:grid grid-cols-5 bg-white shadow-lg p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20;
}
.body {
  @apply pt-5 self-center sm:pt-0 sm:pl-10 col-span-3;
}
h2 {
  @apply text-gray-800 capitalize text-xl font-bold;
}
a {
  @apply capitalize underline inline-block pt-2;
}
.aut-img {
  @apply w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0;
}
</style>