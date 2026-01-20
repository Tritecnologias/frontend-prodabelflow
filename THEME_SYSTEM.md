# 🌓 Sistema de Temas - Light & Dark Mode

## 🎨 Visão Geral

O ProdabelFlow agora suporta **Dark Mode** e **Light Mode** com transição suave entre os temas!

### Características

✅ **Toggle elegante** com ícones animados
✅ **Transições suaves** entre temas
✅ **Preferência salva** no localStorage
✅ **Detecção automática** da preferência do sistema
✅ **Variáveis CSS** para fácil customização
✅ **100% responsivo** em ambos os temas

---

## 🚀 Como Usar

### Para Usuários

1. Clique no ícone de sol/lua no canto superior direito da navbar
2. O tema mudará instantaneamente
3. Sua preferência será salva automaticamente

### Para Desenvolvedores

O sistema de temas usa CSS Custom Properties (variáveis CSS) que mudam automaticamente baseado no atributo `data-theme` do elemento `<html>`.

---

## 🎯 Componente ThemeToggle

### Localização
`src/components/ThemeToggle.vue`

### Funcionalidades

- **Ícone animado**: Sol para light mode, lua para dark mode
- **Transição suave**: Rotação e fade ao trocar
- **Hover effect**: Glow e elevação
- **Persistência**: Salva no localStorage
- **Sistema**: Detecta preferência do sistema operacional

### Uso

```vue
<template>
  <ThemeToggle />
</template>

<script>
import ThemeToggle from './components/ThemeToggle.vue'

export default {
  components: {
    ThemeToggle
  }
}
</script>
```

---

## 🎨 Variáveis CSS

### Estrutura

Todas as variáveis de tema estão em `src/assets/styles/main.css`:

```css
/* Cores fixas (não mudam com tema) */
:root {
  --primary: #6366f1;
  --accent-green: #34d399;
  --accent-blue: #60a5fa;
  /* ... */
}

/* Dark Mode (padrão) */
:root,
[data-theme="dark"] {
  --bg-primary: #020617;
  --text-primary: #f8fafc;
  /* ... */
}

/* Light Mode */
[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  /* ... */
}
```

### Variáveis Disponíveis

#### Backgrounds
```css
--bg-primary      /* Fundo principal */
--bg-secondary    /* Fundo secundário */
--bg-tertiary     /* Fundo terciário */
--bg-card         /* Fundo de cards */
--bg-card-hover   /* Fundo de cards no hover */
```

#### Textos
```css
--text-primary    /* Texto principal */
--text-secondary  /* Texto secundário */
--text-tertiary   /* Texto terciário */
--text-muted      /* Texto esmaecido */
```

#### Bordas
```css
--border-primary    /* Borda principal */
--border-secondary  /* Borda secundária */
```

#### Glassmorphism
```css
--glass-bg      /* Background do glass effect */
--glass-border  /* Borda do glass effect */
```

#### Efeitos
```css
--shadow-color   /* Cor das sombras */
--glow-opacity   /* Opacidade dos glows */
```

---

## 🎨 Valores dos Temas

### Dark Mode (Padrão)

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `--bg-primary` | #020617 | Preto azulado |
| `--bg-secondary` | #0f172a | Slate 900 |
| `--bg-tertiary` | #1e293b | Slate 800 |
| `--text-primary` | #f8fafc | Branco suave |
| `--text-secondary` | #cbd5e1 | Slate 300 |
| `--text-tertiary` | #94a3b8 | Slate 400 |
| `--shadow-color` | rgba(0,0,0,0.3) | Sombra escura |
| `--glow-opacity` | 0.2 | Glow médio |

### Light Mode

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `--bg-primary` | #ffffff | Branco puro |
| `--bg-secondary` | #f8fafc | Slate 50 |
| `--bg-tertiary` | #f1f5f9 | Slate 100 |
| `--text-primary` | #0f172a | Preto azulado |
| `--text-secondary` | #334155 | Slate 700 |
| `--text-tertiary` | #64748b | Slate 500 |
| `--shadow-color` | rgba(0,0,0,0.1) | Sombra suave |
| `--glow-opacity` | 0.15 | Glow sutil |

---

## 💻 Como Usar as Variáveis

### Em Componentes Vue

```vue
<style scoped>
.my-element {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: 0 4px 6px var(--shadow-color);
}

.my-element:hover {
  background: var(--bg-card-hover);
}
</style>
```

### Transições Suaves

Adicione transições para mudanças suaves de tema:

```css
.my-element {
  background: var(--bg-card);
  color: var(--text-primary);
  transition: background 0.3s ease, color 0.3s ease;
}
```

---

## 🔧 Customização

### Mudar Cores do Dark Mode

Edite `src/assets/styles/main.css`:

```css
[data-theme="dark"] {
  --bg-primary: #000000;      /* Preto puro */
  --text-primary: #ffffff;    /* Branco puro */
  /* ... */
}
```

### Mudar Cores do Light Mode

```css
[data-theme="light"] {
  --bg-primary: #f5f5f5;      /* Cinza claro */
  --text-primary: #1a1a1a;    /* Preto suave */
  /* ... */
}
```

### Adicionar Novo Tema

```css
[data-theme="blue"] {
  --bg-primary: #0a1929;
  --text-primary: #e3f2fd;
  /* ... */
}
```

Depois, modifique `ThemeToggle.vue` para incluir o novo tema.

---

## 🎯 Componentes Adaptados

Os seguintes componentes foram adaptados para suportar ambos os temas:

### ✅ Componentes Principais
- [x] **Navbar** - Navegação com glass effect
- [x] **BackgroundEffects** - Blobs ajustados
- [x] **HeroSection** - Cards e textos
- [x] **ThemeToggle** - Toggle de tema (novo)

### 🔄 Componentes em Adaptação
Os demais componentes herdam automaticamente as variáveis CSS, mas podem precisar de ajustes finos para otimizar a aparência no light mode.

---

## 📱 Detecção de Preferência do Sistema

O ThemeToggle detecta automaticamente a preferência do sistema operacional:

```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
```

**Prioridade**:
1. Preferência salva no localStorage
2. Preferência do sistema operacional
3. Dark mode (padrão)

---

## 💾 Persistência

A preferência do usuário é salva no localStorage:

```javascript
// Salvar
localStorage.setItem('theme', 'dark') // ou 'light'

// Ler
const savedTheme = localStorage.getItem('theme')
```

---

## 🎨 Ajustes Específicos por Tema

### Exemplo: Ajustar Opacidade

```css
.my-glow {
  box-shadow: 0 0 20px rgba(99, 102, 241, var(--glow-opacity));
}
```

No dark mode: `--glow-opacity: 0.2` (mais intenso)
No light mode: `--glow-opacity: 0.15` (mais sutil)

### Exemplo: Ajustar Blobs

```css
.blob {
  background: rgba(99, 102, 241, var(--glow-opacity));
}

[data-theme="light"] .blob {
  background: rgba(99, 102, 241, 0.08);
}
```

---

## 🔍 Debugging

### Ver Tema Atual

Abra o console do navegador:

```javascript
// Ver tema atual
document.documentElement.getAttribute('data-theme')

// Mudar tema manualmente
document.documentElement.setAttribute('data-theme', 'light')
document.documentElement.setAttribute('data-theme', 'dark')
```

### Ver Variáveis CSS

```javascript
// Ver valor de uma variável
getComputedStyle(document.documentElement)
  .getPropertyValue('--bg-primary')
```

---

## 🎯 Boas Práticas

### ✅ Fazer

- Use variáveis CSS para cores e backgrounds
- Adicione transições suaves (0.3s ease)
- Teste em ambos os temas
- Mantenha contraste adequado
- Use `var(--text-primary)` em vez de cores fixas

### ❌ Evitar

- Cores hardcoded (ex: `color: #ffffff`)
- Transições muito lentas (> 0.5s)
- Baixo contraste no light mode
- Esquecer de testar em ambos os temas

---

## 📊 Checklist de Adaptação

Ao criar novos componentes:

- [ ] Usar `var(--bg-*)` para backgrounds
- [ ] Usar `var(--text-*)` para textos
- [ ] Usar `var(--border-*)` para bordas
- [ ] Usar `var(--shadow-color)` para sombras
- [ ] Adicionar transições suaves
- [ ] Testar no dark mode
- [ ] Testar no light mode
- [ ] Verificar contraste
- [ ] Verificar hover states

---

## 🎨 Exemplos Práticos

### Card Adaptável

```vue
<template>
  <div class="adaptive-card">
    <h3>Título</h3>
    <p>Conteúdo</p>
  </div>
</template>

<style scoped>
.adaptive-card {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: all 0.3s ease;
}

.adaptive-card:hover {
  background: var(--bg-card-hover);
  transform: translateY(-2px);
}

.adaptive-card h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.adaptive-card p {
  color: var(--text-tertiary);
}
</style>
```

### Button Adaptável

```vue
<style scoped>
.adaptive-button {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.adaptive-button:hover {
  background: var(--bg-card-hover);
  border-color: var(--primary);
  color: var(--primary);
}
</style>
```

---

## 🚀 Próximos Passos

### Melhorias Futuras

1. **Mais temas**: Adicionar tema azul, verde, etc.
2. **Tema automático**: Mudar baseado na hora do dia
3. **Transição de página**: Fade ao trocar tema
4. **Preferências avançadas**: Customizar cores individuais

### Como Contribuir

1. Adapte componentes restantes
2. Teste em diferentes dispositivos
3. Reporte bugs de contraste
4. Sugira melhorias de UX

---

## 📚 Recursos

### Documentação Relacionada

- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Customização geral
- [COMPONENT_GUIDE.md](COMPONENT_GUIDE.md) - Criar componentes
- [main.css](src/assets/styles/main.css) - Variáveis CSS

### Links Úteis

- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🎉 Conclusão

O sistema de temas está **pronto e funcionando**!

**Características**:
- ✅ Toggle elegante e animado
- ✅ Transições suaves
- ✅ Persistência de preferência
- ✅ Detecção automática
- ✅ Fácil customização
- ✅ Performance otimizada

**Experimente agora**: Execute `npm run dev` e clique no ícone de sol/lua! 🌓

---

**Aproveite o melhor dos dois mundos!** ☀️🌙
