<template>
  <container>
    <div class="flex justify-center mt-44">
      <div
        class="flex gap-40 animate-fadeIn grid grid-rows lg:grid lg:grid-cols-5"
      >
        <img
          :src="images.vs"
          class="w-[40px] h-[40px] animate-float"
          alt="cover"
        />
        <img
          :src="images.tw"
          class="w-[40px] h-[40px] animate-float"
          alt="cover"
        />
        <img
          :src="images.typ"
          class="w-[40px] h-[40px] animate-float"
          alt="cover"
        />
        <img
          :src="images.js"
          class="w-[40px] h-[40px] animate-float"
          alt="cover"
        />
        <img
          :src="images.nex"
          class="w-[40px] h-[40px] animate-float"
          alt="cover"
        />
      </div>
    </div>

    <div class="mt-32 flex justify-center animate-slideInUp">
      <img :src="images.bar1" class="w-20 h-5" alt="cover" />
    </div>
  </container>
</template>

<script>
import brand1 from "@/assets/icons/vscode-original.svg";
import brand2 from "@/assets/icons/tailwindcss-plain.svg";
import brand3 from "@/assets/icons/brand3.svg";
import brand4 from "@/assets/icons/brand4.svg";
import bar1 from "@/assets/images/bar1.webp";
import vs from "@/assets/images/vscode-original.png";
import tw from "@/assets/images/tailwindcss-plain.png";
import typ from "@/assets/images/typescript-plain.png";
import js from "@/assets/images/javascript-original.png";
import nex from "@/assets/images/nextjs-original.png";
import mat from "@/assets/images/materialui-original.png";

import container from "@/components/helper/container.vue";

export default {
  components: { container },
  name: "stack-",
  data() {
    return {
      isMenuOpen: false,

      icons: { brand1, brand2, brand3, brand4, bar1 },
      images: { bar1, vs, tw, typ, js, nex, mat },
    };
  },
};
</script>

<style scoped>
/* Animation fade-in pour les icônes */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation de flottement */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-in-out;
}

.animate-slideInUp {
  animation: slideInUp 1.5s ease-in-out;
}

/* Appliquer l'animation de flottement aux icônes */
.animate-float {
  animation: float 1s ease-in-out infinite;
}
</style>
