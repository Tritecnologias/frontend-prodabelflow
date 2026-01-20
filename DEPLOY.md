# 🚀 Guia de Deploy

## Opções de Deploy

### 1. Vercel (Recomendado) ⚡

**Mais rápido e fácil!**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou conecte seu repositório GitHub diretamente no [vercel.com](https://vercel.com)

**Configuração automática**: Vercel detecta Vite automaticamente!

---

### 2. Netlify 🌐

```bash
# Build
npm run build

# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Ou arraste a pasta `dist` no [netlify.com](https://netlify.com)

**netlify.toml** (opcional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages 📄

**package.json** - adicione:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

```bash
# Instalar gh-pages
npm i -D gh-pages

# Deploy
npm run deploy
```

**vite.config.js** - adicione base:
```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/nome-do-repositorio/'
})
```

---

### 4. Firebase Hosting 🔥

```bash
# Instalar Firebase CLI
npm i -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

**firebase.json**:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

### 5. AWS S3 + CloudFront ☁️

```bash
# Build
npm run build

# Instalar AWS CLI
# https://aws.amazon.com/cli/

# Sync para S3
aws s3 sync dist/ s3://seu-bucket --delete

# Invalidar CloudFront cache
aws cloudfront create-invalidation --distribution-id SEU_ID --paths "/*"
```

---

### 6. Docker 🐳

**Dockerfile**:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

```bash
# Build image
docker build -t prodabelflow .

# Run
docker run -p 8080:80 prodabelflow
```

---

## Otimizações de Build

### vite.config.js Otimizado

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Minificar
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue'],
          'bootstrap': ['bootstrap']
        }
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  }
})
```

---

## Variáveis de Ambiente

### .env.production

```env
VITE_API_URL=https://api.prodabelflow.com
VITE_APP_TITLE=ProdabelFlow Architect 360
```

### Uso no código

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Performance Checklist

### Antes do Deploy

- [ ] `npm run build` sem erros
- [ ] Testar `npm run preview`
- [ ] Verificar tamanho do bundle
- [ ] Otimizar imagens
- [ ] Minificar CSS/JS
- [ ] Habilitar gzip/brotli
- [ ] Configurar cache headers
- [ ] Testar em diferentes navegadores
- [ ] Testar responsividade
- [ ] Lighthouse score 90+

### Lighthouse Targets

```
Performance:  95+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

---

## CDN & Assets

### Fontes (já configurado)

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet">

<!-- Material Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap" rel="stylesheet">
```

### Bootstrap (já configurado)

```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
```

---

## Monitoramento

### Analytics

**Google Analytics**:
```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Error Tracking

**Sentry**:
```bash
npm i @sentry/vue
```

```javascript
// main.js
import * as Sentry from "@sentry/vue";

Sentry.init({
  app,
  dsn: "YOUR_DSN",
  environment: import.meta.env.MODE
});
```

---

## SSL/HTTPS

Todos os serviços recomendados (Vercel, Netlify, etc.) fornecem SSL gratuito via Let's Encrypt.

Para domínio customizado:
1. Adicione domínio no painel do serviço
2. Configure DNS (A/CNAME records)
3. SSL é provisionado automaticamente

---

## CI/CD

### GitHub Actions

**.github/workflows/deploy.yml**:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Troubleshooting

### Build falha?

```bash
# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

### Rotas 404?

Configure rewrites para SPA:
- Vercel: automático
- Netlify: `_redirects` ou `netlify.toml`
- Nginx: `try_files $uri /index.html`

### Assets não carregam?

Verifique `base` no `vite.config.js`:
```javascript
base: '/' // para domínio raiz
base: '/subpath/' // para subdiretório
```

---

## Custos Estimados

| Serviço | Grátis | Pago |
|---------|--------|------|
| Vercel | ✅ Hobby | $20/mês Pro |
| Netlify | ✅ 100GB/mês | $19/mês Pro |
| GitHub Pages | ✅ Ilimitado | - |
| Firebase | ✅ 10GB/mês | Pay as you go |
| AWS S3 | ~$0.50/mês | Variável |

**Recomendação**: Comece com Vercel ou Netlify (grátis) e escale conforme necessário.

---

## Comandos Rápidos

```bash
# Build local
npm run build

# Preview build
npm run preview

# Deploy Vercel
vercel --prod

# Deploy Netlify
netlify deploy --prod

# Deploy Firebase
firebase deploy

# Docker
docker build -t app . && docker run -p 8080:80 app
```

---

## Próximos Passos

1. ✅ Build local funciona
2. ✅ Escolher plataforma de deploy
3. ✅ Configurar domínio (opcional)
4. ✅ Configurar SSL (automático)
5. ✅ Configurar analytics
6. ✅ Configurar CI/CD
7. ✅ Monitorar performance
8. ✅ Otimizar baseado em métricas

---

**Pronto para o mundo!** 🌍✨

Escolha sua plataforma favorita e faça o deploy em minutos!
