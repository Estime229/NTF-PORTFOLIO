<template>
  <container>
    <div class="mt-20">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-14 relative"
      >
        <div class="absolute flex justify-between">
          <!-- Image de fond 1 (en haut à gauche) -->
          <div
            class="sm:block hidden absolute bg-no-repeat w-[50px] md:w-[73.91px] h-[60px] md:h-[88px] right-40 animate__animated animate__bounceInLeft"
          >
            <img
              :src="images.img2"
              width="35"
              height="35"
              alt="cover"
              class=""
              original
            />
          </div>
        </div>
        <div class="absolute flex justify-between">
          <!-- Image de fond 1 (en haut à gauche) -->
          <div
            class="sm:block hidden absolute top-10 bg-no-repeat w-[50px] md:w-[73.91px] h-[60px] md:h-[88px] left-[150px] md:left-[150px] animate__animated animate__bounceInLeft"
          >
            <img
              :src="images.img2"
              width="35"
              height="35"
              alt="cover"
              class=""
              original
            />
          </div>
        </div>
        <div class="absolute flex justify-between">
          <!-- Image de fond 1 (en haut à gauche) -->
          <div
            class="sm:block hidden absolute md:top-[600px] bg-no-repeat w-[50px] md:w-[73.91px] h-[60px] md:h-[88px] right-40 animate__animated animate__bounceInLeft"
          >
            <img
              :src="images.img2"
              width="35"
              height="35"
              alt="cover"
              class=""
              original
            />
          </div>
        </div>
        <div class="absolute flex justify-between">
          <!-- Image de fond 1 (en haut à gauche) -->
          <div
            class="sm:block hidden absolute md:top-[600px] bg-no-repeat w-[50px] md:w-[73.91px] h-[60px] md:h-[88px] left-[150px] md:left-[150px] animate__animated animate__bounceInLeft"
          >
            <img
              :src="images.img2"
              width="35"
              height="35"
              alt="cover"
              class=""
              original
            />
          </div>
        </div>
        <a href="https://estime229.github.io/reactMonkey/">
          <div
            class="border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 text-black hover:scale-105 transform transition duration-150"
          >
            <img
              :src="images.coders"
              class="w-[150px] h-[120px] ml-16 mt-10"
              alt="cover"
            />
            <h1 class="mt-10 font-bold text-3xl ml-10 w-full h-12 text-black">
              Coders Monkeys
            </h1>
            <h2 class="mt-10 ml-10 w-60 h-20 text-black">
              Apprends plus rapidement et plus sainement
            </h2>
          </div></a
        >
        <a href="https://estime229.github.io/NOLIDO/">
          <div
            class="border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 text-black hover:scale-105 transform transition duration-150"
          >
            <img
              :src="images.nolido"
              class="w-[150px] h-[120px] ml-16 mt-10"
              alt="cover"
            />
            <h1 class="mt-10 font-bold text-3xl ml-10 w-full h-12">Nolido</h1>
            <h2 class="mt-10 ml-10 w-60 h-20">
              Finis les problemes de transfert d'argent
            </h2>
          </div>
        </a>
        <a href="https://crytocurrencyhunter.netlify.app/">
          <div
            class="border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 text-black hover:scale-105 transform transition duration-150"
          >
            <img
              :src="images.cryp"
              class="w-[150px] h-[120px] ml-16 mt-10"
              alt="cover"
            />
            <h1 class="mt-10 font-bold text-3xl ml-10 w-full h-12">
              Crypto Hunter
            </h1>
            <h2 class="mt-10 ml-10 w-60 h-20">
              Get the Trending Crypto list with its Price
            </h2>
          </div>
        </a>
        <a href="https://nikestore-polly.netlify.app/">
          <div
            class="border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 text-black hover:scale-105 transform transition duration-150 mt-20"
          >
            <img
              :src="images.nike"
              class="w-[150px] h-[120px] ml-16 mt-10"
              alt="cover"
            />
            <h1 class="mt-10 font-bold text-3xl ml-10 w-full h-12">
              Nike Store
            </h1>
            <h2 class="mt-10 ml-10 w-60 h-20">Nike Store Landing Page</h2>
          </div>
        </a>
        <a href="https://estime229.github.io/reactMonkey/">
          <div
            class="border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 text-black hover:scale-105 transform transition duration-150 mt-20"
          >
            <img
              :src="images.coders"
              class="w-[150px] h-[120px] ml-16 mt-10"
              alt="cover"
            />
            <h1 class="mt-10 font-bold text-3xl ml-10 w-full h-12">
              Coders Monkeys
            </h1>
            <h2 class="mt-10 ml-10 w-60 h-20">
              Apprends plus rapidement et plus sainement
            </h2>
          </div>
        </a>
        <a href="https://estime229.github.io/NOLIDO/">
          <div
            class="border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800 text-black hover:scale-105 transform transition duration-150 mt-20"
          >
            <img
              :src="images.nolido"
              class="w-[150px] h-[120px] ml-16 mt-10"
              alt="cover"
            />
            <h1 class="mt-10 font-bold text-3xl ml-10 w-full h-12">Nolido</h1>
            <h2 class="mt-10 ml-10 w-60 h-20">
              Finis les problemes de transfert d'argent
            </h2>
          </div>
        </a>
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
import coders from "@/assets/images/coders.png";
import nolido from "@/assets/images/NOLIDO.png";
import nike from "@/assets/images/nike.jpg";
import cryp from "@/assets/images/crypto.jpg";

import img1 from "@/assets/images/image3.webp";
import img2 from "@/assets/images/image1.webp";
import img3 from "@/assets/images/imag2.webp";

export default {
  components: { container },
  name: "choose-",
  data() {
    return {
      images: {
        Icon,
        Vector2,
        Vector,
        Vector1,
        img1,
        img2,
        img3,
        coders,
        nolido,
        nike,
        cryp,
      },
    };
  },
};
</script>

<style></style>
