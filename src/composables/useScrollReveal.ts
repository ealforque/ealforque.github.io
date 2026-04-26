import { onMounted, onBeforeUnmount } from 'vue'

/**
 * IntersectionObserver-driven scroll reveal.
 * Targets all elements matching `.reveal` within the document and adds `is-visible` class.
 */
export function useScrollReveal(selector = '.reveal', options: IntersectionObserverInit = {}) {
  let observer: IntersectionObserver | null = null

  const wire = () => {
    if (typeof IntersectionObserver === 'undefined') return
    observer?.disconnect()
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    )
    document.querySelectorAll(selector).forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${Math.min(i * 60, 480)}ms`
      observer!.observe(el)
    })
  }

  onMounted(() => {
    // Wait a frame to ensure DOM has rendered
    requestAnimationFrame(wire)
  })
  onBeforeUnmount(() => observer?.disconnect())

  return { rewire: wire }
}
