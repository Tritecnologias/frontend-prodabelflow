<template>
  <section class="value-portal-section">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <div class="portal-visual">
            <div class="visual-glow"></div>
            <div class="portal-card glass-panel">
              <div class="card-header-custom">
                <div>
                  <h4 class="card-title-custom">Visão de Progresso</h4>
                  <p class="card-subtitle">Projeto: Sistema de Pagamentos V2</p>
                </div>
                <span class="status-online">
                  <span class="status-dot"></span>
                  Online
                </span>
              </div>
              
              <div class="metrics-grid">
                <div class="metric-card">
                  <div class="metric-label">Entregas no Sprint</div>
                  <div class="metric-value">85%</div>
                  <div class="metric-bar">
                    <div class="metric-fill blue" style="width: 85%"></div>
                  </div>
                </div>
                <div class="metric-card">
                  <div class="metric-label">Valor de Negócio</div>
                  <div class="metric-value">High</div>
                  <div class="metric-dots">
                    <div class="dot active"></div>
                    <div class="dot active"></div>
                    <div class="dot"></div>
                  </div>
                </div>
              </div>
              
              <div class="tasks-list">
                <div class="task-item" v-for="task in tasks" :key="task.id">
                  <div class="task-info">
                    <div class="task-icon" :class="`bg-${task.color}`">
                      <span class="material-symbols-outlined">{{ task.icon }}</span>
                    </div>
                    <div>
                      <h5 class="task-title">{{ task.title }}</h5>
                      <span class="task-subtitle">{{ task.subtitle }}</span>
                    </div>
                  </div>
                  <div v-if="task.incidents" class="incidents-badge">
                    <span class="incident-pending">{{ task.incidents.pending }} pendentes</span>
                    <span class="incident-resolved">✓ {{ task.incidents.resolved }} resolvidos</span>
                  </div>
                  <span v-else class="task-status" :class="`status-${task.statusColor}`">
                    {{ task.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div class="col-lg-6 order-1 order-lg-2">
          <div class="badge-custom">PORTAL CLIENTE / PO</div>
          <h2 class="section-title-large">
            Portal de Entrega de Valor: <br/>
            <span class="text-gradient">Visibilidade Real para o Negócio</span>
          </h2>
          <p class="section-text">
            Conecte a estratégia à execução sem o ruído técnico. Acompanhe cada passo do desenvolvimento traduzido para a linguagem que importa: o valor entregue.
          </p>
          
          <div class="features-list">
            <div class="feature-item" v-for="feature in features" :key="feature.id">
              <div class="feature-icon-wrapper" :class="`hover-${feature.color}`">
                <span class="material-symbols-outlined" :style="{ color: `var(--accent-${feature.color})` }">
                  {{ feature.icon }}
                </span>
              </div>
              <div>
                <h4 class="feature-title-large">{{ feature.title }}</h4>
                <p class="feature-description">{{ feature.description }}</p>
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
  name: 'ValuePortalSection',
  data() {
    return {
      tasks: [
        {
          id: 1,
          icon: 'payments',
          color: 'blue',
          title: 'Checkout Transparente',
          subtitle: 'Implementação Core',
          status: 'Concluído',
          statusColor: 'green'
        },
        {
          id: 2,
          icon: 'shield',
          color: 'purple',
          title: 'Validação Anti-Fraude',
          subtitle: 'Regras de Negócio',
          status: 'Em Teste',
          statusColor: 'yellow'
        },
        {
          id: 3,
          icon: 'bug_report',
          color: 'red',
          title: 'Incidentes GIT',
          subtitle: 'Rastreabilidade & Resolução',
          status: '0 pendentes',
          statusColor: 'green',
          incidents: {
            pending: 0,
            resolved: 22
          }
        },
        {
          id: 4,
          icon: 'receipt_long',
          color: 'gray',
          title: 'Emissão de NF-e',
          subtitle: 'Integração Externa',
          status: 'Backlog',
          statusColor: 'gray'
        }
      ],
      features: [
        {
          id: 1,
          icon: 'check_circle',
          color: 'blue',
          title: 'Validação Funcional Simplificada',
          description: 'O cliente visualiza o fluxo de negócio limpo, sem complexidade técnica. Aprove ou solicite ajustes com base no comportamento esperado, não em código.'
        },
        {
          id: 2,
          icon: 'sync_alt',
          color: 'green',
          title: 'Acompanhamento em Tempo Real',
          description: 'Conexão direta e transparente entre o que está sendo desenvolvido no Git e a regra de negócio original. Veja o status real de cada requisito.'
        },
        {
          id: 3,
          icon: 'visibility',
          color: 'primary',
          title: 'Transparência Total',
          description: 'Redução drástica de lacunas de comunicação. Diretoria, POs e Engenharia falam a mesma língua através de dashboards unificados de progresso.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.value-portal-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--border-secondary);
}

.value-portal-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  opacity: 0.1;
  pointer-events: none;
}

.portal-visual {
  position: relative;
}

.visual-glow {
  position: absolute;
  top: -3rem;
  left: -3rem;
  width: 16rem;
  height: 16rem;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 50%;
  filter: blur(80px);
}

.portal-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(40px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  position: relative;
  z-index: 10;
}

.card-header-custom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.card-title-custom {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.card-subtitle {
  color: var(--text-tertiary);
  font-size: 0.75rem;
}

.status-online {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-dot {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: var(--accent-green);
  margin-right: 0.375rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.metric-card {
  background: var(--bg-tertiary);
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border-secondary);
}

.metric-label {
  color: var(--text-tertiary);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.metric-bar {
  height: 0.375rem;
  width: 100%;
  background: var(--slate-700);
  border-radius: 9999px;
  margin-top: 0.5rem;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  border-radius: 9999px;
}

.metric-fill.blue {
  background: var(--accent-blue);
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

.metric-dots {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
}

.metric-dots .dot {
  height: 0.375rem;
  width: 33.333333%;
  background: var(--slate-700);
  border-radius: 9999px;
}

.metric-dots .dot.active {
  background: var(--accent-green);
  box-shadow: 0 0 5px rgba(52, 211, 153, 0.5);
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: var(--bg-tertiary);
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.task-item:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-primary);
}

.task-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.task-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-icon.bg-blue {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-blue);
}

.task-icon.bg-purple {
  background: rgba(168, 85, 247, 0.1);
  color: var(--accent-purple);
}

.task-icon.bg-gray {
  background: rgba(71, 85, 105, 0.5);
  color: var(--slate-400);
}

.task-icon.bg-red {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

:global(.light) .task-icon.bg-red {
  background: rgba(220, 38, 38, 0.1);
  color: #dc2626;
  border: 1px solid rgba(220, 38, 38, 0.3);
}

.task-icon .material-symbols-outlined {
  font-size: 0.875rem;
}

.task-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0;
}

.task-subtitle {
  font-size: 0.625rem;
  color: var(--text-tertiary);
}

.task-status {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.status-green {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-yellow {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-yellow);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.status-gray {
  background: rgba(71, 85, 105, 0.2);
  color: var(--slate-400);
  border: 1px solid rgba(71, 85, 105, 0.3);
}

/* Incidents Badge */
.incidents-badge {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.incident-pending {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: rgba(100, 116, 139, 0.1);
  color: var(--text-tertiary);
  border: 1px solid rgba(100, 116, 139, 0.2);
}

:global(.light) .incident-pending {
  background: rgba(71, 85, 105, 0.1);
  color: #475569;
  border-color: rgba(71, 85, 105, 0.2);
}

.incident-resolved {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

:global(.light) .incident-resolved {
  background: rgba(5, 150, 105, 0.1);
  color: #059669;
  border-color: rgba(5, 150, 105, 0.2);
}

.badge-custom {
  display: inline-block;
  background: rgba(96, 165, 250, 0.1);
  color: var(--accent-blue);
  border: 1px solid rgba(96, 165, 250, 0.2);
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.2);
}

.section-title-large {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  color: var(--text-primary);
}

.section-text {
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-item {
  display: flex;
  gap: 1.25rem;
}

.feature-icon-wrapper {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: var(--slate-800);
  border: 1px solid var(--slate-700);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-icon-wrapper:hover {
  transform: scale(1.1);
}

.feature-icon-wrapper.hover-blue:hover {
  border-color: rgba(96, 165, 250, 0.5);
}

.feature-icon-wrapper.hover-green:hover {
  border-color: rgba(52, 211, 153, 0.5);
}

.feature-icon-wrapper.hover-primary:hover {
  border-color: rgba(99, 102, 241, 0.5);
}

.feature-title-large {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.feature-description {
  color: var(--text-tertiary);
  line-height: 1.75;
}
</style>
