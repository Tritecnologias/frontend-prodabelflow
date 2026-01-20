<template>
  <nav class="navbar-custom glass-panel">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-brand">
          <div class="brand-icon">
            <span class="material-symbols-outlined">hub</span>
          </div>
          <span class="brand-text">ProdabelFlow</span>
        </div>

        <div class="navbar-links d-none d-md-flex">
          <a href="#" class="nav-link">Funcionalidades</a>
          <a href="#" class="nav-link">Soluções</a>
          <a href="#" class="nav-link">Preços</a>
          <a href="#" class="nav-link">Docs</a>
        </div>

        <div class="navbar-actions">
          <ThemeToggle />
          <a href="#" class="btn-login d-none d-sm-block">Entrar</a>
          <button class="btn-primary-custom">
            <span>Começar Agora</span>
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'

export default {
  name: 'Navbar',
  components: {
    ThemeToggle
  }
}
</script>

<style scoped>
.navbar-custom {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--border-secondary);
  transition: all 0.3s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border-radius: 0.5rem;
  color: white;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
}

.brand-icon .material-symbols-outlined {
  font-size: 20px;
}

.brand-text {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  color: var(--text-primary);
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-tertiary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-login {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-tertiary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.btn-login:hover {
  color: var(--text-primary);
}

.btn-primary-custom {
  background: var(--primary);
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
}

.btn-primary-custom:hover {
  background: var(--primary-hover);
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4);
}

.btn-primary-custom .material-symbols-outlined {
  font-size: 0.875rem;
}
</style>
