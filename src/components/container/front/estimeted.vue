<template>
  <container>
    <div class="mt-32 flex justify-center">
      <img :src="images.bar1" class="w-20 h-5" alt="cover" />
    </div>

    <!-- Section avec l'animation de décompte -->
    <div
      class="justify-center mt-20 space-y-8 sm:space-y-10 sm:space-x-4 grid grid-rows sm:grid md:space-y-0 lg:grid lg:grid-cols-4 lg:divide-x"
    >
      <div class="w-[305px] h-[55px]">
        <h1 class="font-bold text-2xl flex justify-center">
          <span ref="counter1"></span>+
        </h1>
        <h1 class="text-xl flex justify-center">Experience</h1>
      </div>
      <div class="w-[305px] h-[55px]">
        <h1 class="font-bold text-2xl flex justify-center">
          <span ref="counter2"></span>+
        </h1>
        <h1 class="text-xl flex justify-center">Developpement</h1>
      </div>
      <div class="w-[305px] h-[55px]">
        <h1 class="font-bold text-2xl flex justify-center">
          <span ref="counter3"></span>+
        </h1>
        <h1 class="text-xl flex justify-center">Design</h1>
      </div>
      <div class="w-[305px] h-[55px]">
        <h1 class="font-bold text-2xl flex justify-center">2.5xRapidité</h1>
        <h1 class="text-xl flex justify-center">Maintenance</h1>
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/helper/container.vue";
import bar1 from "@/assets/images/bar1.webp";
import { CountUp } from "countup.js";

import img1 from "@/assets/images/image3.webp";
import img2 from "@/assets/images/image1.webp";
import img3 from "@/assets/images/imag2.webp";

export default {
  name: "estimated-",
  components: { container },
  data() {
    return {
      isMenuOpen: false,
      icons: { bar1 },
      images: { bar1, img1, img2, img3 },
    };
  },
  mounted() {
    // Initialisation des animations de décompte avec CountUp.js
    this.startCountUp();
  },
  methods: {
    startCountUp() {
      const options = {
        duration: 10.5, // durée de l'animation en secondes
      };

      const counter1 = new CountUp(this.$refs.counter1, 4, options);
      const counter2 = new CountUp(this.$refs.counter2, 3, options);
      const counter3 = new CountUp(this.$refs.counter3, 3, options);

      // Lancement des animations si elles sont correctement initialisées
      if (!counter1.error) {
        counter1.start();
      } else {
        console.error(counter1.error);
      }

      if (!counter2.error) {
        counter2.start();
      } else {
        console.error(counter2.error);
      }

      if (!counter3.error) {
        counter3.start();
      } else {
        console.error(counter3.error);
      }
    },
  },
};
</script>

<style scoped></style>
