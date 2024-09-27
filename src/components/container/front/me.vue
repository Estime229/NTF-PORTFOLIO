<template>
  <container>
    <div class="flex justify-center items-center">
      <img
        :src="images.im1"
        class="w-full md:w-80 h-auto md:h-80"
        alt="cover"
      />
    </div>
    <div
      class="flex justify-center w-full max-w-[1000px] h-auto lg:h-[315.19px] rounded-3xl sm:mt-5 pb-10 mx-auto border-gray-200 border px-5 sm:px-10 hover:border-orange-400"
    >
      <div class="text-center md:mt-14 mt-10">
        <div class="flex justify-center items-center gap-4">
          <button
            class="bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#cf3903] font-dancing text-lg"
          >
            Develop
          </button>
          <button
            class="bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#097360 font-dancing text-lg"
          >
            Sports
          </button>
          <button
            class="bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#4e0aa2] font-dancing text-lg"
          >
            Anime
          </button>
          <button
            class="bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58] font-dancing text-lg"
          >
            Science
          </button>
        </div>
        <h2
          class="mt-4 sm:mt-6 lg:mt-4 text-lg sm:text-base lg:text-2xl text-center font-dancing"
        >
          Front-end Engineer who develops modern, reactive, and user-friendly
          web applications using the latest technologies. 🚀 Believe a perfect
          blend of UI architecture is one, where the goals and needs are
          accounted for in an elegant, efficient, and robust design of the user
          interface 🚀 Experience in React.js, Next.js, and state management
          like Redux.js with proficiency in web technologies like JavaScript,
          Typescript, Tailwind CSS and SASS. building large-scale web
          applications, cross-browser platforms, and design constraints on the
          web, and building responsive user interfaces.💥
        </h2>

        <!-- <div
          class="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-12 gap-4"
        >
          <input
            type="text"
            class="w-full sm:w-64 lg:w-80 h-12 bg-gray-200 rounded-full pl-5 text-sm sm:text-base"
            placeholder="Enter your email"
          />
          <button
            class="w-full sm:w-32 h-12 bg-[#FF00EA] rounded-full text-white font-bold"
          >
            Subscribe
          </button>
        </div> -->
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/helper/container.vue";
import im1 from "@/assets/images/prof.webp";

export default {
  components: { container },
  name: "contact-",
  data() {
    return {
      icons: {},
      images: { im1 },
    };
  },
};
</script>

<style scoped></style>
