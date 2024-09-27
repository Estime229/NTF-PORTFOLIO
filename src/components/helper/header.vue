<template>
  <Container>
    <div
      class="index-home flex flex-col md:flex-row items-center justify-between px-6 py-10"
    >
      <!-- Logo Section -->
      <div class="flex w-full md:w-auto justify-between items-center">
        <h1 class="text-3xl mb-2 md:mb-0 text-[#FF00EA] font-dancing font-bold">
          EG <span class="text-[#2600FC]">.dev</span>
        </h1>
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg
              class="w-8 h-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        :class="[
          'fixed inset-0 z-50 bg-white transform transition-transform md:hidden',
          { 'translate-x-full': !isMenuOpen, 'translate-x-0': isMenuOpen },
        ]"
      >
        <div class="absolute top-4 right-4">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg
              class="w-8 h-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul class="flex flex-col items-center mt-8 space-y-4">
          <router-link :to="{ name: 'Home' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goToAgency"
            >
              Home
            </li>
          </router-link>

          <router-link :to="{ name: 'timeline' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goTotimeline"
            >
              timeline
              <sup class="bg-red-500 text-white rounded px-1 py-0.5 align-super"
                >1</sup
              >
            </li>
          </router-link>
          <router-link :to="{ name: 'about' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goToConsulting"
            >
              about
            </li>
          </router-link>
          <router-link :to="{ name: 'work' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="closeMenu"
            >
              work
            </li>
          </router-link>

          <router-link :to="{ name: 'tech' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goToAbout"
            >
              tech
            </li>
          </router-link>
        </ul>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-6">
        <ul class="flex items-center space-x-6">
          <router-link :to="{ name: 'Home' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goToAgency"
            >
              Home
            </li>
          </router-link>

          <router-link :to="{ name: 'timeline' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goTotimeline"
            >
              timeline
              <sup class="bg-red-500 text-white rounded px-1 py-0.5 align-super"
                >1</sup
              >
            </li>
          </router-link>

          <router-link :to="{ name: 'about' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goToConsulting"
            >
              about
            </li>
          </router-link>

          <router-link :to="{ name: 'work' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="closeMenu"
            >
              work
            </li>
          </router-link>

          <router-link :to="{ name: 'tech' }" exact-active-class="active">
            <li
              class="text-gray-500 text-[16px] font-medium cursor-pointer mt-1 hover:text-blue-300"
              @click="goToAbout"
            >
              tech
            </li>
          </router-link>
        </ul>
      </div>

      <!-- Social Icons -->
      <div class="hidden md:flex items-center space-x-4">
        <button @click="goToTwitter">
          <icon :data="icons.twitter" width="24" height="24" alt="Twitter" />
        </button>
        <button @click="goToInstagram">
          <icon :data="icons.insta" width="24" height="24" alt="Instagram" />
        </button>
        <button @click="goToLinkedIn">
          <icon :data="icons.link" width="24" height="24" alt="LinkedIn" />
        </button>
        <button @click="goToLinkedIn">
          <icon :data="icons.card" width="24" height="24" alt="LinkedIn" />
        </button>
      </div>
    </div>
  </Container>
</template>

<script>
import cover from "@/assets/images/img_cover.webp";

import insta from "@/assets/icons/insta.svg";
import twitter from "@/assets/icons/twitter.svg";
import link from "@/assets/icons/link.svg";
import card from "@/assets/icons/card.svg";
import dark from "@/assets/icons/dark.svg";
import { useRoute } from "vue-router";

import Container from "@/components/helper/container.vue";
export default {
  components: { Container },
  name: "header-home",
  data() {
    return {
      darkMode: false, // Assure-toi que cette variable est initialisée correctement

      isMenuOpen: false,
      route: useRoute(),

      icons: { insta, twitter, link, card, dark },
      images: { cover },
    };
  },
  created() {},
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      const html = document.documentElement;
      console.log("Dark mode status:", this.darkMode); // Ajoutez ceci pour le débogage
      if (this.darkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
      localStorage.theme = this.darkMode ? "dark" : "light";
    },
    goTotimeline() {
      return this.route.name === "timeline";
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    scrollToService() {
      this.showMobileMenu = false;
      // Récupérez l'élément d'ancre par son identifiant
      const anchor = document.getElementById("service");

      // Utilisez scrollIntoView pour effectuer un défilement fluide vers l'ancre
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start", // 'start' pour faire défiler l'ancre en haut de la fenêtre
      });
    },
    scrollToAbout() {
      this.showMobileMenu = false;
      // Récupérez l'élément d'ancre par son identifiant
      const anchor = document.getElementById("about");

      // Utilisez scrollIntoView pour effectuer un défilement fluide vers l'ancre
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start", // 'start' pour faire défiler l'ancre en haut de la fenêtre
      });
    },
    scrollToContact() {
      this.showMobileMenu = false;
      // Récupérez l'élément d'ancre par son identifiant
      const anchor = document.getElementById("contact");

      // Utilisez scrollIntoView pour effectuer un défilement fluide vers l'ancre
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start", // 'start' pour faire défiler l'ancre en haut de la fenêtre
      });
    },
  },
  computed: {
    // goTotimeline() {
    //   return this.route.name === "timeline";
    // },
  },
  mounted() {
    const html = document.documentElement;
    const savedTheme = localStorage.theme;
    if (savedTheme === "dark") {
      this.darkMode = true;
      html.classList.add("dark");
    } else {
      this.darkMode = false;
      html.classList.remove("dark");
    }
  },
};
</script>
<style>
svg {
  fill: transparent;
}

.align-super {
  vertical-align: super; /* Aligne l'élément vers le haut */
  font-size: 0.7em; /* Ajustez la taille selon vos préférences */
  margin-top: 10px;
}

.active {
  border-bottom: 2px solid #ff00ea; /* Ajustez la couleur et le style selon vos préférences */
  color: #2600fc; /* Optionnel : changez la couleur du texte pour l'état actif */
}
</style>
