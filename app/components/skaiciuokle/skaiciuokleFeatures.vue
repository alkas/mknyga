<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-melsva-600">Deploy faster</h2>
        <p
            class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-stone-800 sm:text-5xl lg:text-balance"
        >
          Everything you need to deploy your app
        </p>
        <p class="mt-6 text-lg/8 text-stone-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
              v-for="feature in features"
              :key="feature.name"
              class="relative pl-16"
          >
            <dt class="text-base/7 font-semibold text-stone-900">
              <div
                  class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-melsva-600"
              >
                <Icon
                    :name="feature.icon"
                    class="size-6 text-white"
                    aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base/7 text-stone-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    name: 'Push to deploy',
    description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: 'heroicons:cloud-arrow-up',
  },
  {
    name: 'SSL certificates',
    description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: 'iconoir:send-mail',
  },
  {
    name: 'Veikia Google diske',
    description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: 'iconoir:google-drive',
  },
  {
    name: 'Advanced security',
    description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: 'heroicons:finger-print',
  },
]
</script>
