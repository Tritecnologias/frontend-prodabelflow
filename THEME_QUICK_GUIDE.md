# 🌓 Guia Rápido - Light & Dark Mode

## ✨ Novidade!

O ProdabelFlow agora tem **Light Mode** e **Dark Mode**!

---

## 🎯 Como Usar

### Para Usuários

1. Olhe no canto superior direito da navbar
2. Clique no ícone ☀️ (sol) ou 🌙 (lua)
3. Pronto! O tema muda instantaneamente
4. Sua preferência é salva automaticamente

---

## 🎨 O Que Mudou

### ✅ Novo Componente
- **ThemeToggle** - Botão elegante para trocar temas

### ✅ Variáveis CSS
- Sistema completo de variáveis para cores
- Transições suaves entre temas
- Suporte automático em todos os componentes

### ✅ Persistência
- Preferência salva no navegador
- Detecta preferência do sistema operacional
- Funciona offline

---

## 💻 Para Desenvolvedores

### Usar Variáveis de Tema

```css
/* ✅ Correto - Adapta automaticamente */
.my-element {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

/* ❌ Evitar - Cor fixa */
.my-element {
  background: #0f172a;
  color: #ffffff;
}
```

### Variáveis Principais

```css
/* Backgrounds */
--bg-primary      /* Fundo principal */
--bg-card         /* Fundo de cards */

/* Textos */
--text-primary    /* Texto principal */
--text-tertiary   /* Texto secundário */

/* Bordas */
--border-primary  /* Bordas */

/* Efeitos */
--shadow-color    /* Sombras */
--glass-bg        /* Glassmorphism */
```

---

## 🎨 Valores

### Dark Mode (Padrão)
- Fundo: Preto azulado (#020617)
- Texto: Branco suave (#f8fafc)
- Cards: Slate escuro (#0f172a)

### Light Mode
- Fundo: Branco puro (#ffffff)
- Texto: Preto azulado (#0f172a)
- Cards: Branco (#ffffff)

---

## 📁 Arquivos Modificados

1. **src/assets/styles/main.css** - Variáveis CSS
2. **src/components/ThemeToggle.vue** - Novo componente
3. **src/components/Navbar.vue** - Integração do toggle
4. **src/components/BackgroundEffects.vue** - Ajustes de opacidade
5. **src/components/HeroSection.vue** - Uso de variáveis

---

## 🚀 Testando

```bash
# Execute o projeto
npm run dev

# Abra no navegador
http://localhost:5173

# Clique no ícone de sol/lua no navbar
```

---

## 📚 Documentação Completa

Para mais detalhes, veja:
- **[THEME_SYSTEM.md](THEME_SYSTEM.md)** - Documentação completa
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Como customizar

---

## 🎉 Pronto!

Agora você tem um site lindo em **dois temas**! ☀️🌙

**Experimente agora e escolha seu favorito!**
