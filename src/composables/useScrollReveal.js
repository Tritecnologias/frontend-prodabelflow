import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  const initScrollReveal = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          // Opcional: parar de observar após revelar
          // observer.unobserve(entry.target)
        }
      })
    }, options)

    // Observar todos os elementos com a classe scroll-reveal
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach(el => observer.observe(el))
  }

  onMounted(() => {
    // Pequeno delay para garantir que o DOM está pronto
    setTimeout(initScrollReveal, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollReveal
  }
}
