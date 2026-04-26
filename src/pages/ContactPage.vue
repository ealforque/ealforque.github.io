<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import { profile } from '@/content/portfolio'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)

const valid = computed(
  () => name.value.trim().length > 1 && /\S+@\S+\.\S+/.test(email.value) && message.value.trim().length > 4
)

function submit() {
  if (!valid.value) return
  const subject = encodeURIComponent(`Portfolio inquiry from ${name.value}`)
  const body = encodeURIComponent(`${message.value}\n\n— ${name.value} (${email.value})`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  sent.value = true
}
</script>

<template>
  <section class="container-page pb-24">
    <PageHeader
      eyebrow="Contact"
      title="Let's talk."
      subtitle="The fastest way to reach me is email — or use the form below. I usually reply within a day or two."
    />

    <div class="mt-16 grid gap-10 md:grid-cols-12">
      <div class="reveal md:col-span-5 space-y-6">
        <div class="glass rounded-2xl p-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">Direct</p>
          <a
            :href="`mailto:${profile.email}`"
            class="heading mt-3 block text-2xl hover:text-accent transition"
          >
            {{ profile.email }}
          </a>
          <p class="mt-3 text-sm text-muted">Best for project inquiries and collaboration.</p>
        </div>

        <div class="glass rounded-2xl p-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">Elsewhere</p>
          <div class="mt-4 flex flex-wrap gap-3">
            <a :href="profile.socials.github" target="_blank" rel="noopener" class="btn-ghost">
              GitHub
            </a>
            <a :href="profile.socials.linkedin" target="_blank" rel="noopener" class="btn-ghost">
              LinkedIn
            </a>
            <a :href="profile.socials.npm" target="_blank" rel="noopener" class="btn-ghost">
              NPM
            </a>
          </div>
        </div>

        <div class="glass rounded-2xl p-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">Details</p>
          <dl class="mt-4 space-y-3 text-sm">
            <div class="flex items-baseline justify-between gap-6">
              <dt class="text-muted">Phone</dt>
              <dd>{{ profile.phone }}</dd>
            </div>
            <div class="flex items-baseline justify-between gap-6">
              <dt class="text-muted">Location</dt>
              <dd>{{ profile.location }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <form
        class="reveal md:col-span-7 glass rounded-2xl p-6 sm:p-8 space-y-5"
        @submit.prevent="submit"
      >
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">Name</span>
            <input
              v-model="name"
              type="text"
              required
              class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent/60 focus:bg-white/[0.07]"
              placeholder="Your name"
            />
          </label>
          <label class="block">
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">Email</span>
            <input
              v-model="email"
              type="email"
              required
              class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent/60 focus:bg-white/[0.07]"
              placeholder="you@domain.com"
            />
          </label>
        </div>

        <label class="block">
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">Message</span>
          <textarea
            v-model="message"
            rows="6"
            required
            class="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent/60 focus:bg-white/[0.07]"
            placeholder="Tell me a little about what you're building…"
          />
        </label>

        <div class="flex items-center justify-between gap-4 pt-2">
          <p v-if="sent" class="text-sm text-emerald-400">
            Thanks — opening your email client now.
          </p>
          <p v-else class="text-xs text-muted">
            Submitting opens your email client. No data is stored.
          </p>
          <button type="submit" class="btn-primary disabled:opacity-50" :disabled="!valid">
            Send
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
