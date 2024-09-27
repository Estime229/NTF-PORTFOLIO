<template>
  <container>
    <div class="mt-20 collection">
      <h1 class="text-4xl font-bold flex justify-center mb-2">
        Nfthub's <span class="text-[#FF00EA] mx-2">collection</span>
      </h1>
      <div class="flex justify-center mt-10">
        <!-- Ajout d'un gap pour un meilleur contrôle -->
        <carousel :items-to-show="1.5">
          <slide v-for="slide in slides" :key="slide.id">
            <div class="w-[264px] h-[462px] bg-black">{slide.content}</div>
          </slide>
          <template #addons>
            <navigation />
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </container>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import container from "@/components/helper/container.vue";
export default {
  name: "collection-",
  components: { container, Carousel, Slide, Navigation, Pagination },
  data() {
    return {
      slides: [
        // You can add objects containing slide content here
        { id: 1, content: "Slide 1" },
        { id: 2, content: "Slide 2" },
        { id: 3, content: "Slide 3" },
        { id: 3, content: "Slide 3" },
      ],
    };
  },
};
</script>

<style>
/* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
</style>
