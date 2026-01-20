<template>
  <section class="collaboration-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <h2 class="section-title">Fluxo de Colaboração & Perfis</h2>
          <p class="section-description">
            Ferramentas desenhadas para integrar todos os papéis no ciclo de vida do software.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-3" v-for="(profile, index) in profiles" :key="profile.id">
          <div class="profile-card scroll-reveal hover-lift" :class="`profile-${profile.color} delay-${(index + 1) * 100}`">
            <div class="profile-header">
              <div class="profile-icon icon-bounce" :class="`bg-${profile.color}`">
                <span class="material-symbols-outlined">{{ profile.icon }}</span>
              </div>
              <span class="profile-badge" :class="`badge-${profile.color}`">
                {{ profile.badge }}
              </span>
            </div>
            
            <h3 class="profile-title">{{ profile.title }}</h3>
            <p class="profile-description">{{ profile.description }}</p>
            
            <div class="progress-bar">
              <div class="progress-fill" :class="`fill-${profile.color}`" :style="{ width: profile.progress }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CollaborationSection',
  data() {
    return {
      profiles: [
        {
          id: 1,
          color: 'green',
          icon: 'terminal',
          badge: 'DEVS',
          title: 'Desenvolvedores',
          description: 'Implementação guiada por requisitos estruturados diretamente no fluxo de trabalho Git.',
          progress: '75%'
        },
        {
          id: 2,
          color: 'blue',
          icon: 'architecture',
          badge: 'ARQUITETOS',
          title: 'Arquitetos',
          description: 'Visão sistêmica, definição de fronteiras, componentes e padrões de projeto.',
          progress: '50%'
        },
        {
          id: 3,
          color: 'yellow',
          icon: 'assignment',
          badge: 'REQ/PO',
          title: 'Eng. Requisitos',
          description: 'Modelagem de necessidades de negócio e tradução para especificações técnicas.',
          progress: '85%'
        },
        {
          id: 4,
          color: 'purple',
          icon: 'bug_report',
          badge: 'QA/TESTERS',
          title: 'Testers',
          description: 'Validação contínua com casos de teste gerados automaticamente a partir da arquitetura.',
          progress: '66%'
        }
      ]
    }
  }
}
</script>


<style scoped>
.collaboration-section {
  padding: 5rem 0;
  overflow: hidden;
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
  max-width: 40rem;
}

.profile-card {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--border-primary);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  height: 100%;
}

.profile-card:hover {
  box-shadow: 0 0 20px rgba(52, 211, 153, 0.1);
}

.profile-card.profile-green:hover {
  border-color: rgba(52, 211, 153, 0.5);
  box-shadow: 0 0 20px rgba(52, 211, 153, 0.1);
}

.profile-card.profile-blue:hover {
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.1);
}

.profile-card.profile-yellow:hover {
  border-color: rgba(251, 191, 36, 0.5);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.1);
}

.profile-card.profile-purple:hover {
  border-color: rgba(192, 132, 252, 0.5);
  box-shadow: 0 0 20px rgba(192, 132, 252, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.profile-icon {
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-icon.bg-green {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.profile-icon.bg-blue {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-blue);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.profile-icon.bg-yellow {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-yellow);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.profile-icon.bg-purple {
  background: rgba(168, 85, 247, 0.1);
  color: var(--accent-purple);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.profile-badge {
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.badge-green {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.badge-blue {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-blue);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.badge-yellow {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-yellow);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.badge-purple {
  background: rgba(168, 85, 247, 0.1);
  color: var(--accent-purple);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.profile-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.profile-description {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.progress-bar {
  height: 0.25rem;
  width: 100%;
  background: var(--bg-tertiary);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 1s ease;
}

.fill-green {
  background: var(--accent-green);
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.8);
}

.fill-blue {
  background: var(--accent-blue);
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
}

.fill-yellow {
  background: var(--accent-yellow);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
}

.fill-purple {
  background: var(--accent-purple);
  box-shadow: 0 0 10px rgba(192, 132, 252, 0.8);
}

.profile-card:hover .progress-fill {
  animation: loading 1s ease-in-out infinite;
}
</style>
