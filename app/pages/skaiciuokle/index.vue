<script setup lang="ts">
import SkaiciuokleHero from "~/components/skaiciuokle/SkaiciuokleHero.vue";

definePageMeta({
  name: "skaiciuokle",
  layout: "background-grid-layout",
});
useSeoMeta({
  title: "Individualios mokinio pažangos stebėjimo skaičiuoklė",
  description:
    "Google diske veikianti skaičiuoklė - mokinių gebėjimų fiksavimo ir jų pažangos stebėjimo įrankis.",
});
</script>
<template>
  <SkaiciuokleHero />
</template>
