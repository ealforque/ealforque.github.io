import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Custom cursor.
 * Uses translate(x, y) translate(-50%, -50%) so the element stays centered
 * on the actual mouse position regardless of size changes during hover.
 * Disabled on touch / coarse-pointer devices.
 */
export function useCursor() {
  let dot: HTMLElement | null = null
  let ring: HTMLElement | null = null
  let mouseX = -100
  let mouseY = -100
  let ringX = mouseX
  let ringY = mouseY
  let raf = 0
  let started = false

  const setDotPos = (x: number, y: number) => {
    if (dot) dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
  }
  const setRingPos = (x: number, y: number) => {
    if (ring) ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
  }

  const onMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
    setDotPos(mouseX, mouseY)
    document.documentElement.style.setProperty('--x', `${mouseX}px`)
    document.documentElement.style.setProperty('--y', `${mouseY}px`)
    if (!started) {
      started = true
      ringX = mouseX
      ringY = mouseY
      setRingPos(ringX, ringY)
    }
  }

  const onOver = (e: MouseEvent) => {
    const t = e.target as HTMLElement | null
    const interactive = !!t?.closest('a, button, [data-cursor="hover"]')
    ring?.classList.toggle('is-hover', interactive)
    dot?.classList.toggle('is-hover', interactive)
  }

  const tick = () => {
    ringX += (mouseX - ringX) * 0.18
    ringY += (mouseY - ringY) * 0.18
    setRingPos(ringX, ringY)
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    dot = document.createElement('div')
    dot.className = 'cursor-dot'
    dot.setAttribute('aria-hidden', 'true')
    ring = document.createElement('div')
    ring.className = 'cursor-ring'
    ring.setAttribute('aria-hidden', 'true')
    document.body.append(dot, ring)

    setDotPos(mouseX, mouseY)
    setRingPos(mouseX, mouseY)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(tick)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseover', onOver)
    dot?.remove()
    ring?.remove()
    dot = null
    ring = null
  })
}
