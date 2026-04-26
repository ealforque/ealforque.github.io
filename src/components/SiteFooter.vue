<script setup lang="ts">
import { profile } from '@/content/portfolio'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 mt-32 border-t border-white/5">
    <div class="container-page py-12">
      <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="heading text-2xl">Let's build something quietly excellent.</p>
          <p class="mt-1 text-sm text-muted">
            Building software at scale from Queensland, Australia
          </p>
        </div>
        <div class="flex items-center gap-3">
          <a :href="`mailto:${profile.email}`" class="btn-ghost ui-weld">Email me</a>
          <a :href="profile.socials.linkedin" target="_blank" rel="noopener" class="btn-ghost ui-weld">LinkedIn</a>
        </div>
      </div>
      <div class="divider mt-10" />
      <div class="mt-6 flex flex-col gap-2 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <span>© {{ year }} {{ profile.name }} · Designed & engineered with care.</span>
        <span class="font-mono">v1.0</span>
      </div>
    </div>
  </footer>
</template>
