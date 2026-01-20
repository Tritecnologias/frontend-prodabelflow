# 🚀 Guia de Início Rápido

## Passo 1: Instalar Dependências

```bash
npm install
```

Isso instalará:
- Vue.js 3
- Bootstrap 5
- Vite
- Plugin Vue para Vite

## Passo 2: Executar o Projeto

```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:5173`

## Passo 3: Explorar os Componentes

### Estrutura de Componentes

```
App.vue (Componente Principal)
├── BackgroundEffects.vue    → Blobs de gradiente animados
├── Navbar.vue               → Navegação fixa no topo
├── HeroSection.vue          → Hero com visual 3D interativo
├── IngestionSection.vue     → Cards de ingestão IA
├── CollaborationSection.vue → Perfis de usuários
├── ValuePortalSection.vue   → Dashboard de progresso
├── GovernanceSection.vue    → Terminal window
├── CompetitiveSection.vue   → Tabela comparativa + gráfico
└── Footer.vue               → CTA + Links
```

## 🎨 Customização

### Cores
Edite as variáveis CSS em `src/assets/styles/main.css`:

```css
:root {
  --primary: #6366f1;
  --accent-green: #34d399;
  --accent-blue: #60a5fa;
  /* ... */
}
```

### Conteúdo
Cada componente Vue tem sua própria seção `<script>` com dados reativos:

```javascript
data() {
  return {
    // Seus dados aqui
  }
}
```

### Estilos
Cada componente tem estilos `scoped` que não afetam outros componentes.

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

## 🔍 Preview da Build

```bash
npm run preview
```

## 💡 Dicas

1. **Hot Module Replacement (HMR)**: Suas mudanças aparecem instantaneamente no navegador
2. **Vue DevTools**: Instale a extensão do navegador para debug
3. **Responsividade**: Teste em diferentes tamanhos de tela
4. **Performance**: Todos os efeitos são otimizados com CSS puro

## 🐛 Troubleshooting

### Porta já em uso?
```bash
npm run dev -- --port 3000
```

### Limpar cache?
```bash
rm -rf node_modules
npm install
```

### Erro de build?
Verifique se tem Node.js 16+ instalado:
```bash
node --version
```

## 📚 Próximos Passos

1. Adicione suas próprias seções
2. Integre com backend/API
3. Adicione Vue Router para navegação
4. Implemente Vuex/Pinia para state management
5. Configure testes com Vitest

## 🎯 Diferenças do Original

| Aspecto | Original | Vue.js Version |
|---------|----------|----------------|
| Framework | Tailwind CSS | Bootstrap 5 + CSS Custom |
| Estrutura | Single HTML | Componentes Vue modulares |
| Reatividade | JavaScript vanilla | Vue.js reactivity |
| Build | CDN | Vite bundler |
| Manutenção | Difícil (1 arquivo) | Fácil (componentes) |

## ✅ Checklist de Qualidade

- ✅ Design 100% fiel ao original
- ✅ Totalmente responsivo
- ✅ Animações suaves
- ✅ Performance otimizada
- ✅ Código modular
- ✅ Fácil manutenção
- ✅ Sem Tailwind (conforme solicitado)
- ✅ Bootstrap + CSS customizado

---

**Pronto para começar!** 🎉

Execute `npm install && npm run dev` e veja a mágica acontecer!
