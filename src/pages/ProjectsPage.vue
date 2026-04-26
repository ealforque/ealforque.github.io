<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { timeline } from '@/content/timeline'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="container-page pb-24">
    <PageHeader
      eyebrow="Projects"
      title="Systems and Applications developed and shipped."
      subtitle="A decade-plus of software engineering work — distributed integrations, ETL and data pipelines, platform services, web and desktop applications, and open-source tooling delivered across multiple industries."
    />

    <div class="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="p in timeline"
        :key="p.id"
        class="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-glow"
      >
        <div class="relative">
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/80">
            Project {{ p.number }}
          </span>
          <h3 class="heading mt-3 text-xl">{{ p.title }}</h3>
          <p class="mt-1 text-xs text-ink-400">{{ p.org }}</p>
          <p class="mt-3 text-sm text-muted">{{ p.description }}</p>

          <div v-if="p.integrations && p.integrations.length" class="mt-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">
              Integrations
            </p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span
                v-for="i in p.integrations"
                :key="i"
                class="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-ink-100"
              >
                {{ i }}
              </span>
            </div>
          </div>

          <div class="mt-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">Stack</p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span v-for="t in p.stack" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>

          <div v-if="p.disciplines && p.disciplines.length" class="mt-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">
              Discipline
            </p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span
                v-for="d in p.disciplines"
                :key="d"
                class="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] text-accent"
              >
                {{ d }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
