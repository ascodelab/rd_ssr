<template>
  <div class="about-wrap md:w-3/4">
    <!--Main Col-->
    <div class="about-profile md:h-2/3">
      <div class="p-4 md:px-12 md:py-4 text-center lg:text-left">
        <!-- Image for mobile view-->
        <div class="about-img-mob" style="background-image: url('/photos/anil-sharma.jpg')"></div>
        <h1 class="text-3xl font-bold text-gray-600 pt-8 lg:pt-0">Anil Sharma</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-rd-theme opacity-25"></div>
        <p class="about-job-title">
          <i class="fa fa-briefcase pr-4 text-rd-theme" aria-hidden="true"></i>
          <b>Software Engineer</b>, Entrepreneur, Instructor,
        </p>
        <p class="about-job-location">
          <i class="fa fa-globe text-lg pr-4 text-rd-theme" aria-hidden="true"></i>
          <b>Bengaluru</b>, Karnataka, India
        </p>
        <p class="pt-8 text-sm text-gray-600">
          I’m a 27 years old software engineer based in Bengaluru, India,
          specialized in Webapp development!
          I also enjoy contributing to open source projects.
        </p>
        <div class="pt-12 pb-8">
          <NuxtLink class="header-link" to="/contact">
            <button class="about-button">Get In Touch</button>
          </NuxtLink>
        </div>
        <!-- social links -->
        <div class="about-links-wrap">
          <a class="link" href="https://www.facebook.com/tyagibhai" target="_blank">
            <i class="fa fa-facebook pr-4 text-rd-theme" aria-hidden="true"></i>
          </a>
          <a class="link" href="https://twitter.com/realanilsharma" target="_blank">
            <i class="fa fa-twitter pr-4 text-rd-theme" aria-hidden="true"></i>
          </a>
          <a class="link" href="https://www.instagram.com/anil_shrm/" target="_blank">
            <i class="fa fa-instagram pr-4 text-rd-theme" aria-hidden="true"></i>
          </a>
          <a class="link" href="https://www.linkedin.com/in/realanilsharma/" target="_blank">
            <i class="fa fa-linkedin pr-4 text-rd-theme" aria-hidden="true"></i>
          </a>
          <a class="link" href="https://github.com/ascodelab" target="_blank">
            <i class="fa fa-github pr-4 text-rd-theme" aria-hidden="true"></i>
          </a>
        </div>
        <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
      </div>
    </div>
    <!--Img Col-->
    <div class="w-full md:w-2/5 md:h-2/3">
      <!-- Big profile image for side bar (desktop) -->
      <img
        src="/photos/anil-sharma.jpg"
        class="hidden lg:block md:h-full"
        alt="Anil Sharma | Director of Rati Digital | Rati Digital"
      />
      <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
    </div>
  </div>
</template>

<style lang="postcss">
.about-wrap {
  @apply flex items-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-0;
}
.about-profile {
  @apply w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0;
}
.about-img-mob {
  @apply block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center;
}
.about-job-title {
  @apply pt-4 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start;
}
.about-job-location {
  @apply pt-4 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start;
}
.about-button {
  @apply bg-rd-theme text-white font-bold py-2 px-4 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105;
}
.about-links-wrap {
  @apply mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center;
}
</style>
<script>
export default {
  data() {
    return {
      seoData: {
        title: "Anil Sharma | Director of Rati Digital",
        subtitle:
          "Anil Sharma is a software engineer based in Bengaluru, India who specializes in developing high-quality websites and applications.",
        featureImage: `${this.$config.baseURL}uploads/anil-sharma.jpg`,
        url: this.$config.baseURL
      }
    };
  },
  created() {
    this.setSEOData();
  },
  methods: {
    setSEOData() {
      this.$store.dispatch("setSEO", this.seoData);
    }
  }
};
</script>