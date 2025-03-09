<script setup lang="ts">
import SkaiciuokleContent from "../../components/skaiciuokle/skaiciuokleContent.vue";
import SkaiciuokleFeatures from "../../components/skaiciuokle/skaiciuokleFeatures.vue";
import SkaiciuokleBentGrid from "../../components/skaiciuokle/skaiciuokleBentGrid.vue";

definePageMeta({
  name: 'skaiciuokle-apie',
})
useSeoMeta({
  title: 'Individualios mokinio pažangos stebėjimo skaičiuoklė',
  description: 'Daugiau informacijos apie individualios mokinio pažangos stebėjimo skaičiuoklę.'
})
</script>
<template>
  <div>
    <skaiciuokleContent />
    <skaiciuokleFeatures />
    <skaiciuokleBentGrid />
  </div>
</template>