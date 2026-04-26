<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { profile, strengths, techStack } from '@/content/portfolio'
import { timeline } from '@/content/timeline'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const photoEl = ref<HTMLElement | null>(null)

const onMove = (e: MouseEvent) => {
  if (!photoEl.value) return
  const r = photoEl.value.getBoundingClientRect()
  const x = (e.clientX - (r.left + r.width / 2)) / r.width
  const y = (e.clientY - (r.top + r.height / 2)) / r.height
  photoEl.value.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(
    2
  )}deg) rotateY(${(x * 6).toFixed(2)}deg) translateZ(0)`
}

onMounted(() => window.addEventListener('mousemove', onMove, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('mousemove', onMove))

const FEATURED_IDS = [
  'etl-pipelines',
  'hr-onboarding-bridge',
  'po-sync',
  'api-aggregator',
  'sds-filesearch',
  'nexfile',
  'sequelize-field-parser',
  'axios-http-logger'
]
const featured = FEATURED_IDS
  .map((id) => timeline.find((p) => p.id === id))
  .filter((p): p is (typeof timeline)[number] => Boolean(p))
</script>

<template>
  <div>
    <section class="container-page pt-36 md:pt-48 pb-24">
      <div class="grid items-center gap-14 lg:grid-cols-12">
        <div class="lg:col-span-7 reveal">
          <div class="flex items-center gap-3">
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"
              />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span class="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-300">
              Currently building at GemLife
            </span>
          </div>

          <h1 class="heading mt-6 text-5xl sm:text-6xl md:text-7xl leading-[1.02]">
            {{ profile.firstName }}
            <span
              class="bg-gradient-to-r from-accent via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"
              >{{ profile.lastName }}</span
            >
            <br />
            <span class="text-ink-200">{{ profile.role }}.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg text-muted">{{ profile.tagline }}</p>
          <p class="mt-3 max-w-xl text-sm text-muted">{{ profile.intro }}</p>

          <div class="mt-10 flex flex-wrap items-center gap-3">
            <RouterLink to="/projects" class="btn-primary">
              View projects
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </RouterLink>
            <RouterLink to="/contact" class="btn-ghost">Contact</RouterLink>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div
            ref="photoEl"
            class="relative mx-auto w-full max-w-sm transition-transform duration-200 ease-out animate-float"
          >
            <div
              class="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/30 via-fuchsia-500/20 to-cyan-400/20 blur-2xl"
            />
            <div class="relative glass overflow-hidden rounded-[2rem] p-2 shadow-soft">
              <div
                class="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-ink-800 to-ink-900"
              >
                <svg
                  viewBox="0 0 400 500"
                  class="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stop-color="#1a1a2e" />
                      <stop offset="100%" stop-color="#0b0d12" />
                    </linearGradient>
                    <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stop-color="#7c5cff" />
                      <stop offset="100%" stop-color="#22d3ee" />
                    </linearGradient>
                    <radialGradient id="halo" cx="50%" cy="35%" r="40%">
                      <stop offset="0%" stop-color="rgba(124,92,255,0.35)" />
                      <stop offset="100%" stop-color="rgba(124,92,255,0)" />
                    </radialGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#bg)" />
                  <circle cx="200" cy="180" r="140" fill="url(#halo)" />
                  <path
                    d="M60 500 C 80 380, 150 340, 200 340 C 250 340, 320 380, 340 500 Z"
                    fill="url(#skin)"
                    opacity="0.85"
                  />
                  <circle cx="200" cy="220" r="86" fill="url(#skin)" />
                  <rect
                    x="6"
                    y="6"
                    width="388"
                    height="488"
                    rx="36"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                  />
                </svg>
              </div>

              <div class="mt-3 flex items-center justify-between px-3 pb-1 pt-1">
                <div>
                  <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">
                    Currently
                  </p>
                  <p class="text-sm">Full Stack Dev @ GemLife</p>
                </div>
                <span class="chip">QLD, AU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page py-20">
      <div class="reveal flex items-end justify-between gap-6">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">
            Tech stack
          </p>
          <h2 class="heading mt-3 text-2xl sm:text-3xl">What I build with</h2>
        </div>
        <RouterLink to="/about" class="text-sm text-muted hover:text-white transition">
          Full breakdown →
        </RouterLink>
      </div>

      <div class="reveal mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(items, group) in techStack"
          :key="group"
          class="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
        >
          <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">
            {{ group }}
          </p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <span v-for="t in items" :key="t" class="chip">{{ t }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page py-24">
      <div class="reveal flex items-end justify-between gap-6">
        <h2 class="heading text-3xl sm:text-4xl">How I work</h2>
        <RouterLink to="/about" class="text-sm text-muted hover:text-white transition">
          More about me →
        </RouterLink>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article
          v-for="s in strengths"
          :key="s.title"
          class="reveal glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-glow"
        >
          <div class="relative">
            <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">
              {{ s.title }}
            </p>
            <p class="mt-3 text-base text-ink-200">{{ s.body }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="container-page py-24">
      <div class="reveal flex items-end justify-between gap-6">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">
            Selected work
          </p>
          <h2 class="heading mt-3 text-3xl sm:text-4xl">Recent projects</h2>
        </div>
        <RouterLink to="/projects" class="text-sm text-muted hover:text-white transition">
          View all →
        </RouterLink>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="p in featured"
          :key="p.id"
          to="/projects"
          class="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-glow"
        >
          <div class="relative">
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/80">
              Project {{ p.number }}
            </span>
            <h3 class="heading mt-3 text-xl">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-muted line-clamp-3">{{ p.description }}</p>
            <div class="mt-6 flex flex-wrap gap-1.5">
              <span v-for="t in p.stack.slice(0, 4)" :key="t" class="chip">{{ t }}</span>
            </div>
            <span
              class="mt-6 inline-flex items-center gap-1 text-xs text-accent transition-all duration-300 group-hover:gap-2"
            >
              Read project
              <svg
                viewBox="0 0 24 24"
                class="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
