<template>
  <section class="ingestion-section">
    <div class="section-overlay"></div>
    <div class="container position-relative">
      <div class="text-center mb-5">
        <h2 class="section-subtitle">Motor de Ingestão</h2>
        <h3 class="section-title">Ingestão Inteligente de Dados & IA</h3>
        <p class="section-description">
          Transforme documentos não estruturados em ativos de arquitetura acionáveis.
        </p>
      </div>

      <div class="row g-4 position-relative">
        <div class="connector-line d-none d-md-block"></div>
        
        <div class="col-md-4">
          <div class="feature-card scroll-reveal hover-lift">
            <div class="feature-icon bg-blue-accent">
              <span class="material-symbols-outlined">description</span>
            </div>
            <h4 class="feature-title">Documentos Word (.docx)</h4>
            <p class="feature-text">
              Importação direta de especificações e tabelas de requisitos não estruturados.
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="feature-card featured scroll-reveal hover-lift delay-200">
            <div class="feature-glow"></div>
            <div class="feature-icon featured-icon animate-float">
              <span class="material-symbols-outlined animate-pulse">psychology_alt</span>
            </div>
            <h4 class="feature-title featured-title">Motor de IA</h4>
            <p class="feature-text featured-text">
              Processamento NLP, extração de entidades e conexão contextual.
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="feature-card scroll-reveal hover-lift delay-400">
            <div class="feature-icon bg-purple-accent">
              <span class="material-symbols-outlined">dataset_linked</span>
            </div>
            <h4 class="feature-title">Git Issues</h4>
            <p class="feature-text">
              Criação automática de issues estruturadas e rastreáveis no seu repositório.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IngestionSection'
}
</script>


<style scoped>
.ingestion-section {
  padding: 5rem 0;
  background: rgba(15, 23, 42, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
}

.section-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(30, 58, 138, 0.15) 0%, rgba(2, 6, 23, 0) 50%);
  pointer-events: none;
}

.section-subtitle {
  color: var(--primary-light);
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
}

.section-description {
  color: var(--text-tertiary);
  max-width: 48rem;
  margin: 0 auto 4rem;
}

.connector-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent);
  transform: translateY(-50%);
  z-index: 0;
}

.feature-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--border-primary);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  position: relative;
  z-index: 10;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-card.featured {
  border: 1px solid rgba(34, 211, 238, 0.3);
  box-shadow: 0 0 30px -5px rgba(34, 211, 238, 0.4);
  transform: scale(1.05);
  position: relative;
}

.feature-glow {
  position: absolute;
  inset: -1px;
  background: linear-gradient(to right, var(--accent-cyan), var(--primary));
  border-radius: 1rem;
  opacity: 0.2;
  filter: blur(4px);
  z-index: -1;
}

.feature-icon {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 15px rgba(96, 165, 250, 0.15);
}

.feature-icon.bg-blue-accent {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-blue);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.feature-icon.bg-purple-accent {
  background: rgba(168, 85, 247, 0.1);
  color: var(--accent-purple);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.feature-icon.featured-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to bottom right, #06b6d4, #3b82f6);
  color: white;
  border-radius: 0.75rem;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
  margin: 0 auto 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-icon .material-symbols-outlined {
  font-size: 1.875rem;
}

.feature-icon.featured-icon .material-symbols-outlined {
  font-size: 2.25rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.feature-title.featured-title {
  text-align: center;
  background: linear-gradient(to right, #a5f3fc, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-text {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  line-height: 1.75;
}

.feature-text.featured-text {
  text-align: center;
  color: var(--slate-300);
}
</style>
