<template>
  <div>
    <container>
      <div
        class="front flex flex-col md:flex-row justify-between mt-20 md:mt-32"
      >
        <!-- Left Section -->
        <div
          class="w-full md:w-1/2 ml-4 mt-10 md:mt-32 animate-fadeIn opacity-0"
        >
          <h1
            class="text-[#0F051D] font-bold text-5xl md:text-7xl h-auto md:h-36 animate-slideUp opacity-0 font-dancing"
          >
            Full-Stack JS Techno Developper 👋
          </h1>
          <h1
            class="text-[#7B7583] font-medium text-2xl md:text-3xl h-auto md:h-16 mt-5 animate-slideUp opacity-0 font-dancing"
          >
            Hi, I'm Gliti Estimé. A passionate Developper based in Africa,
            Bénin🎈
          </h1>
          <button
            class="bg-[#c982e6] w-[266.75px] md:w-[266.75px] h-14 md:h-20 rounded-full mt-6 md:mt-10 flex items-center justify-center text-white text-lg md:text-xl font-bold gap-3 animate-slideUp opacity-0"
          >
            Me Joindre
            <icon :data="icons.up" width="24" height="25" alt="LinkedIn" />
          </button>
          <div
            class="flex flex-col md:flex-row gap-4 md:gap-10 mt-10 md:mt-20 items-center animate-fadeIn opacity-0"
          >
            <img
              :src="images.list"
              class="w-20 h-10 md:w-28 md:h-14"
              alt="cover"
            />
            <div class="text-center md:text-left md:mr-10">
              <h1 class="text-[#0F051D] text-xl md:text-2xl font-bold">7k+</h1>
              <h1 class="text-[#7B7583] text-sm md:text-base">
                Community members
              </h1>
            </div>
          </div>
        </div>
        <!-- Right Section -->
        <div
          class="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 animate-zoomIn opacity-0"
        >
          <img
            :src="images.im1"
            class="w-full md:w-[565px] h-auto md:h-[560px]"
            alt="cover"
          />
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import up from "@/assets/icons/up.svg";
import im1 from "@/assets/images/img1.webp";
import list from "@/assets/images/List.webp";

import container from "@/components/helper/container.vue";
export default {
  components: { container },
  name: "head-",
  data() {
    return {
      isMenuOpen: false,
      icons: { up, list, im1 },
      images: { im1, list },
    };
  },
};
</script>

<style>
/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 1.5s ease-in forwards;
}

/* Slide-up animation */
@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slideUp {
  animation: slideUp 1s ease-in forwards;
}

/* Zoom-in animation */
@keyframes zoomIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-zoomIn {
  animation: zoomIn 1.5s ease-in forwards;
}
</style>
