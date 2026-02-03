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
        <img 
          src="/images/diagrama_de_ecossistema_prodabelflow.png" 
          alt="ProdabelFlow Visão Executiva"
          class="executive-vision-image"
        />
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.executive-vision-image {
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.executive-vision-image:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
}

:global(.light) .executive-vision-image {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

:global(.light) .executive-vision-image:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}
</style>
