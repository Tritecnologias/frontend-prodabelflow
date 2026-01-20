# ✨ Guia de Animações

## 🎬 Visão Geral

O ProdabelFlow agora possui um sistema completo de **animações suaves e elegantes** que dão vida ao site sem ser exagerado!

### Características

✅ **Scroll Reveal** - Elementos aparecem ao rolar a página
✅ **Hover Effects** - Interações suaves ao passar o mouse
✅ **Entrance Animations** - Animações de entrada elegantes
✅ **Micro-interactions** - Pequenos detalhes que fazem diferença
✅ **Performance** - Otimizado com CSS e GPU acceleration
✅ **Acessibilidade** - Respeita `prefers-reduced-motion`

---

## 🎯 Animações Implementadas

### 1. **Scroll Reveal** (Aparecer ao Rolar)

Elementos aparecem suavemente quando entram na viewport.

**Como funciona**:
```vue
<div class="scroll-reveal">
  Conteúdo que aparece ao rolar
</div>
```

**Onde está**:
- Cards de features
- Cards de perfis
- Seções inteiras
- Elementos importantes

**Efeito**: Fade in + slide up (0.8s)

---

### 2. **Hover Effects**

#### Hover Lift (Elevação)
```vue
<div class="hover-lift">
  Card que levanta no hover
</div>
```

**Efeito**: Sobe 8px + sombra aumenta

**Onde está**:
- Feature cards
- Profile cards
- Botões secundários

#### Hover Scale (Escala)
```vue
<div class="hover-scale">
  Elemento que cresce no hover
</div>
```

**Efeito**: Escala para 105%

**Onde está**:
- Ícones
- Badges
- Imagens

#### Hover Glow (Brilho)
```vue
<div class="hover-glow">
  Elemento com brilho no hover
</div>
```

**Efeito**: Box-shadow com glow colorido

**Onde está**:
- Botões primários
- Cards destacados
- Elementos interativos

---

### 3. **Entrance Animations**

#### Fade In Up
```css
.animate-fade-in-up
```

**Efeito**: Aparece de baixo para cima

**Onde está**:
- Hero content
- Títulos de seção
- Cards

#### Fade In Down
```css
.animate-fade-in-down
```

**Efeito**: Aparece de cima para baixo

**Onde está**:
- Navbar
- Badges

#### Scale In
```css
.animate-scale-in
```

**Efeito**: Aparece crescendo

**Onde está**:
- Terminal window
- CTA banner
- Modais

#### Slide In (Left/Right)
```css
.animate-slide-in-left
.animate-slide-in-right
```

**Efeito**: Desliza da lateral

**Onde está**:
- Conteúdo em duas colunas
- Imagens e textos alternados

---

### 4. **Micro-interactions**

#### Icon Bounce
```vue
<span class="material-symbols-outlined icon-bounce">
  star
</span>
```

**Efeito**: Ícone pula suavemente no hover

**Onde está**:
- Ícones de perfil
- Ícones de features
- Ícones de navegação

#### Icon Spin
```vue
<span class="material-symbols-outlined icon-spin">
  settings
</span>
```

**Efeito**: Ícone gira 360° no hover

**Onde está**:
- Ícones de configuração
- Ícones de loading

#### Pulse Soft
```css
.pulse-soft
```

**Efeito**: Pulsa suavemente (opacidade + escala)

**Onde está**:
- Badges importantes
- Status indicators
- Notificações

#### Float
```css
.animate-float
```

**Efeito**: Flutua para cima e para baixo

**Onde está**:
- Ícone do Motor de IA
- Elementos decorativos
- Ilustrações

---

### 5. **Animações Especiais**

#### Badge Shine
```vue
<div class="badge-shine">
  Badge com brilho
</div>
```

**Efeito**: Brilho passa pelo badge periodicamente

**Onde está**:
- Badge "v2.0 Disponível"
- Badges de destaque
- Novidades

#### Button Ripple
Efeito de onda ao clicar em botões

**Onde está**:
- Botões primários
- Botões de CTA
- Botões de ação

#### Progress Bar Animation
```css
.progress-fill
```

**Efeito**: Barra preenche suavemente (1.5s cubic-bezier)

**Onde está**:
- Progress bars de perfis
- Métricas de progresso
- Loading states

#### Navbar Link Underline
```css
.nav-link::after
```

**Efeito**: Linha aparece embaixo do link no hover

**Onde está**:
- Links do navbar
- Links de navegação

#### Footer Link Arrow
```css
.footer-links a::before
```

**Efeito**: Seta aparece antes do link no hover

**Onde está**:
- Links do footer

---

## 🎨 Delays e Sequências

### Delays Disponíveis
```css
.delay-100  /* 0.1s */
.delay-200  /* 0.2s */
.delay-300  /* 0.3s */
.delay-400  /* 0.4s */
.delay-500  /* 0.5s */
.delay-600  /* 0.6s */
```

### Exemplo de Sequência
```vue
<div class="scroll-reveal">Card 1</div>
<div class="scroll-reveal delay-200">Card 2</div>
<div class="scroll-reveal delay-400">Card 3</div>
```

**Resultado**: Cards aparecem em sequência

---

## 💻 Como Usar

### Adicionar Scroll Reveal

```vue
<template>
  <div class="my-element scroll-reveal">
    Conteúdo que aparece ao rolar
  </div>
</template>
```

### Adicionar Hover Effect

```vue
<template>
  <div class="my-card hover-lift">
    Card que levanta no hover
  </div>
</template>
```

### Adicionar Animação de Entrada

```vue
<template>
  <div class="my-element animate-fade-in-up">
    Elemento com animação de entrada
  </div>
</template>
```

### Combinar Animações

```vue
<template>
  <div class="my-card scroll-reveal hover-lift delay-200">
    Card com múltiplas animações
  </div>
</template>
```

---

## 🎯 Keyframes Disponíveis

| Keyframe | Efeito | Duração |
|----------|--------|---------|
| `fadeIn` | Fade in simples | 0.6s |
| `fadeInUp` | Fade in + slide up | 0.8s |
| `fadeInDown` | Fade in + slide down | 0.8s |
| `scaleIn` | Fade in + scale | 0.6s |
| `slideInLeft` | Slide da esquerda | 0.8s |
| `slideInRight` | Slide da direita | 0.8s |
| `float` | Flutuar | 3s (loop) |
| `glow` | Brilho pulsante | 2s (loop) |
| `shimmer` | Brilho deslizante | 2s (loop) |
| `bounce-subtle` | Pulo suave | 0.6s |
| `spin` | Rotação 360° | 0.6s |
| `pulse-soft` | Pulso suave | 2s (loop) |
| `breathe` | Respiração | 3s (loop) |
| `shine` | Brilho passando | 3s (loop) |

---

## 🔧 Customização

### Mudar Duração

```css
.my-element {
  animation-duration: 1s; /* Padrão: 0.8s */
}
```

### Mudar Timing Function

```css
.my-element {
  animation-timing-function: ease-in-out; /* Padrão: ease-out */
}
```

### Mudar Delay

```css
.my-element {
  animation-delay: 0.5s;
}
```

### Criar Nova Animação

```css
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.my-element {
  animation: myAnimation 0.8s ease-out;
}
```

---

## ♿ Acessibilidade

### Respeito a Preferências do Usuário

O sistema respeita automaticamente a preferência `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**O que isso faz**:
- Usuários com sensibilidade a movimento
- Animações são praticamente desabilitadas
- Mantém funcionalidade, remove movimento

---

## 🚀 Performance

### Otimizações Aplicadas

✅ **GPU Acceleration**
```css
transform: translateZ(0);
will-change: transform;
```

✅ **CSS Animations** (não JavaScript)
- Mais performático
- Roda na GPU
- Não bloqueia thread principal

✅ **Intersection Observer**
- Detecta elementos na viewport
- Mais eficiente que scroll events
- Nativo do navegador

✅ **Cubic Bezier**
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
- Curva de animação suave
- Sensação natural
- Material Design

---

## 📊 Onde Cada Animação Está

### Hero Section
- ✅ Fade in up (conteúdo)
- ✅ Fade in (visual 3D)
- ✅ Float (ícone IA)
- ✅ Pulse (connector icon)

### Ingestion Section
- ✅ Scroll reveal (cards)
- ✅ Hover lift (cards)
- ✅ Float (ícone IA central)
- ✅ Delays em sequência

### Collaboration Section
- ✅ Scroll reveal (profile cards)
- ✅ Hover lift (cards)
- ✅ Icon bounce (ícones)
- ✅ Progress bar animation

### Value Portal Section
- ✅ Scroll reveal (dashboard)
- ✅ Scale in (portal card)
- ✅ Hover (task items)
- ✅ Pulse (status dot)

### Governance Section
- ✅ Scale in (terminal)
- ✅ Fade in (linhas do terminal)
- ✅ Scroll reveal (features)

### Competitive Section
- ✅ Scroll reveal (cards)
- ✅ Scale in (pontos do gráfico)
- ✅ Hover (pontos)

### Footer
- ✅ Scale in (CTA banner)
- ✅ Hover arrow (links)
- ✅ Hover glow (botões)

### Navbar
- ✅ Fade in down (entrada)
- ✅ Underline animation (links)
- ✅ Hover effects (botões)

---

## 🎓 Boas Práticas

### ✅ Fazer

- Use animações sutis (0.3s - 0.8s)
- Combine com delays para sequências
- Teste em dispositivos móveis
- Respeite `prefers-reduced-motion`
- Use GPU acceleration (transform, opacity)

### ❌ Evitar

- Animações muito longas (> 1s)
- Muitas animações simultâneas
- Animações em loop excessivas
- Animar width/height (use transform)
- Ignorar acessibilidade

---

## 🧪 Testando

### Testar Scroll Reveal

1. Abra o site
2. Role a página lentamente
3. Observe elementos aparecendo
4. Verifique delays e sequências

### Testar Hover Effects

1. Passe o mouse sobre cards
2. Passe o mouse sobre botões
3. Passe o mouse sobre ícones
4. Verifique suavidade

### Testar Acessibilidade

1. Abra DevTools
2. Emule `prefers-reduced-motion`
3. Verifique se animações são reduzidas

---

## 📚 Recursos

### Documentação Relacionada

- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Customização geral
- [THEME_SYSTEM.md](THEME_SYSTEM.md) - Sistema de temas
- [COMPONENT_GUIDE.md](COMPONENT_GUIDE.md) - Componentes

### Links Úteis

- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Cubic Bezier](https://cubic-bezier.com/)

---

## 🎉 Resultado

**Animações suaves e elegantes que:**

- ✅ Dão vida ao site
- ✅ Melhoram UX
- ✅ Guiam o olhar do usuário
- ✅ Criam hierarquia visual
- ✅ São performáticas
- ✅ São acessíveis

**Experimente agora!** Execute `npm run dev` e veja a mágica! ✨

---

**Animações que encantam sem distrair!** 🎬
