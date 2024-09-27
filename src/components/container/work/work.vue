<template>
  <Container>
    <Header />
    <navigation-3 />
    <worktab />
    <contact />
    <Footer />
  </Container>
</template>

<script>
import cover from "@/assets/images/img_cover.webp";
import insta from "@/assets/icons/insta.svg";
import twitter from "@/assets/icons/twitter.svg";
import link from "@/assets/icons/link.svg";
import card from "@/assets/icons/card.svg";
import Container from "@/components/helper/container.vue";
import Contact from "../front/contact.vue";
import Footer from "@/components/helper/footer.vue";
import Header from "@/components/helper/header.vue";
import Navigation3 from "./navigation3.vue";
import Worktab from "./worktab.vue";
// import Collection from "../front/collection.vue";
export default {
  components: {
    Container,
    Contact,
    Footer,
    Header,
    Navigation3,
    Worktab,
  },
  name: "work-home",
  data() {
    return {
      isMenuOpen: false,

      icons: { insta, twitter, link, card },
      images: { cover },
    };
  },
  created() {},
  methods: {
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
};
</script>

<style scoped>
@import "../../../assets/styles/sass/variables.scss";

svg {
  fill: transparent;
}
</style>
