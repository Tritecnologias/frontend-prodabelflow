<template>
  <footer class="footer-section">
    <div class="container">
      <div class="cta-banner">
        <div class="cta-glow"></div>
        <div class="cta-badge">
          <span class="material-symbols-outlined">trending_up</span>
          <span>ROI Projetado 4.5x no primeiro trimestre</span>
        </div>
        <h2 class="cta-title">Acelere sua arquitetura hoje.</h2>
        <p class="cta-description">
          Junte-se a times de alta performance governando sua arquitetura com IA.
        </p>
        <div class="cta-actions">
          <button class="btn-cta-primary">Iniciar Teste Grátis</button>
          <button class="btn-cta-secondary">Falar com Vendas</button>
        </div>
      </div>

      <div class="footer-content">
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="footer-brand">
              <div class="brand-icon">
                <span class="material-symbols-outlined">hub</span>
              </div>
              <span class="brand-text">ProdabelFlow</span>
            </div>
            <p class="footer-description">
              Governança de Arquitetura Corporativa na Era da IA.
            </p>
          </div>

          <div class="col-6 col-lg-3">
            <h4 class="footer-title">Produto</h4>
            <ul class="footer-links">
              <li><a href="#">Ingestão</a></li>
              <li><a href="#">Governança</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          <div class="col-6 col-lg-3">
            <h4 class="footer-title">Empresa</h4>
            <ul class="footer-links">
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div class="col-6 col-lg-3">
            <h4 class="footer-title">Legal</h4>
            <ul class="footer-links">
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Termos</a></li>
              <li><a href="#">Segurança</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        © 2023 ProdabelFlow Inc. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-section {
  background: var(--bg-primary);
  color: var(--text-primary);
  padding-top: 5rem;
  padding-bottom: 2.5rem;
  border-top: 1px solid var(--border-primary);
  transition: background 0.3s ease, color 0.3s ease;
}

.cta-banner {
  background: linear-gradient(to right, #172554, rgba(99, 102, 241, 0.2));
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  .cta-banner {
    padding: 4rem;
  }
}

.cta-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 16rem;
  height: 16rem;
  background: rgba(99, 102, 241, 0.2);
  filter: blur(100px);
  border-radius: 50%;
  pointer-events: none;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  padding: 0.375rem 1rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(4px);
}

.cta-badge .material-symbols-outlined {
  color: var(--accent-yellow);
  font-size: 0.875rem;
}

.cta-badge span:last-child {
  font-size: 0.875rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  color: white;
}

@media (min-width: 768px) {
  .cta-title {
    font-size: 3rem;
  }
}

.cta-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  position: relative;
  z-index: 10;
}

@media (min-width: 640px) {
  .cta-actions {
    flex-direction: row;
  }
}

.btn-cta-primary {
  background: var(--primary);
  color: white;
  height: 3.5rem;
  padding: 0 2rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
}

.btn-cta-primary:hover {
  background: var(--primary-hover);
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.5);
}

.btn-cta-secondary {
  background: transparent;
  color: white;
  height: 3.5rem;
  padding: 0 2rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cta-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}

.footer-content {
  padding-top: 2.5rem;
  border-top: 1px solid var(--border-primary);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.brand-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border-radius: 0.375rem;
  color: white;
  font-size: 0.625rem;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
}

.brand-icon .material-symbols-outlined {
  font-size: 0.875rem;
}

.brand-text {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--text-primary);
}

.footer-description {
  font-size: 0.875rem;
  color: var(--text-tertiary);
}

.footer-title {
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  margin-top: 2.5rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
