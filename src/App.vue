<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import AnimatedBackdrop from '@/components/AnimatedBackdrop.vue'
import IntroLoader from '@/components/IntroLoader.vue'
import { useCursor } from '@/composables/useCursor'

useCursor()
</script>

<template>
  <AnimatedBackdrop />
  <div class="spotlight" aria-hidden="true" />
  <IntroLoader />
  <SiteNav />

  <main class="relative z-10">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </main>

  <SiteFooter />
</template>
