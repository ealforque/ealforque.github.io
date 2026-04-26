<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { profile } from '@/content/portfolio'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' }
]

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-in-out"
    :class="scrolled ? 'py-3' : 'py-6'"
  >
    <div class="container-page">
      <nav
        class="flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ease-in-out"
        :class="scrolled ? 'glass shadow-soft' : 'bg-transparent'"
      >
        <RouterLink
          to="/"
          class="group flex items-center gap-2 pl-2 pr-4 py-1 text-sm font-semibold tracking-tight"
        >
          <span
            class="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyan-400 text-white shadow-glow"
          >
            <span class="text-[11px] font-bold">{{ profile.name.charAt(0) }}</span>
          </span>
          <span class="hidden sm:inline">{{ profile.name }}</span>
        </RouterLink>

        <ul class="hidden lg:flex items-center gap-1">
          <li v-for="l in links" :key="l.to">
            <RouterLink
              :to="l.to"
              class="relative inline-flex rounded-full px-4 py-2 text-sm text-ink-300 transition-colors duration-300 hover:text-white"
              :class="{ 'text-white': route.path === l.to }"
            >
              <span
                v-if="route.path === l.to"
                class="absolute inset-0 rounded-full bg-white/10"
                aria-hidden="true"
              />
              <span class="relative">{{ l.label }}</span>
            </RouterLink>
          </li>
        </ul>

        <div class="flex items-center gap-2 pr-1">
          <RouterLink
            to="/contact"
            class="hidden sm:inline-flex btn-ghost !py-2 !px-5 text-xs"
          >
            Get in touch
          </RouterLink>
          <button
            class="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5"
            :aria-expanded="open"
            aria-label="Toggle menu"
            @click="open = !open"
          >
            <svg
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
              <path v-else d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="open" class="lg:hidden mt-3 glass rounded-2xl p-2">
          <RouterLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            class="block rounded-xl px-4 py-3 text-sm text-ink-200 hover:bg-white/5"
            @click="open = false"
          >
            {{ l.label }}
          </RouterLink>
        </div>
      </Transition>
    </div>
  </header>
</template>
