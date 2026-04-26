<script setup lang="ts">
/**
 * Slow, animated gradient + grid backdrop.
 * Sits behind all content, non-interactive.
 */
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <!-- Base gradient -->
    <div
      class="absolute inset-0 bg-[length:200%_200%] animate-gradient-pan"
      :style="{
        backgroundImage:
          'radial-gradient(at 20% 20%, rgba(124,92,255,0.18), transparent 55%), radial-gradient(at 80% 10%, rgba(34,211,238,0.12), transparent 60%), radial-gradient(at 70% 80%, rgba(236,72,153,0.10), transparent 60%)'
      }"
    />
    <!-- Grid overlay -->
    <div
      class="absolute inset-0 bg-grid-dark dark:bg-grid-dark [background-size:48px_48px] opacity-40"
    />
    <!-- Vignette -->
    <div
      class="absolute inset-0"
      :style="{
        background:
          'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)'
      }"
    />
  </div>
</template>
