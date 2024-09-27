<template>
  <container>
    <div class="w-full md:h-auto mt-20">
      <div class="flex justify-center relative">
        <h1
          class="absolute mt-10 sm:mt-32 lg:mt-10 text-4xl sm:text-5xl lg:text-7xl font-bold text-[#FF00EA] text-center font-dancing"
        >
          Are you <span class="text-[#2600FC]">ready?</span>
        </h1>
        <h2
          class="mt-20 sm:mt-44 lg:mt-32 absolute text-lg sm:text-xl lg:text-2xl lg:w-[500px] text-center font-dancing"
        >
          That was a short information about the domain that I have previously
          worked on. while you're at it, have a look at few chosen works that i
          have created using above domain.
        </h2>
        <button
          class="bg-[#c982e6] w-[200px] sm:w-[240px] lg:w-[266.75px] h-12 sm:h-14 lg:h-20 rounded-full mt-48 sm:mt-44 lg:mt-60 flex items-center justify-center text-white text-sm sm:text-lg lg:text-xl font-bold gap-3 animate-slideUp opacity-0 absolute"
        >
          Voir les projects
          <icon
            :data="icons.up"
            width="20"
            height="20"
            class="lg:w-6 lg:h-6"
            alt="LinkedIn"
          />
        </button>
      </div>
      <img
        :src="images.contact"
        class="w-full max-w-screen-lg mx-auto relative h-[260px] lg:h-auto"
        alt="cover"
      />
    </div>
  </container>
</template>

<script>
import container from "@/components/helper/container.vue";
import contact from "@/assets/images/contact.webp";
import up from "@/assets/icons/up.svg";

export default {
  components: { container },
  name: "projet-",
  data() {
    return {
      icons: { up },
      images: { contact },
    };
  },
};
</script>

<style></style>
