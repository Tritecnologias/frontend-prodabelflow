<template>
  <section class="competitive-section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Análise Competitiva & ROI</h2>
        <p class="section-description">Compare e entenda por que o ProdabelFlow lidera o mercado.</p>
      </div>

      <div class="row g-5">
        <div class="col-lg-6">
          <div class="comparison-card">
            <h3 class="card-title">Comparativo de Recursos</h3>
            <div class="table-responsive">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Recurso</th>
                    <th class="highlight">ProdabelFlow</th>
                    <th>Lucidchart</th>
                    <th>IcePanel</th>
                    <th>Ent. Arch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="feature in comparisonFeatures" :key="feature.name">
                    <td class="feature-name">{{ feature.name }}</td>
                    <td class="highlight">
                      <span v-if="feature.prodabel === true" class="check-icon">
                        <span class="material-symbols-outlined">check_circle</span>
                      </span>
                      <span v-else>{{ feature.prodabel }}</span>
                    </td>
                    <td>
                      <span v-if="feature.lucid === false" class="cancel-icon">
                        <span class="material-symbols-outlined">cancel</span>
                      </span>
                      <span v-else class="partial">{{ feature.lucid }}</span>
                    </td>
                    <td>
                      <span v-if="feature.ice === false" class="cancel-icon">
                        <span class="material-symbols-outlined">cancel</span>
                      </span>
                      <span v-else class="partial">{{ feature.ice }}</span>
                    </td>
                    <td>
                      <span v-if="feature.ent === false" class="cancel-icon">
                        <span class="material-symbols-outlined">cancel</span>
                      </span>
                      <span v-else class="partial">{{ feature.ent }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="roi-card">
            <h3 class="card-title">Eficiência Operacional</h3>
            <p class="card-subtitle">Valor Técnico vs. ROI Financeiro</p>
            
            <div class="chart-container">
              <div class="chart-axis y-axis">ROI FINANCEIRO</div>
              <div class="chart-axis x-axis">VALOR TÉCNICO</div>
              
              <div class="chart-grid">
                <div v-for="n in 16" :key="n" class="grid-cell"></div>
              </div>
              
              <div class="chart-point legacy" data-label="Legado"></div>
              <div class="chart-point tools" data-label="Ferramentas Visuais"></div>
              <div class="chart-point prodabel" data-label="ProdabelFlow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CompetitiveSection',
  data() {
    return {
      comparisonFeatures: [
        { name: 'Ingestão IA (.docx/NLP)', prodabel: true, lucid: false, ice: false, ent: false },
        { name: 'Contexto NotebookLM', prodabel: true, lucid: false, ice: false, ent: false },
        { name: 'Git Bidirecional', prodabel: true, lucid: false, ice: 'Parcial', ent: false },
        { name: 'Governança Ativa', prodabel: true, lucid: false, ice: false, ent: 'Manual' }
      ]
    }
  }
}
</script>

<style scoped>
.competitive-section {
  padding: 6rem 0;
  background: var(--bg-primary);
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
}

.comparison-card,
.roi-card {
  background: var(--bg-card);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--border-primary);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  height: 100%;
}

@media (min-width: 768px) {
  .comparison-card,
  .roi-card {
    padding: 2rem;
  }
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-subtitle {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  margin-bottom: 2rem;
}

.comparison-table {
  width: 100%;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.comparison-table thead th {
  padding-bottom: 1rem;
  font-weight: 600;
  color: var(--text-tertiary);
  text-align: center;
  font-size: 0.75rem;
}

.comparison-table thead th.highlight {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-light);
  font-weight: 700;
  border-radius: 0.5rem 0.5rem 0 0;
}

.comparison-table tbody tr {
  border-bottom: 1px solid var(--border-secondary);
}

.comparison-table tbody td {
  padding: 1rem 0.5rem;
  text-align: center;
}

.feature-name {
  font-weight: 500;
  text-align: left !important;
}

.comparison-table tbody td.highlight {
  background: rgba(99, 102, 241, 0.1);
  box-shadow: inset 0 0 10px rgba(99, 102, 241, 0.1);
}

.check-icon {
  color: var(--accent-green);
  font-weight: 700;
}

.cancel-icon {
  color: var(--slate-600);
}

.partial {
  font-size: 0.75rem;
  color: var(--slate-500);
}

.chart-container {
  position: relative;
  height: 16rem;
  width: 100%;
  border-left: 1px solid var(--border-primary);
  border-bottom: 1px solid var(--border-primary);
  margin-top: 1rem;
  background: transparent;
}

.chart-axis {
  position: absolute;
  font-size: 0.625rem;
  color: var(--text-tertiary);
  font-weight: 700;
  letter-spacing: 0.1em;
}

.y-axis {
  left: -2rem;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
}

.x-axis {
  bottom: -1.875rem;
  width: 100%;
  text-align: center;
}

.chart-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  pointer-events: none;
}

.grid-cell {
  border-top: 1px solid var(--border-secondary);
  border-right: 1px solid var(--border-secondary);
}

.chart-point {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.chart-point:hover {
  transform: scale(1.5);
}

.chart-point::after {
  content: attr(data-label);
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--slate-800);
  border: 1px solid var(--slate-600);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 20;
}

.chart-point:hover::after {
  opacity: 1;
}

.chart-point.legacy {
  left: 20%;
  bottom: 20%;
  background: var(--slate-600);
  border: 1px solid var(--slate-400);
}

.chart-point.tools {
  left: 40%;
  bottom: 30%;
  background: var(--slate-500);
  border: 1px solid var(--slate-300);
}

.chart-point.prodabel {
  right: 10%;
  top: 10%;
  width: 1.5rem;
  height: 1.5rem;
  background: var(--accent-cyan);
  box-shadow: 0 0 30px -5px rgba(34, 211, 238, 0.4);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  z-index: 10;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-point.prodabel::before {
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
}

.chart-point.prodabel::after {
  opacity: 1;
  top: -2.5rem;
  background: var(--primary);
  border-color: var(--primary-light);
  font-weight: 700;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
