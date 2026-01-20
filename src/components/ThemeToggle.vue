<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
    :title="isDark ? 'Modo Claro' : 'Modo Escuro'"
  >
    <transition name="icon-fade" mode="out-in">
      <span v-if="isDark" key="sun" class="material-symbols-outlined icon">
        light_mode
      </span>
      <span v-else key="moon" class="material-symbols-outlined icon">
        dark_mode
      </span>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDark: true
    }
  },
  mounted() {
    // Verificar preferência salva ou preferência do sistema
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      this.isDark = savedTheme === 'dark'
    } else {
      this.isDark = prefersDark
    }
    
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.applyTheme()
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.theme-toggle:hover {
  background: var(--bg-card-hover);
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.theme-toggle:active {
  transform: translateY(0);
}

.icon {
  font-size: 1.25rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.theme-toggle:hover .icon {
  color: var(--primary);
}

/* Animação de transição dos ícones */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.icon-fade-enter-to,
.icon-fade-leave-from {
  opacity: 1;
  transform: rotate(0) scale(1);
}

/* Efeito de glow no hover */
.theme-toggle::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, var(--primary), var(--accent-cyan));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  filter: blur(8px);
}

.theme-toggle:hover::before {
  opacity: 0.3;
}

/* Responsividade */
@media (max-width: 640px) {
  .theme-toggle {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .icon {
    font-size: 1.125rem;
  }
}
</style>
