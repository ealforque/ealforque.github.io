<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { experience } from '@/content/portfolio'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="container-page pb-24">
    <PageHeader
      eyebrow="Experience"
      title="A decade of shipping systems that compound."
      subtitle="Production work across integrations, platform services, and full-stack product engineering — the teams I built with and the architectural lessons that still shape every commit."
    />

    <ol class="relative mt-20">
      <span
        class="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2"
        aria-hidden="true"
      />

      <li
        v-for="(item, i) in experience"
        :key="item.company + item.role"
        class="reveal relative mb-16 last:mb-0 md:grid md:grid-cols-2 md:gap-10"
      >
        <span
          class="absolute left-2 top-3 grid h-3 w-3 place-items-center rounded-full bg-accent shadow-glow md:left-[calc(50%-6px)]"
          aria-hidden="true"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-white/90" />
        </span>

        <div :class="i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'">
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">
            {{ item.duration }}
          </p>
          <h3 class="heading mt-2 text-2xl">{{ item.role }}</h3>
          <p class="mt-1 text-ink-300">
            {{ item.company }} <span class="text-muted">· {{ item.location }}</span>
          </p>
        </div>

        <div
          :class="i % 2 === 0 ? 'mt-6 md:mt-0 md:pl-12' : 'mt-6 md:mt-0 md:order-1 md:pr-12 md:text-right'"
        >
          <div class="glass rounded-2xl p-6">
            <ul class="space-y-3 text-sm text-ink-200">
              <li
                v-for="a in item.achievements"
                :key="a"
                class="flex gap-3 text-left"
              >
                <span class="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
                <span>{{ a }}</span>
              </li>
            </ul>
            <div class="mt-5 flex flex-wrap gap-1.5">
              <span v-for="t in item.stack" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
