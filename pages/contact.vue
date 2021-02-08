<template>
  <form @submit.prevent="register" method="post">
    <div class="wrapper">
      <div class="flex flex-col justify-center justify-items-center">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
          <div class="mt-8">
            Hate forms? Send us an
            <span class="underline">
              <a href="mailto:ratidigital.in@gmail.com">email</a>
            </span> instead.
          </div>
        </div>
        <div class="text-center pt-8 pr-8">
          <contact-image />
        </div>
      </div>
      <div class="form-fields-wrappers">
        <div>
          <span class="form-span">Full Name</span>
          <input class="form-input" v-model="contact.name" ref="name" type="text" />
          <div class="form-error">{{ errors.name }}</div>
        </div>
        <div class="mt-4">
          <span class="form-span">Email</span>
          <input class="form-input" v-model="contact.email" ref="email" type="email" />
          <div class="form-error">{{ errors.email }}</div>
        </div>
        <div class="mt-4">
          <span class="form-span">Phone</span>
          <input class="form-input" v-model="contact.phone" ref="phone" type="text" />
          <div class="form-error">{{ errors.phone }}</div>
        </div>
        <div class="mt-4">
          <span class="form-span">Tell Me How I Can Help</span>
          <textarea class="form-input h-32" v-model="contact.message" ref="message"></textarea>
          <div class="form-error">{{ errors.message }}</div>
        </div>
        <!-- response message -->
        <theme-alert-success v-if="valid">{{thankyouMessage}}</theme-alert-success>
        <!-- response message ends here -->
        <div class="mt-4">
          <button class="form-button" :disabled="valid == 1">Send Message</button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import * as validate from "~/utils/validations";

export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      valid: false,
      success: false,
      errors: {},
      thankyouMessage: "your message has been sent successfully!"
    };
  },
  methods: {
    register() {
      this.errors = {};
      const validName = validate.name(this.contact.name);
      this.errors.name = validName.error;
      this.valid = validName.valid;
      if (!validName.valid) {
        this.$refs.name.focus();
        return false;
      }

      const validEmail = validate.email(this.contact.email);
      this.errors.email = validEmail.error;
      this.valid = validEmail.valid;
      if (!validEmail.valid) {
        this.$refs.email.focus();
        return false;
      }

      const validPhone = validate.phone(this.contact.phone);
      this.errors.phone = validPhone.error;
      this.valid = validPhone.valid;
      if (!validPhone.valid) {
        this.$refs.phone.focus();
        return false;
      }

      const validMessage = validate.message(this.contact.message);
      this.errors.message = validMessage.error;
      this.valid = validMessage.valid;
      if (!validMessage.valid) {
        this.$refs.message.focus();
        return false;
      }
      //send email anela.kumar@gmail.com
      if (this.valid) {
        //sending the email
        this.success = true;
        this.sendEmail();
      }
    },
    //function sendEmail()
    async sendEmail() {
      const resp = await this.$axios.post("/email/contact", this.contact);
      //reset form
      this.contact.name = this.contact.email = this.contact.phone = this.contact.message =
        "";
    }
  }
};
</script>
<style lang="postcss" scoped>
.wrapper {
  @apply p-24 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-rd-theme shadow-lg;
}
.dark-mode .wrapper {
  @apply bg-black;
}
.form-span {
  @apply uppercase text-sm font-bold;
}
.form-input {
  @apply w-full bg-gray-100 text-gray-500 mt-2 p-3 rounded-lg focus:outline-none;
}
.dark-mode .form-input {
  @apply bg-gray-800 text-gray-100;
}
.form-button {
  @apply transition-all duration-500 ease-in-out uppercase text-sm font-bold tracking-wide bg-rd-theme text-gray-100 p-3 rounded-lg w-full transform hover:-translate-y-1 hover:scale-105;
}
.form-error {
  @apply pt-1 text-sm text-red-900;
}
</style>