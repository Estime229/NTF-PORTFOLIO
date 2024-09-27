<template>
  <container>
    <div class="mt-20">
      <h1 class="text-4xl font-bold flex justify-center mb-2">
        Why <span class="text-[#FF00EA] mx-2">choose us?</span>
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center mt-14 relative"
      >
        <div class="absolute flex justify-between">
          <div
            class="sm:block hidden absolute bg-no-repeat w-[50px] md:w-[73.91px] h-[60px] md:h-[88px] right-40 animate__animated animate__bounceInLeft"
          >
            <img
              :src="images.img2"
              width="35"
              height="35"
              alt="cover"
              class=""
            />
          </div>
        </div>
        <div class="absolute flex justify-between">
          <div
            class="sm:block hidden absolute top-10 md:top-[390px] bg-no-repeat w-[50px] md:w-[73.91px] h-[60px] md:h-[88px] left-[50px] md:left-[50px] animate__animated animate__bounceInLeft"
          >
            <img
              :src="images.img2"
              width="35"
              height="35"
              alt="cover"
              class=""
            />
          </div>
        </div>
        <div
          class="card border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800"
        >
          <img
            :src="images.Icon"
            class="w-[43px] h-[40px] ml-10 mt-10"
            alt="cover"
          />
          <h1
            class="mt-10 font-bold text-3xl ml-10 h-12 tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent"
          >
            Developpement
          </h1>
          <h2 class="mt-10 ml-10 w-52 h-20">
            Construisez des solutions robustes et évolutives pour vos projets.
          </h2>
        </div>
        <div
          class="card border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 mt-20"
        >
          <img
            :src="images.Vector"
            class="w-[43px] h-[40px] ml-10 mt-10"
            alt="cover"
          />
          <h1
            class="mt-10 font-bold text-3xl ml-10 h-12 tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent"
          >
            Experience
          </h1>
          <h2 class="mt-10 ml-10 w-52 h-20">
            Assurez la continuité et la sécurité de vos projets grâce à une
            maintenance réactive
          </h2>
        </div>
        <div
          class="card border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800"
        >
          <img
            :src="images.Vector1"
            class="w-[43px] h-[40px] ml-10 mt-10"
            alt="cover"
          />
          <h1
            class="mt-10 font-bold text-3xl ml-10 w-32 h-12 tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent"
          >
            Design
          </h1>
          <h2 class="mt-10 ml-10 w-52 h-20">
            Créez des expériences visuelles captivantes et intuitives.
          </h2>
        </div>
        <div
          class="card border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 mt-20"
        >
          <img
            :src="images.Vector2"
            class="w-[43px] h-[40px] ml-10 mt-10"
            alt="cover"
          />
          <h1
            class="mt-10 font-bold text-3xl ml-10 h-12 tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent"
          >
            Maintenance
          </h1>
          <h2 class="mt-10 ml-10 w-52 h-20">
            Assurez la continuité et la sécurité de vos projets grâce à une
            maintenance réactive.
          </h2>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/helper/container.vue";
import Icon from "@/assets/images/Icon.webp";
import Vector from "@/assets/images/Vector.webp";
import Vector1 from "@/assets/images/Vector1.webp";
import Vector2 from "@/assets/images/Vector2.webp";

import img1 from "@/assets/images/image3.webp";
import img2 from "@/assets/images/image1.webp";
import img3 from "@/assets/images/imag2.webp";

export default {
  components: { container },
  name: "choose-",
  data() {
    return {
      images: { Icon, Vector2, Vector, Vector1, img1, img2, img3 },
    };
  },
};
</script>

<style>
@keyframes rotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.card {
  transition: transform 0.7s;
}

.card:hover {
  animation: rotate 0.9s forwards;
}
</style>
