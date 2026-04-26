<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { profile, strengths, personalProjects, techStack } from '@/content/portfolio'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="container-page pb-24">
    <PageHeader
      eyebrow="About"
      title="Building pragmatic systems that endure."
      subtitle="Full stack software engineer focused on designing and delivering scalable systems that support long-term operational and business needs."
    />

    <div class="reveal mt-16 grid gap-12 md:grid-cols-12">
      <div class="md:col-span-7 space-y-6 text-ink-200 leading-relaxed">
        <p>
          Software engineer focused on designing, building, and operating production systems across fintech, e-commerce, healthcare, sustainability, and field operations. Works primarily in small-to-mid enterprise environments where engineering decisions directly impact revenue, operations, and team velocity.
        </p>
        <p>
          Specializes in integration- and platform-oriented systems, including distributed ETL pipelines, event-driven webhook architectures, API gateways, and authentication services. Applies TDD and DDD with clear repository and service boundaries to produce systems that are observable, testable, and maintainable under continuous change.
        </p>
        <p>
          Delivers systems through well-defined CI/CD pipelines, enabling consistent, reliable releases from development through to production. Brings a product-aware engineering approach shaped by close collaboration with stakeholders across requirements, UAT, and delivery—prioritizing clear contracts, deliberate handling of edge cases, and avoiding unnecessary abstraction.
        </p>
      </div>

      <aside class="md:col-span-5">
        <div class="ui-weld glass rounded-2xl p-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">Quick facts</p>
          <dl class="mt-5 space-y-4 text-sm">
            <div class="flex items-baseline justify-between gap-6">
              <dt class="text-muted">Based in</dt>
              <dd>{{ profile.location }}</dd>
            </div>
            <div class="flex items-baseline justify-between gap-6">
              <dt class="text-muted">Working in</dt>
              <dd>Node · TS · Vue · MySQL · Azure</dd>
            </div>
            <div class="flex items-baseline justify-between gap-6">
              <dt class="text-muted">Currently</dt>
              <dd>Full Stack Dev @ GemLife</dd>
            </div>
            <div class="flex items-baseline justify-between gap-6">
              <dt class="text-muted">Open to</dt>
              <dd>Integrations · Platform · IC</dd>
            </div>
          </dl>
        </div>
      </aside>
    </div>

    <div class="reveal mt-24">
      <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">Principles</p>
      <h2 class="heading mt-3 text-3xl sm:text-4xl">What I optimize for</h2>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <div
          v-for="s in strengths"
          :key="s.title"
          class="reveal ui-weld rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <h3 class="heading text-lg">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-muted">{{ s.body }}</p>
        </div>
      </div>
    </div>

    <div class="reveal mt-24">
      <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">Tech stack</p>
      <h2 class="heading mt-3 text-3xl sm:text-4xl">What I reach for</h2>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(items, group) in techStack"
          :key="group"
          class="reveal ui-weld rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-400">
            {{ group }}
          </p>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span v-for="t in items" :key="t" class="chip">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="reveal mt-24">
      <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">
        Open source & side projects
      </p>
      <h2 class="heading mt-3 text-3xl sm:text-4xl">Things I've built off the clock</h2>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="p in personalProjects"
          :key="p.name"
          :href="p.link || '#'"
          :target="p.link ? '_blank' : undefined"
          :rel="p.link ? 'noopener noreferrer' : undefined"
          class="ui-weld group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-glow"
        >
          <h3 class="heading text-lg">{{ p.name }}</h3>
          <p class="mt-2 text-sm text-muted">{{ p.purpose }}</p>
          <p v-if="p.meta" class="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-accent/70">
            {{ p.meta }}
          </p>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span v-for="t in p.stack" :key="t" class="chip">{{ t }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
