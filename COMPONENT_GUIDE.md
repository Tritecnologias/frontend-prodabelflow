# 📘 Guia de Componentes

## Como Criar um Novo Componente

### 1. Estrutura Básica

Crie um arquivo `.vue` em `src/components/`:

```vue
<template>
  <section class="my-section">
    <div class="container">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      default: 'Título Padrão'
    }
  },
  data() {
    return {
      description: 'Minha descrição'
    }
  }
}
</script>

<style scoped>
.my-section {
  padding: 5rem 0;
  background: var(--slate-900);
}
</style>
```

### 2. Importar no App.vue

```vue
<script>
import MyComponent from './components/MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}
</script>

<template>
  <MyComponent title="Meu Título Customizado" />
</template>
```

## 🎨 Padrões de Design

### Glassmorphism Card

```vue
<div class="glass-card">
  <h3>Conteúdo</h3>
</div>

<style scoped>
.glass-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
}
</style>
```

### Icon com Glow

```vue
<div class="icon-glow">
  <span class="material-symbols-outlined">star</span>
</div>

<style scoped>
.icon-glow {
  width: 3rem;
  height: 3rem;
  background: var(--primary);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
}
</style>
```

### Gradient Text

```vue
<h2 class="gradient-text">Texto com Gradiente</h2>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #818cf8 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
```

### Animated Progress Bar

```vue
<div class="progress-container">
  <div class="progress-bar" :style="{ width: progress + '%' }"></div>
</div>

<script>
export default {
  data() {
    return {
      progress: 75
    }
  }
}
</script>

<style scoped>
.progress-container {
  height: 0.5rem;
  background: var(--slate-800);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--accent-green);
  border-radius: 9999px;
  transition: width 1s ease;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.8);
}
</style>
```

## 🔄 Componentes Reutilizáveis

### Card Component

```vue
<!-- src/components/shared/Card.vue -->
<template>
  <div class="custom-card" :class="variant">
    <div v-if="icon" class="card-icon" :class="`bg-${color}`">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </div>
    <h3 v-if="title" class="card-title">{{ title }}</h3>
    <p v-if="description" class="card-description">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    icon: String,
    title: String,
    description: String,
    color: {
      type: String,
      default: 'blue'
    },
    variant: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped>
.custom-card {
  background: var(--slate-900);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-4px);
}

.custom-card.featured {
  border-color: var(--primary);
  box-shadow: 0 0 30px -5px rgba(99, 102, 241, 0.3);
}

.card-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.card-icon.bg-blue {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-blue);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.card-icon.bg-green {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.card-description {
  color: var(--slate-400);
  font-size: 0.875rem;
}
</style>
```

### Uso do Card

```vue
<Card 
  icon="rocket_launch"
  title="Meu Card"
  description="Descrição do card"
  color="blue"
  variant="featured"
/>
```

## 🎯 Bootstrap Grid

### Layout Responsivo

```vue
<div class="container">
  <div class="row g-4">
    <!-- Mobile: 1 coluna, Tablet: 2 colunas, Desktop: 4 colunas -->
    <div class="col-12 col-md-6 col-lg-3">
      <Card />
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      <Card />
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      <Card />
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      <Card />
    </div>
  </div>
</div>
```

### Breakpoints Bootstrap

- `col-` → < 576px (mobile)
- `col-sm-` → ≥ 576px
- `col-md-` → ≥ 768px (tablet)
- `col-lg-` → ≥ 992px (desktop)
- `col-xl-` → ≥ 1200px
- `col-xxl-` → ≥ 1400px

## 🎨 Utilitários CSS Disponíveis

### Espaçamento
```html
<div class="mb-4">Margin bottom</div>
<div class="p-3">Padding all sides</div>
<div class="mt-5 mb-3">Multiple utilities</div>
```

### Display
```html
<div class="d-none d-md-block">Visível apenas em tablet+</div>
<div class="d-flex justify-content-between">Flexbox</div>
```

### Cores Customizadas
```css
color: var(--primary);
color: var(--accent-green);
color: var(--slate-400);
background: var(--slate-900);
```

## 🔥 Animações

### Pulse Animation

```vue
<div class="pulse-element">Pulsando</div>

<style scoped>
.pulse-element {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
```

### Hover Lift

```vue
<div class="hover-lift">Levanta no hover</div>

<style scoped>
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
}
</style>
```

## 📱 Responsividade

### Media Queries

```css
/* Mobile first */
.my-element {
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .my-element {
    font-size: 1.25rem;
  }
}

/* Desktop */
@media (min-width: 992px) {
  .my-element {
    font-size: 1.5rem;
  }
}
```

## 🎭 Transições Vue

```vue
<template>
  <transition name="fade">
    <div v-if="show">Conteúdo</div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
```

## 💡 Dicas Avançadas

1. **Scoped Styles**: Use `<style scoped>` para isolar estilos
2. **Props Validation**: Sempre valide props para evitar bugs
3. **Computed Properties**: Use para valores derivados
4. **Watchers**: Para reagir a mudanças de dados
5. **Lifecycle Hooks**: mounted, created, etc.

## 🚀 Performance

- Use `v-show` para elementos que alternam frequentemente
- Use `v-if` para renderização condicional
- Lazy load componentes pesados
- Otimize imagens e assets
- Minimize re-renders desnecessários

---

**Happy Coding!** 🎨✨
