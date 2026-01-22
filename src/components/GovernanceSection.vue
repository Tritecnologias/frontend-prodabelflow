<template>
  <section class="governance-section">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <div class="badge-custom">MÓDULO DE GOVERNANÇA</div>
          <h2 class="section-title">Visões Estratégicas e Governança</h2>
          <p class="section-description">
            Garanta alinhamento total com painéis adaptados para cada nível da organização.
          </p>
          
          <div class="governance-features">
            <div class="gov-feature">
              <div class="gov-icon bg-green">
                <span class="material-symbols-outlined">monitoring</span>
              </div>
              <div>
                <h4 class="gov-title">Mapa de Saúde Tecnológica</h4>
                <p class="gov-text">(Visão Diretor) Monitoramento de dívida técnica, riscos e conformidade.</p>
              </div>
            </div>
            
            <div class="gov-feature">
              <div class="gov-icon bg-blue">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <div>
                <h4 class="gov-title">Portal de Entrega de Valor</h4>
                <p class="gov-text">(Visão Cliente/PO) Transparência no progresso das entregas de negócio.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="governance-image-wrapper">
            <img 
              src="/images/visoes-estrategicas.webp" 
              alt="Visões Estratégicas - Governança"
              class="governance-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GovernanceSection'
}
</script>

<style scoped>
.governance-section {
  padding: 5rem 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--border-secondary);
}

.governance-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  opacity: 0.2;
}

.container {
  position: relative;
  z-index: 10;
}

.badge-custom {
  display: inline-block;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-light);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  color: var(--text-primary);
}

.section-description {
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.governance-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.gov-feature {
  display: flex;
  gap: 1rem;
}

.gov-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid var(--border-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 15px -3px var(--shadow-color);
  background: var(--bg-tertiary);
}

.gov-icon.bg-green {
  background: var(--bg-tertiary);
  color: var(--accent-green);
}

.gov-icon.bg-blue {
  background: var(--bg-tertiary);
  color: var(--accent-blue);
}

.gov-title {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.gov-text {
  font-size: 0.875rem;
  color: var(--text-tertiary);
}

.terminal-window {
  background: #0f172a;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid var(--slate-700);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0, 0, 0, 0.5);
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

.terminal-header {
  background: #1e293b;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--slate-700);
}

.terminal-dots {
  display: flex;
  gap: 0.5rem;
}

.terminal-dots .dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.terminal-dots .dot.red {
  background: #ef4444;
}

.terminal-dots .dot.yellow {
  background: #eab308;
}

.terminal-dots .dot.green {
  background: #22c55e;
}

.terminal-title {
  color: var(--slate-500);
  font-size: 0.75rem;
}

.terminal-body {
  padding: 1.5rem;
  color: var(--slate-300);
}

.terminal-line {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.prompt {
  color: var(--accent-green);
}

.path {
  color: var(--accent-blue);
}

.command {
  color: white;
}

.code-block {
  background: rgba(15, 23, 42, 0.5);
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--slate-800);
  font-size: 0.75rem;
  line-height: 1.75;
  margin: 0.75rem 0;
}

.json-bracket {
  color: var(--accent-purple);
}

.json-key {
  color: var(--accent-blue);
}

.json-value {
  color: var(--accent-green);
}

.terminal-output {
  padding-left: 1rem;
  border-left: 2px solid var(--slate-700);
  margin: 0.5rem 0;
  font-size: 0.75rem;
}

.output-line {
  color: var(--slate-500);
  margin-bottom: 0.25rem;
}

.success-line {
  color: var(--accent-green);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.success-line .material-symbols-outlined {
  font-size: 0.875rem;
}

.info-line {
  color: var(--slate-500);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

/* Governance Image */
.governance-image-wrapper {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

:global(.light) .governance-image-wrapper {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05);
}

.governance-image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.3), 0 15px 15px -5px rgba(0, 0, 0, 0.15);
}

:global(.light) .governance-image-wrapper:hover {
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08);
}

.governance-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
