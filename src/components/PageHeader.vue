<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header class="reveal pt-32 md:pt-40">
    <p
      v-if="eyebrow"
      class="font-mono text-[11px] uppercase tracking-[0.32em] text-accent/80"
    >
      {{ eyebrow }}
    </p>
    <h1 class="heading mt-4 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="mt-5 max-w-2xl text-base sm:text-lg text-muted">
      {{ subtitle }}
    </p>
  </header>
</template>
