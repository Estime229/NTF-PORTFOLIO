<template>
  <div
    class="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center"
  >
    <button
      class="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff] px-1 py-1 rounded-full select-none"
      @click="leftArrow"
    >
      <h1
        class="w-5 h-3 md:mb-0 mb-2 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]"
      >
        -1
      </h1>
    </button>

    <div
      class="bg-gradient-to-tr dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 md:h-max lg:space-x-6 transition-all duration-700 ease-linear"
    >
      <div
        class="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl"
      >
        <div class="flex mx-auto rounded-2xl relative w-full h-full bg-white">
          <img
            :src="data[idNumber].main"
            alt="tech"
            class="select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      <div
        class="basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500"
      >
        <div class="flex mb-1 justify-between items-center">
          <h3
            class="text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-semibold tracking-wide"
          >
            {{ data[idNumber].title }}
          </h3>
          <div
            :class="`${data[idNumber].bg} ${data[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max fon font-bold`"
          >
            {{ data[idNumber].tag }}
          </div>
        </div>
        <p
          class="text-[0.58rem] sm:text-[0.7rem] md:text-[0.9rem] md:text-base lg:text-[1.015rem] font-normal md:w-[90%]"
        >
          {{ data[idNumber].desc }}
        </p>
      </div>
    </div>

    <button
      class="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
      @click="rightArrow"
    >
      <h1
        class="w-5 h-3 md:mb-0 mb-2 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]"
      >
        +1
      </h1>
    </button>
  </div>
  <div
    class="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center"
  >
    <TechCard
      v-for="(obj, i) in data"
      :key="i"
      :id="obj.id"
      :main="obj.main"
      :alt="obj.title"
      @changeId="changeId"
    />
  </div>
</template>

<script>
import link from "@/assets/icons/link.svg";
import TechCard from "./techCard2.vue";

export default {
  components: {
    TechCard,
  },
  name: "TechStack",
  data() {
    return {
      icons: { link },

      idNumber: 0,
      data: [
        {
          title: "VS Code",
          id: 0,
          main: require("/src/assets/icons/vscode-original.png"),
          desc: "Best coding IDE to ever exist, comes with tons of customization",
          tag: "code",
          bg: "bg-blue-50",
          text: "text-blue-500",
        },
        {
          title: "JavaScript",
          id: 1,
          main: require("/src/assets/icons/javascript-original.png"),

          desc: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
          tag: "code",
          bg: "bg-yellow-50",
          text: "text-yellow-500",
        },
        {
          title: "TypeScript",
          id: 2,
          main: require("/src/assets/icons/typescript-plain.png"),

          desc: "SuperScript of Javascript, made by Microsoft with robust type safety.",
          tag: "code",
          bg: "bg-blue-50",
          text: "text-blue-500",
        },
        {
          title: "React JS",
          id: 3,
          main: require("/src/assets/icons/react-original.png"),

          desc: "A free and open-source front-end JavaScript library for building user interfaces based on components.",
          tag: "develop",
          bg: "bg-blue-50",
          text: "text-blue-500",
        },
        {
          title: "Next JS",
          id: 4,
          main: require("/src/assets/icons/nextjs-original.png"),

          desc: "An open-source web development framework providing React-based web applications.",
          tag: "develop",
          bg: "bg-gray-900",
          text: "text-gray-50",
        },
        {
          title: "Tailwind CSS",
          id: 5,
          main: require("/src/assets/icons/tailwindcss-plain.png"),

          desc: "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
          tag: "design",
          bg: "bg-green-50",
          text: "text-green-500",
        },
        {
          title: "Material UI",
          id: 6,
          main: require("/src/assets/icons/materialui-original.png"),

          desc: "A comprehensive suite of UI tools to help you ship new features faster.",
          tag: "develop",
          bg: "bg-indigo-50",
          text: "text-indigo-500",
        },
        {
          title: "SASS",
          id: 7,
          main: require("/src/assets/icons/sass-original.png"),

          desc: "CSS with superpowers. The most powerful professional grade CSS extension language in the world.",
          tag: "design",
          bg: "bg-pink-300",
          text: "text-pink-800",
        },
        {
          title: "Notion",
          id: 8,
          main: require("/src/assets/icons/sass-original.png"),

          desc: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
          tag: "productivity",
          bg: "bg-gray-900",
          text: "text-gray-100",
        },
        {
          title: "Figma",
          id: 9,
          main: require("/src/assets/icons/sass-original.png"),

          desc: "A boon for webapp designers, from wireframe to animation, it has it all.",
          tag: "design",
          bg: "bg-orange-500",
          text: "text-orange-100",
        },
        {
          title: "GitHub",
          id: 10,
          main: require("/src/assets/icons/sass-original.png"),

          desc: "A developer's go-to platform for collaborating and showcasing their code.",
          tag: "platform",
          bg: "bg-gray-900",
          text: "text-gray-100",
        },
        {
          title: "Brave",
          id: 11,
          main: require("/src/assets/icons/sass-original.png"),

          desc: "A privacy-focused browser used to block ads and extra pops.",
          tag: "platform",
          bg: "bg-orange-500",
          text: "text-orange-100",
        },
      ],
    };
  },
  methods: {
    leftArrow() {
      if (this.idNumber > 0) {
        this.idNumber -= 1;
      }
    },
    rightArrow() {
      if (this.idNumber < this.data.length - 1) {
        this.idNumber += 1;
      }
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
