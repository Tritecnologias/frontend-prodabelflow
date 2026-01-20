# 🎨 Guia de Customização

## Mudando Cores

### Paleta Principal

Edite `src/assets/styles/main.css`:

```css
:root {
  /* Cor primária (botões, destaques) */
  --primary: #6366f1;        /* Mude para sua cor */
  --primary-hover: #4f46e5;  /* Tom mais escuro */
  --primary-light: #818cf8;  /* Tom mais claro */
  
  /* Cores de acento */
  --accent-green: #34d399;   /* Verde */
  --accent-blue: #60a5fa;    /* Azul */
  --accent-yellow: #fbbf24;  /* Amarelo */
  --accent-purple: #c084fc;  /* Roxo */
  --accent-cyan: #22d3ee;    /* Ciano */
  
  /* Background */
  --slate-950: #020617;      /* Fundo principal */
  --slate-900: #0f172a;      /* Cards */
  --slate-800: #1e293b;      /* Elementos */
}
```

### Exemplo: Tema Verde

```css
:root {
  --primary: #10b981;        /* Emerald 500 */
  --primary-hover: #059669;  /* Emerald 600 */
  --primary-light: #34d399;  /* Emerald 400 */
}
```

### Exemplo: Tema Roxo

```css
:root {
  --primary: #a855f7;        /* Purple 500 */
  --primary-hover: #9333ea;  /* Purple 600 */
  --primary-light: #c084fc;  /* Purple 400 */
}
```

---

## Mudando Fontes

### Fonte Principal

1. Escolha uma fonte no [Google Fonts](https://fonts.google.com)

2. Adicione no `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200..800&display=swap" rel="stylesheet">
```

3. Atualize `main.css`:
```css
body {
  font-family: 'Inter', sans-serif;
}
```

### Fontes Recomendadas

- **Inter**: Moderna e legível
- **Poppins**: Arredondada e amigável
- **Montserrat**: Geométrica e elegante
- **Roboto**: Clássica e versátil
- **Space Grotesk**: Tech e futurista

---

## Mudando Conteúdo

### Textos do Hero

Edite `src/components/HeroSection.vue`:

```vue
<script>
export default {
  data() {
    return {
      badge: 'v2.0 Disponível',
      title: 'Seu Título',
      subtitle: 'Architect 360°',
      description: 'Sua descrição aqui',
      primaryButton: 'Começar',
      secondaryButton: 'Ver Demo'
    }
  }
}
</script>

<template>
  <div class="badge-version">{{ badge }}</div>
  <h1 class="hero-title">
    <span class="text-gradient">{{ title }}</span><br/>
    {{ subtitle }}
  </h1>
  <p class="hero-description">{{ description }}</p>
</template>
```

### Logo e Nome

Edite `src/components/Navbar.vue`:

```vue
<div class="navbar-brand">
  <div class="brand-icon">
    <span class="material-symbols-outlined">seu_icone</span>
  </div>
  <span class="brand-text">Seu Nome</span>
</div>
```

**Ícones disponíveis**: [Material Symbols](https://fonts.google.com/icons)

---

## Adicionando Seções

### 1. Criar Componente

`src/components/MyNewSection.vue`:

```vue
<template>
  <section class="my-section">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-description">{{ description }}</p>
      
      <div class="row g-4">
        <div class="col-md-4" v-for="item in items" :key="item.id">
          <div class="card-custom">
            <div class="card-icon">
              <span class="material-symbols-outlined">{{ item.icon }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyNewSection',
  data() {
    return {
      title: 'Minha Nova Seção',
      description: 'Descrição da seção',
      items: [
        {
          id: 1,
          icon: 'star',
          title: 'Item 1',
          description: 'Descrição do item 1'
        },
        {
          id: 2,
          icon: 'favorite',
          title: 'Item 2',
          description: 'Descrição do item 2'
        },
        {
          id: 3,
          icon: 'thumb_up',
          title: 'Item 3',
          description: 'Descrição do item 3'
        }
      ]
    }
  }
}
</script>

<style scoped>
.my-section {
  padding: 5rem 0;
  background: var(--slate-900);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  color: var(--slate-400);
  margin-bottom: 3rem;
}

.card-custom {
  background: var(--slate-950);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.card-custom:hover {
  transform: translateY(-4px);
}

.card-icon {
  width: 3rem;
  height: 3rem;
  background: var(--primary);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
}

.card-custom h3 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-custom p {
  color: var(--slate-400);
  font-size: 0.875rem;
}
</style>
```

### 2. Importar no App.vue

```vue
<script>
import MyNewSection from './components/MyNewSection.vue'

export default {
  components: {
    MyNewSection
  }
}
</script>

<template>
  <div class="app-wrapper">
    <BackgroundEffects />
    <Navbar />
    <HeroSection />
    <MyNewSection />  <!-- Nova seção aqui -->
    <IngestionSection />
    <!-- ... -->
  </div>
</template>
```

---

## Mudando Layout

### Grid Responsivo

```vue
<!-- 1 coluna mobile, 2 tablet, 3 desktop -->
<div class="row g-4">
  <div class="col-12 col-md-6 col-lg-4">
    <Card />
  </div>
</div>

<!-- 1 coluna mobile, 2 desktop -->
<div class="row g-4">
  <div class="col-12 col-lg-6">
    <Card />
  </div>
</div>

<!-- 2 colunas sempre -->
<div class="row g-4">
  <div class="col-6">
    <Card />
  </div>
</div>
```

### Espaçamento

```vue
<!-- Padding -->
<div class="p-3">Padding pequeno</div>
<div class="p-5">Padding grande</div>

<!-- Margin -->
<div class="mb-4">Margin bottom</div>
<div class="mt-5">Margin top</div>

<!-- Combinado -->
<div class="py-5 px-3">Padding vertical 5, horizontal 3</div>
```

---

## Animações Customizadas

### Fade In

```vue
<template>
  <div class="fade-in">Conteúdo</div>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
```

### Slide In

```vue
<style scoped>
.slide-in {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
```

### Bounce

```vue
<style scoped>
.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
```

---

## Efeitos Visuais

### Glassmorphism Customizado

```css
.glass-custom {
  background: rgba(15, 23, 42, 0.7);  /* Opacidade */
  backdrop-filter: blur(20px);         /* Blur */
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

### Glow Effect Customizado

```css
.glow-custom {
  box-shadow: 
    0 0 20px rgba(99, 102, 241, 0.5),
    0 0 40px rgba(99, 102, 241, 0.3),
    0 0 60px rgba(99, 102, 241, 0.1);
}
```

### Gradient Background

```css
.gradient-bg {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
}
```

---

## Responsividade

### Breakpoints Customizados

```css
/* Mobile */
@media (max-width: 767px) {
  .my-element {
    font-size: 1rem;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
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

### Ocultar/Mostrar por Tamanho

```vue
<!-- Visível apenas em mobile -->
<div class="d-block d-md-none">Mobile</div>

<!-- Visível apenas em desktop -->
<div class="d-none d-md-block">Desktop</div>

<!-- Visível em tablet e desktop -->
<div class="d-none d-md-block">Tablet+</div>
```

---

## Imagens e Assets

### Adicionar Logo

1. Coloque a imagem em `src/assets/`
2. Importe no componente:

```vue
<script>
import logo from '@/assets/logo.png'

export default {
  data() {
    return {
      logoUrl: logo
    }
  }
}
</script>

<template>
  <img :src="logoUrl" alt="Logo" class="logo" />
</template>

<style scoped>
.logo {
  width: 150px;
  height: auto;
}
</style>
```

### Background Image

```css
.hero-bg {
  background-image: url('@/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## Integrações

### Adicionar Analytics

`index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Adicionar Chat (Intercom, Drift, etc.)

`index.html`:
```html
<script>
  // Código do chat aqui
</script>
```

### Conectar API

```vue
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    const response = await fetch('https://api.example.com/items')
    this.items = await response.json()
  }
}
</script>
```

---

## Temas Alternativos

### Tema Claro

```css
:root {
  --primary: #3b82f6;
  --slate-950: #ffffff;
  --slate-900: #f8fafc;
  --slate-800: #f1f5f9;
  --slate-700: #e2e8f0;
  --slate-400: #64748b;
  --slate-300: #94a3b8;
}

body {
  color: #0f172a;
}
```

### Tema Neon

```css
:root {
  --primary: #ff00ff;
  --accent-green: #00ff00;
  --accent-blue: #00ffff;
  --accent-yellow: #ffff00;
  --slate-950: #000000;
}
```

---

## Dicas de Performance

### Lazy Load Componentes

```vue
<script>
export default {
  components: {
    HeavyComponent: () => import('./HeavyComponent.vue')
  }
}
</script>
```

### Otimizar Imagens

```bash
# Instalar imagemin
npm i -D vite-plugin-imagemin

# vite.config.js
import imagemin from 'vite-plugin-imagemin'

export default {
  plugins: [
    vue(),
    imagemin()
  ]
}
```

---

## Checklist de Customização

- [ ] Cores alteradas
- [ ] Fontes escolhidas
- [ ] Logo adicionado
- [ ] Conteúdo atualizado
- [ ] Seções customizadas
- [ ] Animações ajustadas
- [ ] Responsividade testada
- [ ] Performance verificada
- [ ] Analytics configurado
- [ ] SEO otimizado

---

**Personalize à vontade!** 🎨✨

O projeto foi construído para ser facilmente customizável mantendo a qualidade do código.
