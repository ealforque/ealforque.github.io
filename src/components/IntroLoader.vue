<script setup lang="ts">
import { ref, onMounted } from 'vue'

const KEY = 'portfolio-intro-shown'
const ready = ref(sessionStorage.getItem(KEY) === '1')

onMounted(() => {
  if (ready.value) return
  setTimeout(() => {
    ready.value = true
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {
      /* noop */
    }
  }, 650)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-700 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-700 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="!ready"
      class="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
      aria-hidden="true"
    >
      <div class="flex flex-col items-center gap-6">
        <div class="relative h-12 w-12">
          <span
            class="absolute inset-0 rounded-full border border-white/10"
          />
          <span
            class="absolute inset-0 animate-spin rounded-full border-t-2 border-accent"
            style="animation-duration: 1.1s"
          />
        </div>
        <p class="font-mono text-[11px] tracking-[0.3em] text-ink-400 uppercase">
          Composing
        </p>
      </div>
    </div>
  </Transition>
</template>
