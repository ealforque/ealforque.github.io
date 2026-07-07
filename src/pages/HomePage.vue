<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { profile, strengths, techStack } from '@/content/portfolio'
import { timeline } from '@/content/timeline'
import { useScrollReveal } from '@/composables/useScrollReveal'
import profilePhoto from '@/assets/img/photo/photo.png'

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

const featured = timeline.slice(0, 12)
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
            <RouterLink to="/projects" class="btn-primary ui-weld">
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
            <RouterLink to="/contact" class="btn-ghost ui-weld">Contact</RouterLink>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div
            ref="photoEl"
            class="relative mx-auto w-full max-w-md transition-transform duration-200 ease-out animate-float"
          >
            <div class="profile-orbit" data-cursor="hover">
              <div class="profile-aura" aria-hidden="true" />
              <div class="profile-ring" aria-hidden="true">
                <span class="profile-spark-orbit" />
              </div>

              <div class="profile-core">
                <div class="profile-photo-wrap">
                  <img :src="profilePhoto" alt="Erica Alforque profile photo" class="profile-photo" />
                  <img
                    :src="profilePhoto"
                    alt=""
                    aria-hidden="true"
                    class="profile-photo-glitch profile-photo-glitch-cyan"
                  />
                  <img
                    :src="profilePhoto"
                    alt=""
                    aria-hidden="true"
                    class="profile-photo-glitch profile-photo-glitch-magenta"
                  />
                  <span aria-hidden="true" class="profile-photo-scanline" />
                </div>
              </div>
            </div>

            <div class="profile-meta mt-6 flex items-center justify-between px-2">
              <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">Currently</p>
                <p class="text-sm">Full Stack Dev @ GemLife</p>
              </div>
              <span class="chip">QLD, AU</span>
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
          class="reveal ui-weld glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-glow"
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
          v-for="(p, index) in featured"
          :key="p.id"
          to="/projects"
          class="reveal ui-weld group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-glow"
        >
          <div class="relative">
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/80">
              Project {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3 class="heading mt-3 text-xl">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-muted line-clamp-3">{{ p.description }}</p>
            <div class="mt-6 flex flex-wrap gap-1.5">
              <span v-for="t in p.stack" :key="t" class="chip">{{ t }}</span>
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

<style scoped>
.profile-photo-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
  background:
    radial-gradient(circle at 30% 20%, rgba(124, 92, 255, 0.25), transparent 54%),
    radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.2), transparent 48%),
    linear-gradient(140deg, #161a26 0%, #090b12 100%);
}

.profile-photo {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  filter: saturate(1.06) contrast(1.04);
}

.profile-photo-glitch {
  position: absolute;
  inset: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  opacity: 0.28;
  pointer-events: none;
}

.profile-photo-glitch-cyan {
  mix-blend-mode: screen;
  filter: hue-rotate(162deg) saturate(1.7);
  animation: glitch-cyan 1.8s steps(2, end) infinite;
}

.profile-photo-glitch-magenta {
  mix-blend-mode: screen;
  filter: hue-rotate(322deg) saturate(1.7);
  animation: glitch-magenta 2s steps(2, end) infinite;
}

.profile-photo-scanline {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 14%,
      rgba(255, 255, 255, 0) 100%
    ),
    repeating-linear-gradient(
      to bottom,
      rgba(8, 10, 16, 0.14) 0,
      rgba(8, 10, 16, 0.14) 2px,
      rgba(8, 10, 16, 0) 4px,
      rgba(8, 10, 16, 0) 6px
    );
  mix-blend-mode: soft-light;
  opacity: 0.8;
  animation: scanline-drift 2.8s linear infinite;
}

@keyframes glitch-cyan {
  0%,
  8%,
  23%,
  42%,
  70%,
  100% {
    transform: translate(0, 0);
    clip-path: inset(0 0 0 0);
  }
  9% {
    transform: translate(4px, -2px);
    clip-path: inset(10% 0 68% 0);
  }
  10% {
    transform: translate(-3px, 1px);
    clip-path: inset(58% 0 10% 0);
  }
  11% {
    transform: translate(3px, 2px);
    clip-path: inset(34% 0 35% 0);
  }
  24% {
    transform: translate(-4px, -1px);
    clip-path: inset(70% 0 6% 0);
  }
  25% {
    transform: translate(2px, 1px);
    clip-path: inset(20% 0 50% 0);
  }
  43% {
    transform: translate(3px, -2px);
    clip-path: inset(48% 0 26% 0);
  }
  44% {
    transform: translate(-2px, 1px);
    clip-path: inset(14% 0 64% 0);
  }
  71% {
    transform: translate(4px, 1px);
    clip-path: inset(62% 0 8% 0);
  }
  72% {
    transform: translate(-3px, -1px);
    clip-path: inset(30% 0 38% 0);
  }
}

@keyframes glitch-magenta {
  0%,
  15%,
  32%,
  58%,
  84%,
  100% {
    transform: translate(0, 0);
    clip-path: inset(0 0 0 0);
  }
  16% {
    transform: translate(-4px, 2px);
    clip-path: inset(72% 0 4% 0);
  }
  17% {
    transform: translate(3px, -2px);
    clip-path: inset(16% 0 56% 0);
  }
  18% {
    transform: translate(-2px, 1px);
    clip-path: inset(42% 0 30% 0);
  }
  33% {
    transform: translate(4px, -1px);
    clip-path: inset(8% 0 72% 0);
  }
  34% {
    transform: translate(-3px, 0);
    clip-path: inset(52% 0 20% 0);
  }
  59% {
    transform: translate(-4px, -2px);
    clip-path: inset(64% 0 12% 0);
  }
  60% {
    transform: translate(2px, 1px);
    clip-path: inset(28% 0 40% 0);
  }
  85% {
    transform: translate(3px, -1px);
    clip-path: inset(12% 0 62% 0);
  }
  86% {
    transform: translate(-4px, 2px);
    clip-path: inset(46% 0 24% 0);
  }
}

@keyframes scanline-drift {
  0% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(20%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .profile-photo-glitch-cyan,
  .profile-photo-glitch-magenta,
  .profile-photo-scanline {
    animation: none;
  }
}
</style>
