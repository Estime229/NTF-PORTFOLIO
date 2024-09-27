<template>
  <div class="flex justify-between">
    <div class="flex flex-col mt-20 ml-20">
      <ol class="relative border-l border-gray-300 dark:border-gray-700">
        <li v-for="item in data" :key="item.id" class="mb-10 flex items-start">
          <div class="flex-shrink-0">
            <span
              class="flex items-center justify-center w-6 h-6 rounded-full ring-8 ring-white"
            >
              <img
                :src="images.img2"
                width="35"
                height="35"
                alt="cover"
                class=""
                original
              />
            </span>
          </div>
          <div class="ml-4 flex-grow">
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black"
            >
              {{ item.title }}
              <span
                v-if="item.id === 0"
                class="bg-red-500 text-white text-sm font-medium ml-2 px-2.5 py-0.5 rounded"
              >
                Latest
              </span>
            </h3>
            <time
              class="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500"
            >
              {{ item.duration }}
            </time>
            <p class="font-medium text-gray-700 dark:text-gray-400">
              {{ item.org }}
            </p>
            <div class="flex flex-wrap mt-2">
              <span
                v-for="(skill, idx) in item.skills"
                :key="idx"
                :class="item.class"
                class="mr-2 mb-2"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div class="flex flex-col mt-60 mr-48 sm:block hidden">
      <div
        class="border-2 rounded-xl w-[277.5px] h-[350.59px] hover:border-blue-800"
      >
        <img
          :src="images.Vector1"
          class="w-[43px] h-[40px] ml-10 mt-10"
          alt="cover"
        />
        <h1
          class="mt-10 font-bold text-3xl ml-10 h-12 tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent"
        >
          My Timeline
        </h1>
        <h2 class="mt-10 ml-10 w-52 h-20">
          Throughout my journey, I have always sought to innovate and improve by
          pursuing training and keeping up with web trends.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import img2 from "@/assets/images/image1.webp";
import Vector1 from "@/assets/images/Vector1.webp";

import grad from "@/assets/images/grad.webp";

export default {
  name: "chrono-",
  data() {
    return {
      images: { img2, grad, Vector1 },

      data: [
        {
          id: 0,
          title: "Dev Fullstack",
          duration: "Actuellement",
          org: "Freelance",
          skills: [],
          class:
            "bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
        },
        {
          id: 1,
          title: "Dev Fullstack",
          duration: "Avr 2023 - Jan 2024",
          org: "BEL ALLIANCE CONSULTING",
          skills: ["React.js", "Next.js", "SASS", "TypeScript", "Firebase"],
          class:
            "bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
        },
        {
          id: 2,
          title: "Stage Professionnelle",
          duration: "Oct 2022 - Mar 2022",
          org: "GOLD INVESTISSEMENT",
          skills: ["JavaScript", "Tailwind css", "vue.js", "Sqlite"],
          class:
            "bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
        },
        {
          id: 3,
          title: "Stage Accadémique",
          duration: "Fev 2022 - Mai 2022",
          org: "WEB ADDICT AGENCY",
          skills: ["Laravel", "Stripe", "Bootstrap"],
          class:
            "bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
        },
        {
          id: 4,
          title: "Licence Professionnelle: Option Génie Logiciel",
          duration: "2022-2023",
          org: "Université Les Cours Sonou",
          skills: ["Python", "Data Analysis", "Developpement de Logiciel"],
          class:
            "bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Ajoutez vos styles personnalisés ici si nécessaire */
</style>
