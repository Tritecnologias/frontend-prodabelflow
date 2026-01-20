# 📁 Estrutura do Projeto

```
prodabelflow-vue/
│
├── 📄 index.html                 # HTML principal (entry point)
├── 📄 package.json               # Dependências e scripts
├── 📄 vite.config.js            # Configuração do Vite
├── 📄 .gitignore                # Arquivos ignorados pelo Git
│
├── 📚 Documentação
│   ├── README.md                # Documentação principal
│   ├── QUICK_START.md           # Guia de início rápido
│   ├── COMPONENT_GUIDE.md       # Guia de componentes
│   ├── COMPARISON.md            # Comparação Original vs Vue
│   ├── DEPLOY.md                # Guia de deploy
│   └── PROJECT_STRUCTURE.md     # Este arquivo
│
└── 📂 src/                      # Código fonte
    │
    ├── 📄 main.js               # Entry point JavaScript
    ├── 📄 App.vue               # Componente raiz
    │
    ├── 📂 assets/               # Assets estáticos
    │   └── 📂 styles/
    │       └── 📄 main.css      # Estilos globais e variáveis
    │
    └── 📂 components/           # Componentes Vue
        ├── 📄 BackgroundEffects.vue    # Blobs de gradiente
        ├── 📄 Navbar.vue               # Navegação
        ├── 📄 HeroSection.vue          # Seção hero
        ├── 📄 IngestionSection.vue     # Motor de ingestão
        ├── 📄 CollaborationSection.vue # Perfis de colaboração
        ├── 📄 ValuePortalSection.vue   # Portal de valor
        ├── 📄 GovernanceSection.vue    # Governança
        ├── 📄 CompetitiveSection.vue   # Análise competitiva
        └── 📄 Footer.vue               # Rodapé
```

## 📄 Descrição dos Arquivos

### Raiz do Projeto

#### `index.html`
- HTML principal da aplicação
- Carrega fontes do Google (Plus Jakarta Sans, Material Icons)
- Ponto de entrada para o Vite
- Meta tags para SEO e responsividade

#### `package.json`
```json
{
  "name": "prodabelflow-vue",
  "version": "2.0.0",
  "scripts": {
    "dev": "vite",           // Servidor de desenvolvimento
    "build": "vite build",   // Build de produção
    "preview": "vite preview" // Preview da build
  },
  "dependencies": {
    "vue": "^3.4.0",         // Framework Vue.js
    "bootstrap": "^5.3.2"    // Framework CSS
  }
}
```

#### `vite.config.js`
- Configuração do bundler Vite
- Plugin Vue
- Otimizações de build

#### `.gitignore`
- Ignora node_modules, dist, arquivos de editor
- Mantém repositório limpo

---

### 📂 src/

#### `main.js`
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'

createApp(App).mount('#app')
```

**Responsabilidades**:
- Importa Vue e Bootstrap
- Importa estilos globais
- Monta a aplicação no DOM

#### `App.vue`
```vue
<template>
  <div class="app-wrapper">
    <BackgroundEffects />
    <Navbar />
    <HeroSection />
    <!-- ... outros componentes -->
  </div>
</template>
```

**Responsabilidades**:
- Componente raiz
- Organiza layout geral
- Importa todos os componentes de seção

---

### 📂 src/assets/styles/

#### `main.css`
**Conteúdo**:
- ✅ Variáveis CSS (cores, tamanhos)
- ✅ Reset e estilos base
- ✅ Utilitários globais
- ✅ Classes de efeitos (glass-panel, text-gradient)
- ✅ Animações keyframes
- ✅ Scrollbar customizada

**Variáveis Principais**:
```css
:root {
  --primary: #6366f1;
  --accent-green: #34d399;
  --accent-blue: #60a5fa;
  --slate-950: #020617;
  /* ... */
}
```

---

### 📂 src/components/

#### `BackgroundEffects.vue` (150 linhas)
**Função**: Blobs de gradiente animados no fundo

**Elementos**:
- 3 divs com gradientes radiais
- Posicionamento absoluto
- Blur e mix-blend-mode
- Cores: indigo, blue, slate

**Estilos**:
- Fixed positioning
- Z-index negativo
- Pointer-events: none

---

#### `Navbar.vue` (200 linhas)
**Função**: Barra de navegação fixa

**Elementos**:
- Logo com ícone e texto
- Links de navegação (desktop)
- Botões "Entrar" e "Começar Agora"
- Glass panel effect

**Responsividade**:
- Mobile: Logo + botão principal
- Desktop: Logo + links + botões

**Estilos**:
- Fixed top
- Glassmorphism
- Hover effects
- Shadow glow no botão

---

#### `HeroSection.vue` (600 linhas)
**Função**: Seção principal com visual 3D

**Elementos Esquerda**:
- Badge com pulse dot
- Título com gradient
- Descrição
- 2 botões de ação

**Elementos Direita**:
- Card 3D interativo
- Flow diagram (doc → IA → code)
- Content area com blocks
- Status badge "Sincronizado"

**Animações**:
- Pulse no badge
- Hover no card (rotação)
- Connector icon pulsando
- Progress bars

**Responsividade**:
- Mobile: Stack vertical
- Desktop: 2 colunas

---

#### `IngestionSection.vue` (300 linhas)
**Função**: Motor de ingestão IA

**Elementos**:
- Título e descrição centralizados
- 3 cards horizontais
- Card central destacado (featured)
- Linha conectora (desktop)

**Cards**:
1. **Documentos Word**: Ícone description, cor azul
2. **Motor de IA**: Ícone psychology_alt, destaque cyan
3. **Git Issues**: Ícone dataset_linked, cor roxa

**Efeitos**:
- Hover lift nos cards
- Glow no card featured
- Pulse no ícone IA

---

#### `CollaborationSection.vue` (400 linhas)
**Função**: Perfis de colaboração

**Elementos**:
- 4 cards de perfis
- Cada card com ícone, badge, título, descrição
- Progress bar animada

**Perfis**:
1. **Desenvolvedores**: Terminal, verde, 75%
2. **Arquitetos**: Architecture, azul, 50%
3. **Eng. Requisitos**: Assignment, amarelo, 85%
4. **Testers**: Bug report, roxo, 66%

**Interações**:
- Hover muda border color
- Progress bar anima no hover

**Responsividade**:
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 4 colunas

---

#### `ValuePortalSection.vue` (700 linhas)
**Função**: Portal de entrega de valor

**Lado Esquerdo** (Visual):
- Dashboard card com glass effect
- Header com status online
- 2 métricas (Entregas 85%, Valor High)
- 3 tasks com status (Concluído, Em Teste, Backlog)

**Lado Direito** (Conteúdo):
- Badge "PORTAL CLIENTE / PO"
- Título com gradient
- Descrição
- 3 features com ícones

**Dados Reativos**:
```javascript
data() {
  return {
    tasks: [...],
    features: [...]
  }
}
```

**Efeitos**:
- Glow no visual
- Hover nos ícones
- Pulse no status dot

---

#### `GovernanceSection.vue` (500 linhas)
**Função**: Governança e terminal

**Lado Esquerdo**:
- Badge "MÓDULO DE GOVERNANÇA"
- Título e descrição
- 2 features com ícones

**Lado Direito**:
- Terminal window realista
- Header com dots (red, yellow, green)
- Body com comandos
- JSON syntax highlighting
- Output colorido

**Cores do Terminal**:
- Prompt: verde
- Path: azul
- Command: branco
- JSON keys: azul
- JSON values: verde
- JSON brackets: roxo

**Efeitos**:
- Grid background
- Monospace font
- Syntax colors

---

#### `CompetitiveSection.vue` (600 linhas)
**Função**: Análise competitiva

**Lado Esquerdo**:
- Tabela comparativa
- 5 colunas (Recurso + 4 produtos)
- Coluna ProdabelFlow destacada
- Ícones check/cancel

**Lado Direito**:
- Gráfico scatter plot
- Eixos X (Valor Técnico) e Y (ROI)
- 3 pontos: Legado, Ferramentas, ProdabelFlow
- Labels no hover

**Dados Reativos**:
```javascript
data() {
  return {
    comparisonFeatures: [
      { name: '...', prodabel: true, lucid: false, ... }
    ]
  }
}
```

**Interações**:
- Hover nos pontos do gráfico
- Scale up no hover
- Labels aparecem

---

#### `Footer.vue` (400 linhas)
**Função**: Rodapé com CTA

**Seções**:
1. **CTA Banner**:
   - Badge ROI
   - Título e descrição
   - 2 botões de ação
   - Gradient background

2. **Footer Content**:
   - Logo e descrição
   - 3 colunas de links (Produto, Empresa, Legal)

3. **Footer Bottom**:
   - Copyright

**Efeitos**:
- Glow no banner
- Hover nos links
- Gradient background

---

## 🎨 Fluxo de Estilos

### Cascata de Estilos

```
1. Bootstrap (base)
   ↓
2. main.css (variáveis e globais)
   ↓
3. Component <style scoped> (específicos)
```

### Variáveis CSS Globais

Definidas em `main.css`, usadas em todos os componentes:

```css
/* Componente usa: */
.my-element {
  color: var(--primary);
  background: var(--slate-900);
}
```

### Scoped Styles

Cada componente tem estilos isolados:

```vue
<style scoped>
/* Estes estilos só afetam este componente */
.card { ... }
</style>
```

---

## 🔄 Fluxo de Dados

### Props (Pai → Filho)

```vue
<!-- App.vue -->
<MyComponent title="Título" :count="10" />

<!-- MyComponent.vue -->
<script>
export default {
  props: {
    title: String,
    count: Number
  }
}
</script>
```

### Data (Estado Local)

```vue
<script>
export default {
  data() {
    return {
      items: [],
      isActive: false
    }
  }
}
</script>
```

### Computed (Valores Derivados)

```vue
<script>
export default {
  computed: {
    filteredItems() {
      return this.items.filter(item => item.active)
    }
  }
}
</script>
```

---

## 📦 Build Output

Após `npm run build`:

```
dist/
├── index.html           # HTML otimizado
├── assets/
│   ├── index-[hash].js  # JavaScript minificado
│   ├── index-[hash].css # CSS minificado
│   └── [fonts/icons]    # Assets
```

**Otimizações**:
- Minificação
- Tree shaking
- Code splitting
- Hash nos nomes (cache busting)
- Gzip/Brotli ready

---

## 🎯 Pontos de Entrada

### Desenvolvimento
```
index.html → src/main.js → App.vue → Components
```

### Produção
```
dist/index.html → dist/assets/index-[hash].js
```

---

## 📊 Tamanhos Aproximados

| Arquivo | Linhas | Tamanho |
|---------|--------|---------|
| main.css | 150 | 4KB |
| BackgroundEffects.vue | 80 | 2KB |
| Navbar.vue | 200 | 5KB |
| HeroSection.vue | 600 | 15KB |
| IngestionSection.vue | 300 | 8KB |
| CollaborationSection.vue | 400 | 10KB |
| ValuePortalSection.vue | 700 | 18KB |
| GovernanceSection.vue | 500 | 13KB |
| CompetitiveSection.vue | 600 | 15KB |
| Footer.vue | 400 | 10KB |
| **Total** | **~4000** | **~100KB** |

**Build otimizado**: ~170KB (gzipped)

---

## 🚀 Performance

### Lighthouse Scores (Target)

```
Performance:    95+
Accessibility:  95+
Best Practices: 95+
SEO:           95+
```

### Otimizações Aplicadas

- ✅ CSS customizado (não Tailwind CDN)
- ✅ Componentes modulares
- ✅ Lazy loading ready
- ✅ Tree shaking
- ✅ Code splitting
- ✅ Minificação
- ✅ Gzip compression

---

**Estrutura completa e otimizada!** 🎉

Cada arquivo tem um propósito claro e contribui para a performance e manutenibilidade do projeto.
