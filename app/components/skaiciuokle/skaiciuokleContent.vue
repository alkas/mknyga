<script setup lang="ts">
import { ref } from 'vue'

const features = ref<IFeature[]>([
  {
    icon: 'ph:users-four',
    title: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'
  },
  {
    icon: 'heroicons:lock-closed',
    title: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'
  },
  {
    icon: 'heroicons:server',
    title: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'
  },
])
</script>

<template>
  <div
      class="relative isolate overflow-hidden bg-white dark:bg-muted-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-muted-900/15 dark:stroke-muted-200/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
      >
        <defs>
          <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-stone-300/20">
          <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
          />
        </svg>
        <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
    </div>
    <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base/7 font-semibold text-primary-600">Individualios mokinio pažangos stebėjimo skaičiuoklė</p>
            <BaseHeading as="h1" size="4xl" weight="semibold" lead="relaxed" class="mt-16 sm:mt-20 text-muted-600 dark:text-muted-300">
              Mokytojo pagalbininkas
            </BaseHeading>
            <p class="mt-6 text-xl/8 text-muted-500 dark:text-muted-400">
              Šiuolaikinis mokytojas susiduria su didžiuliu iššūkiu – kaip kokybiškai ir objektyviai įvertinti kiekvieno mokinio pažangą, kartu nepaskęstant popierių ir vertinimų jūroje.
            </p>
          </div>
        </div>
      </div>
      <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <nuxt-img
            class="w-[48rem] max-w-none rounded-lg bg-white/10 shadow-xl ring-1 ring-stone-400/10 sm:w-[57rem] p-4"
            src="/skaiciuokle/skaiciuokle1.png"
            alt=""
        />
      </div>
      <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="max-w-xl text-base/7 text-muted-700 dark:text-muted-400 lg:max-w-lg">
            <p>
              Tradicinis vertinimo procesas dažnai tampa tikru išbandymu: mokytojai praleidžia valandų valandas taisydami darbus, formuluodami individualius komentarus ir pildydami dokumentaciją.
            </p>
            <ul role="list" class="mt-4 space-y-4 text-muted-700 dark:text-muted-400">
              <li v-for="(feature, idx) in features" :key="idx" class="flex gap-x-3">
                <Icon
                    :name="feature.icon"
                    class="mt-1 size-5 flex-none text-danger-600"
                    aria-hidden="true"
                />
                <span><strong class="text-base/7 font-semibold text-muted-800 dark:text-muted-300">
                  {{ feature.title}}
                </strong>
                  {{ feature.description }}</span
                >
              </li>
            </ul>
            <p class="mt-8">
              Šiandien mokytojai turi galimybę pasinaudoti inovatyviu sprendimu – kriterinio vertinimo sistema, kuri automatizuoja didžiąją dalį vertinimo proceso. Ši sistema remiasi "rubric" principu, leidžiančiu objektyviai įvertinti įvairias mokinių veiklas.
            </p>
            <h2 class="mt-16 text-2xl font-bold tracking-tight text-stone-900">
              No server? No problem.
            </h2>
            <p class="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


