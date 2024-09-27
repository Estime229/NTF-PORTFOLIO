<template>
  <div>
    <Timeline />
  </div>
</template>

<script>
import Timeline from "../../components/container/home/index.vue";
import { checkPolice } from "@/components/all-functions";

export default {
  name: "index-home",
  components: {
    Timeline,
  },

  data() {
    return {
      charge: true,
    };
  },

  created() {
    // this.checkPolice();
  },

  methods: {
    async checkPolice() {
      if (this.reference !== "") {
        const data = {
          police: this.reference,
        };
        this.charge = true;
        await checkPolice(data)
          .then((response) => {
            this.charge = false;
            console.log(response);
          })
          .catch((error) => {
            this.charge = false;
            this.$toast.error("Une erreur est survenue");
            console.log(error);
          });
      } else {
        this.$toast.error("Le Numéro de référence est requis.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/sass/variables";
</style>
