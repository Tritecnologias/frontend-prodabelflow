# ProdabelFlow Architect 360° - Vue.js + Bootstrap

Versão Vue.js do ProdabelFlow mantendo 100% da estética visual do design original.

## 🚀 Tecnologias

- **Vue.js 3** - Framework JavaScript progressivo
- **Bootstrap 5** - Framework CSS para grid e componentes base
- **Vite** - Build tool moderna e rápida
- **CSS Customizado** - Efeitos glassmorphism, gradientes e animações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🎨 Estrutura do Projeto

```
src/
├── assets/
│   └── styles/
│       └── main.css          # Estilos globais e variáveis CSS
├── components/
│   ├── BackgroundEffects.vue # Blobs de gradiente de fundo
│   ├── Navbar.vue            # Barra de navegação
│   ├── HeroSection.vue       # Seção hero com animação
│   ├── IngestionSection.vue  # Motor de ingestão IA
│   ├── CollaborationSection.vue # Perfis de colaboração
│   ├── ValuePortalSection.vue   # Portal de entrega de valor
│   ├── GovernanceSection.vue    # Governança e terminal
│   ├── CompetitiveSection.vue   # Análise competitiva
│   └── Footer.vue            # Rodapé com CTA
├── App.vue                   # Componente principal
└── main.js                   # Entry point

```

## ✨ Características Mantidas

### Design Original
- ✅ Glassmorphism (efeitos de vidro com backdrop-blur)
- ✅ Gradientes radiais de fundo (blobs coloridos)
- ✅ Animações sutis (pulse, hover, transitions)
- ✅ Tipografia Plus Jakarta Sans
- ✅ Material Icons do Google
- ✅ Paleta dark mode com tons de slate
- ✅ Sombras e glows personalizados
- ✅ Grid background pattern
- ✅ Terminal window com syntax highlighting
- ✅ Cards interativos com hover effects

### Componentes Vue.js
- Estrutura modular e reutilizável
- Props para customização
- Data binding reativo
- Scoped styles para isolamento

### Bootstrap Integration
- Grid system responsivo (container, row, col)
- Utilitários de espaçamento
- Breakpoints responsivos
- Componentes base customizados

## 🎯 Customizações CSS

O projeto usa CSS customizado para manter a estética original onde Bootstrap não alcança:

- **Variáveis CSS** para cores e temas
- **Glassmorphism** com backdrop-filter
- **Gradientes complexos** para backgrounds
- **Animações keyframes** personalizadas
- **Sombras e glows** com box-shadow
- **Scrollbar customizada**

## 📱 Responsividade

O layout é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: ≥ 992px

## 🔧 Configuração

### Vite Config
O projeto usa Vite para build rápida e HMR (Hot Module Replacement).

### Fontes
- Plus Jakarta Sans (Google Fonts)
- Material Symbols Outlined (Google Icons)

## 🎨 Paleta de Cores

```css
--primary: #6366f1        /* Indigo 500 */
--primary-hover: #4f46e5  /* Indigo 600 */
--primary-light: #818cf8  /* Indigo 400 */
--accent-green: #34d399   /* Emerald 400 */
--accent-blue: #60a5fa    /* Blue 400 */
--accent-yellow: #fbbf24  /* Amber 400 */
--accent-purple: #c084fc  /* Purple 400 */
--accent-cyan: #22d3ee    /* Cyan 400 */
--slate-950: #020617      /* Background principal */
```

## 📄 Licença

© 2023 ProdabelFlow Inc. Todos os direitos reservados.
