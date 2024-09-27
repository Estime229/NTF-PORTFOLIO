<template>
  <div
    class="tech group relative border dark:bg-white/25 lg:bg-none lg:dark:hover:bg-slate-50/50 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-md sm:rounded-lg md:rounded-xl md:hover:border-blue-600"
    @click="handleClick"
  >
    <div class="h-full w-full p-2 md:p-3 lg:p-4 relative">
      <img
        :src="main"
        alt="alt"
        class="select-none group-hover:scale-[1.1] transition-all duration-700 object-contain p-2 md:p-3 rounded-lg md:rounded-xl lg:rounded-2xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    main: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("changeId", this.id);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles specific to this component here */
</style>
