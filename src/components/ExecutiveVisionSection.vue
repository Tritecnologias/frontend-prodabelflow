<template>
  <section class="executive-vision-section">
    <div class="container">
      <!-- Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <div class="status-badge">
            <span class="pulse-dot">
              <span class="ping"></span>
              <span class="dot"></span>
            </span>
            <span class="badge-text">Governança & ROI</span>
          </div>
          <h2 class="section-title">
            ProdabelFlow <span class="gradient-text">Visão Executiva</span>
          </h2>
          <p class="section-description mx-auto">
            Uma colaboração sinérgica entre stakeholders e times de desenvolvimento, 
            maximizando o ROI corporativo através da nossa Inteligência Artificial integrada.
          </p>
        </div>
      </div>

      <!-- Flow Diagram -->
      <div class="flow-container">
        <div class="glow-background"></div>
        
        <div class="flow-card">
          <!-- Main Flow Grid -->
          <div class="row g-4 align-items-start flow-grid">
            <!-- Cliente & PO -->
            <div class="col-md-4">
              <div class="flow-node scroll-reveal delay-100">
                <div class="node-avatar-wrapper">
                  <div class="avatar-glow"></div>
                  <div class="node-avatar client-avatar">
                    <img 
                      src="/images/client-po.webp" 
                      alt="Cliente & PO"
                      class="avatar-photo"
                    />
                  </div>
                  <div class="avatar-badge">
                    <span class="material-symbols-outlined">assignment</span>
                  </div>
                </div>
                <div class="node-content">
                  <h3 class="node-title">Cliente & PO</h3>
                  <p class="node-subtitle">Requisitos & Visão</p>
                </div>
              </div>
            </div>

            <!-- ProdabelFlow Central -->
            <div class="col-md-4">
              <div class="flow-center scroll-reveal delay-200">
                <div class="center-hub">
                  <div class="hub-pulse-1"></div>
                  <div class="hub-pulse-2"></div>
                  <div class="hub-circle">
                    <span class="material-symbols-outlined hub-icon">hub</span>
                    <div class="ai-badge">
                      <span class="material-symbols-outlined">psychology</span>
                    </div>
                    <span class="hub-label">Inteligência<br/>Artificial</span>
                    <div class="hub-tools">
                      <div class="tool-item">
                        <span class="material-symbols-outlined">webhook</span>
                        <span>Git</span>
                      </div>
                      <div class="tool-item">
                        <span class="material-symbols-outlined">description</span>
                        <span>Docs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 class="center-title">ProdabelFlow</h2>
                <div class="center-divider"></div>
              </div>
            </div>

            <!-- Dev & QA Team -->
            <div class="col-md-4">
              <div class="flow-node scroll-reveal delay-300">
                <div class="node-avatar-wrapper">
                  <div class="avatar-glow"></div>
                  <div class="node-avatar dev-avatar">
                    <img 
                      src="/images/dev-team.webp" 
                      alt="Dev & QA Team"
                      class="avatar-photo"
                    />
                  </div>
                  <div class="avatar-badge left">
                    <span class="material-symbols-outlined">code</span>
                  </div>
                </div>
                <div class="node-content">
                  <h3 class="node-title">Dev & QA Team</h3>
                  <p class="node-subtitle">Sprint & Entrega</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CEO Section -->
          <div class="ceo-section scroll-reveal delay-400">
            <!-- CEO Avatar -->
            <div class="ceo-avatar-wrapper">
              <div class="ceo-avatar">
                <img 
                  src="/images/ceo.webp" 
                  alt="CEO Executive"
                  class="avatar-photo"
                />
              </div>
              <div class="ceo-badge">
                <span class="ceo-text">CEO</span>
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
  name: 'ExecutiveVisionSection'
}
</script>

<style scoped>
.executive-vision-section {
  padding: 5rem 0;
  overflow: hidden;
  position: relative;
}

/* Header */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 9999px;
  margin-bottom: 1.5rem;
}

.pulse-dot {
  position: relative;
  display: flex;
  height: 0.5rem;
  width: 0.5rem;
}

.pulse-dot .ping {
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: var(--accent-green);
  opacity: 0.75;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.pulse-dot .dot {
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  background: var(--accent-green);
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.badge-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
}

.gradient-text {
  background: linear-gradient(to right, var(--accent-purple), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  color: var(--text-tertiary);
  font-size: 1.125rem;
  line-height: 1.75;
  max-width: 42rem;
  margin-bottom: 3rem;
}

/* Flow Container */
.flow-container {
  position: relative;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
}

.glow-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(98, 34, 236, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

:global(.light) .glow-background {
  background: radial-gradient(circle, rgba(98, 34, 236, 0.05) 0%, transparent 70%);
}

.flow-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(12px);
  z-index: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

:global(.light) .flow-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Flow Grid */
.flow-grid {
  margin-bottom: 4rem;
  padding-top: 2rem;
}

/* Flow Nodes */
.flow-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.node-avatar-wrapper {
  position: relative;
}

.avatar-glow {
  position: absolute;
  inset: -0.25rem;
  background: linear-gradient(to right, var(--accent-yellow), var(--accent-orange));
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0.25;
  transition: opacity 0.3s;
}

.node-avatar-wrapper:hover .avatar-glow {
  opacity: 0.5;
}

.node-avatar {
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid rgba(251, 191, 36, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s;
}

.node-avatar:hover {
  transform: scale(1.05);
  border-color: var(--accent-yellow);
}

.avatar-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: var(--accent-yellow);
  border-radius: 50%;
  padding: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--bg-primary);
}

.avatar-badge.left {
  right: auto;
  left: -0.5rem;
}

.avatar-badge .material-symbols-outlined {
  font-size: 1rem;
  color: var(--bg-primary);
  font-weight: 700;
}

.node-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.node-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.node-subtitle {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent-yellow);
  margin: 0;
}

/* Center Hub */
.flow-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center-hub {
  position: relative;
  margin-bottom: 2rem;
}

.hub-pulse-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 20rem;
  background: rgba(59, 130, 246, 0.15);
  border-radius: 50%;
  animation: ping 3s ease-out infinite;
  opacity: 0.2;
}

:global(.light) .hub-pulse-1 {
  background: rgba(59, 130, 246, 0.1);
}

.hub-pulse-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16rem;
  height: 16rem;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
}

:global(.light) .hub-pulse-2 {
  background: rgba(59, 130, 246, 0.05);
  border-color: rgba(37, 99, 235, 0.3);
}

.hub-circle {
  position: relative;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--accent-blue);
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  z-index: 20;
}

:global(.light) .hub-circle {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
  background: linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, var(--bg-secondary) 100%);
}

.hub-icon {
  font-size: 2rem;
  color: var(--accent-blue);
}

.ai-badge {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid rgba(251, 191, 36, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ai-badge .material-symbols-outlined {
  font-size: 1.5rem;
  color: var(--accent-yellow);
}

.hub-label {
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
}

.hub-tools {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.25rem;
}

.tool-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--accent-yellow);
  font-size: 0.625rem;
  font-weight: 500;
}

.tool-item .material-symbols-outlined {
  font-size: 0.875rem;
}

.center-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
}

.center-divider {
  width: 4rem;
  height: 0.25rem;
  background: linear-gradient(to right, transparent, var(--accent-purple), transparent);
}

/* CEO Section */
.ceo-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.ceo-avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 20;
}

.ceo-avatar {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 4px solid var(--border-primary);
  padding: 0.375rem;
  background: var(--bg-card);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

:global(.light) .ceo-avatar {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.ceo-avatar::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(98, 34, 236, 0.15), transparent);
  border-radius: 50%;
}

:global(.light) .ceo-avatar::before {
  background: linear-gradient(to top, rgba(98, 34, 236, 0.08), transparent);
}

/* Avatar Photos */
.avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.node-avatar:hover .avatar-photo,
.ceo-avatar:hover .avatar-photo {
  transform: scale(1.1);
}

.ceo-badge {
  padding: 0.5rem 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.ceo-text {
  color: var(--text-primary);
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* Responsive */
@media (max-width: 768px) {
  .flow-grid {
    margin-bottom: 2rem;
  }

  .hub-circle {
    width: 11rem;
    height: 11rem;
  }

  .ceo-avatar {
    width: 8rem;
    height: 8rem;
  }
}
</style>
