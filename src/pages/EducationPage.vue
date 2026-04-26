<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { education } from '@/content/portfolio'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="container-page pb-24">
    <PageHeader
      eyebrow="Education"
      title="Foundations + continuous study."
      subtitle="A formal CS foundation reinforced by years of self-directed engineering practice — published packages, reference architectures, and the quiet TDD discipline that keeps systems honest."
    />

    <div class="mt-16 grid gap-6 md:grid-cols-2">
      <article
        v-for="e in education"
        :key="e.institution + e.credential"
        class="reveal ui-weld group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20"
      >
        <div
          class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl transition group-hover:bg-accent/25"
        />
        <div class="relative">
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">
            {{ e.duration }}
          </p>
          <h3 class="heading mt-3 text-xl">{{ e.institution }}</h3>
          <p class="mt-1 text-ink-300">{{ e.credential }}</p>
          <p class="mt-4 text-sm text-muted">{{ e.detail }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
