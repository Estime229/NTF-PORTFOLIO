<template>
  <div class="begin index-home">
    <div class="text-blue-700 mx-auto text-center">
      {{ $t("message") }}
    </div>

    <div class="w-full mt-8">
      <img
        :src="images.cover"
        width="200"
        height="200"
        alt="cover"
        class=""
        original
      />
    </div>
    <div class="mt-8">
      <icon
        :data="icons.benin"
        width="20"
        height="20"
        alt="benin-map"
        class=""
        original
      />
    </div>
  </div>
</template>

<script>
import cover from "@/assets/images/img_cover.webp";
import benin from "@/assets/icons/ic_benin.svg";
export default {
  components: {},
  name: "index-home",
  data() {
    return {
      icons: { benin },
      images: { cover },
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
@import "../../../assets/styles/sass/variables.scss";

svg {
  fill: transparent;
}
</style>
