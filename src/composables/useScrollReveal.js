import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  const initScrollReveal = () => {
    // Desconectar observer anterior se existir
    if (observer) {
      observer.disconnect()
    }

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

    // Re-observar elementos quando o tema mudar
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const html = document.documentElement
          if (html.classList.contains('light') || html.classList.contains('dark')) {
            // Tema mudou, re-inicializar scroll reveal
            setTimeout(initScrollReveal, 50)
          }
        }
      })
    })

    // Observar mudanças na classe do elemento html
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
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
