<script setup lang="ts">

</script>

<template>
  <div class="relative isolate overflow-hidden bg-white">
    <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-muted-900/15 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
    >
      <defs>
        <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-stone-300/20">
        <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
        />
      </svg>
      <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
      />
    </svg>
    <div
        class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
    >
      <div
          class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#e7e5e4] to-[#44403c] opacity-20"
          style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      ></div>
    </div>
    <div
        class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-16"
    >
      <div class="max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <MkLogo class="h-11 w-auto" />
        <!--<div class="mt-16 sm:mt-32 lg:mt-16">
          <a href="#" class="inline-flex space-x-6">
            <span
              class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-indigo-500/20"
              >What's new</span
            >
            <span
              class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300"
            >
              <span>About us</span>
              <svg
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
        </div> -->
        <BaseHeading as="h1" size="6xl" weight="semibold" lead="relaxed" class="mt-16 sm:mt-20 text-muted-600 dark:text-muted-200">Individualios pažangos stebėjimo skaičiuoklė</BaseHeading>
        <p class="mt-6 text-lg leading-8 text-muted-500 dark:text-muted-300">
          Tai Google diske veikianti skaičiuoklė - mokinių gebėjimų fiksavimo ir
          jų pažangos stebėjimo įrankis.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <BaseButton to="/skaiciuokle" variant="solid" color="primary" size="lg">Gauti kopiją</BaseButton>
          <nuxt-link
              to="/skaiciuokle/apie"
              class="text-sm font-semibold leading-6 text-muted-500 dark:text-muted-300"
          >Plačiau <span aria-hidden="true">→</span></nuxt-link
          >
        </div>
      </div>
      <div
          class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
      >
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <nuxt-img
              src="/skaiciuokle/skaiciuokle5.png"
              alt="App screenshot"
              width="1437"
              height="762"
              class="w-[76rem] rounded-lg p-4 bg-white/10 shadow-2xl ring-1 ring-stone-400/10"
          />
        </div>
      </div>
    </div>
  </div>
</template>
