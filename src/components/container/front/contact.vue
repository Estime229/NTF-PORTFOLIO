<template>
  <container>
    <div
      class="flex justify-center w-full max-w-[1000px] h-auto lg:h-[315.19px] rounded-3xl mt-10 sm:mt-20 pb-10 mx-auto border-gray-200 border px-5 sm:px-10 hover:border-blue-500"
    >
      <div class="text-center">
        <h1
          class="mt-10 sm:mt-12 lg:mt-10 text-4xl sm:text-4xl lg:text-7xl md:text-6xl font-bold text-[#FF00EA] font-dancing"
        >
          Say
          <span class="text-[#2600FC]">hi!</span>
        </h1>
        <h2
          class="mt-4 sm:mt-6 lg:mt-4 text-lg sm:text-xl lg:text-2xl text-center font-dancing"
        >
          If you have any queries or would like to discuss potential
          opportunities, please don't hesitate to reach out to me using given
          links.
        </h2>
        <div
          class="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-12 gap-4"
        >
          <a href="http://www.linkedin.com/in/estimé-gliti-585260253">
            <img
              :src="images.linkedin"
              class="w-[40px] h-[40px] animate-float"
              alt="cover"
          /></a>
          <a href="mailto:estimegliti108@gmail.com">
            <img
              :src="images.google"
              class="w-[40px] h-[40px] animate-float"
              alt="cover"
          /></a>
          <a href="https://github.com/Estime229/batonga">
            <img
              :src="images.github"
              class="w-[40px] h-[40px] animate-float"
              alt="cover"
          /></a>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/helper/container.vue";
import google from "@/assets/images/google@2x.png";
import instagram from "@/assets/images/instagram@2x.png";
import linkedin from "@/assets/images/linkedin@2x.png";
import behance from "@/assets/images/behance@2x.png";
import github from "@/assets/images/github@2x.png";

export default {
  components: { container },
  name: "contact-",
  data() {
    return {
      isMenuOpen: false,

      icons: {},
      images: { instagram, linkedin, google, github, behance },
    };
  },
};
</script>

<style scoped>
input::placeholder {
  margin-left: 1rem; /* Ajustez cette valeur si nécessaire */
}
</style>
