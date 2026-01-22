<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="hero-content">
            <div class="badge-version">
              <span class="pulse-dot"></span>
              v2.0 Disponível com Suporte NotebookLM
            </div>
            
            <h1 class="hero-title">
              <span class="text-gradient">ProdabelFlow</span><br/>
              Architect 360°
            </h1>
            
            <p class="hero-description">
              A ponte definitiva entre estratégia, negócio e tecnologia. Traduzimos múltiplas visões em uma entrega sólida: processos claros, arquitetura escalável e governança preparada para o futuro.
            </p>
            
            <div class="hero-actions">
              <button class="btn-hero-primary">
                Iniciar Teste Grátis
                <span class="material-symbols-outlined">rocket_launch</span>
              </button>
              <button class="btn-hero-secondary">
                <span class="material-symbols-outlined">play_circle</span>
                Ver Demo
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="hero-visual">
            <div class="visual-card">
              <div class="card-inner">
                <div class="card-header">
                  <div class="dot dot-red"></div>
                  <div class="dot dot-yellow"></div>
                  <div class="dot dot-green"></div>
                  <div class="header-bar"></div>
                </div>
                
                <div class="card-content">
                  <div class="flow-diagram">
                    <div class="flow-item flow-left">
                      <div class="flow-icon bg-blue">
                        <span class="material-symbols-outlined">description</span>
                      </div>
                      <div class="flow-lines">
                        <div class="line"></div>
                        <div class="line"></div>
                      </div>
                    </div>
                    
                    <div class="flow-connector">
                      <div class="connector-icon">
                        <span class="material-symbols-outlined">auto_awesome</span>
                      </div>
                    </div>
                    
                    <div class="flow-item flow-right">
                      <div class="flow-icon bg-green">
                        <span class="material-symbols-outlined">terminal</span>
                      </div>
                      <div class="flow-lines">
                        <div class="line"></div>
                        <div class="line"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="content-area">
                    <div class="content-blocks">
                      <div class="block-row">
                        <div class="block block-small"></div>
                        <div class="block block-large">
                          <div class="block-line"></div>
                        </div>
                      </div>
                      <div class="block block-medium">
                        <div class="block-line short"></div>
                        <div class="block-line"></div>
                        <div class="block-line medium"></div>
                      </div>
                    </div>
                    
                    <div class="status-badge">
                      <span class="material-symbols-outlined">check_circle</span>
                      Sincronizado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  padding-top: 8rem;
  padding-bottom: 5rem;
  overflow: hidden;
}

@media (min-width: 992px) {
  .hero-section {
    padding-top: 12rem;
    padding-bottom: 8rem;
  }
}

.hero-content {
  position: relative;
  z-index: 10;
}

.badge-version {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-cyan);
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 2px 0 var(--shadow-color);
  backdrop-filter: blur(4px);
}

.pulse-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--accent-green);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.6);
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

@media (min-width: 992px) {
  .hero-title {
    font-size: 4.5rem;
  }
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  max-width: 32rem;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-hero-primary {
  background: var(--primary);
  color: white;
  height: 3.5rem;
  padding: 0 2rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.25);
}

.btn-hero-primary:hover {
  background: var(--primary-hover);
  box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.5);
}

.btn-hero-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  height: 3.5rem;
  padding: 0 2rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid var(--border-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  box-shadow: 0 1px 2px 0 var(--shadow-color);
}

.btn-hero-secondary:hover {
  background: var(--bg-card-hover);
  box-shadow: 0 4px 6px -1px var(--shadow-color);
}

.btn-hero-secondary .material-symbols-outlined {
  color: var(--accent-blue);
}

.hero-visual {
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-card {
  position: relative;
  width: 100%;
  max-width: 32rem;
  aspect-ratio: 1;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px var(--shadow-color);
  border: 1px solid var(--glass-border);
  transition: transform 0.7s ease;
}

.visual-card:hover {
  transform: rotateY(0deg);
}

.card-inner {
  background: var(--bg-card);
  border-radius: 1rem;
  height: 100%;
  box-shadow: inset 0 2px 4px 0 var(--shadow-color);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-primary);
  position: relative;
  overflow: hidden;
}

.card-inner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), transparent);
  opacity: 0.5;
  pointer-events: none;
}

.card-header {
  height: 2.5rem;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-primary);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 0.5rem;
  position: relative;
  z-index: 10;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.dot-red {
  background: rgba(239, 68, 68, 0.8);
}

.dot-yellow {
  background: rgba(245, 158, 11, 0.8);
}

.dot-green {
  background: rgba(34, 197, 94, 0.8);
}

.header-bar {
  margin-left: 1rem;
  height: 1.25rem;
  width: 12rem;
  background: var(--bg-tertiary);
  border-radius: 0.375rem;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 10;
}

.flow-diagram {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.flow-item {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  padding: 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 41.666667%;
  box-shadow: 0 10px 15px -3px var(--shadow-color);
  position: relative;
  transition: border-color 0.3s ease;
}

.visual-card:hover .flow-item.flow-left {
  border-color: rgba(59, 130, 246, 0.5);
}

.visual-card:hover .flow-item.flow-right {
  border-color: rgba(52, 211, 153, 0.5);
}

.flow-icon {
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-icon.bg-blue {
  background: rgba(30, 64, 175, 0.5);
  color: var(--accent-blue);
}

.flow-icon.bg-green {
  background: rgba(6, 95, 70, 0.5);
  color: var(--accent-green);
}

.flow-icon .material-symbols-outlined {
  font-size: 0.875rem;
}

.flow-lines {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.line {
  height: 0.375rem;
  background: var(--slate-600);
  border-radius: 9999px;
}

.line:first-child {
  width: 3rem;
}

.line:last-child {
  width: 2rem;
}

.flow-connector {
  height: 1px;
  flex: 1;
  background: linear-gradient(to right, var(--slate-700), var(--primary), var(--slate-700));
  position: relative;
  margin: 0 0.5rem;
}

.connector-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2rem;
  height: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
  z-index: 10;
}

.connector-icon .material-symbols-outlined {
  font-size: 0.75rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.content-area {
  background: var(--bg-primary);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--border-primary);
  flex: 1;
  position: relative;
  overflow: hidden;
}

.content-area::before {
  content: '';
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  opacity: 0.3;
}

.content-blocks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 10;
  margin-top: 0.5rem;
}

.block-row {
  display: flex;
  gap: 0.75rem;
}

.block {
  background: var(--bg-tertiary);
  border-radius: 0.5rem;
  border: 1px solid var(--border-primary);
  backdrop-filter: blur(4px);
}

.block-small {
  width: 33.333333%;
  height: 5rem;
}

.block-large {
  width: 66.666667%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.block-medium {
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
}

.block-line {
  width: 75%;
  height: 0.5rem;
  background: var(--slate-700);
  border-radius: 9999px;
}

.block-line.short {
  width: 50%;
}

.block-line.medium {
  width: 75%;
}

.block-large .block-line {
  width: 75%;
}

.status-badge {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: var(--accent-green);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  backdrop-filter: blur(12px);
  z-index: 10;
}

.status-badge .material-symbols-outlined {
  font-size: 0.875rem;
}
</style>
