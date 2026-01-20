<template>
  <div class="background-effects">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundEffects'
}
</script>

<style scoped>
.background-effects {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  mix-blend-mode: screen;
}

.blob-1 {
  top: -10%;
  left: 20%;
  width: 40rem;
  height: 40rem;
  background: rgba(99, 102, 241, var(--glow-opacity));
}

.blob-2 {
  bottom: -10%;
  right: 10%;
  width: 35rem;
  height: 35rem;
  background: rgba(59, 130, 246, var(--glow-opacity));
  filter: blur(100px);
}

.blob-3 {
  top: 40%;
  left: -10%;
  width: 25rem;
  height: 25rem;
  background: rgba(30, 41, 59, var(--glow-opacity));
  filter: blur(80px);
}

/* Light mode adjustments */
[data-theme="light"] .blob-1 {
  background: rgba(99, 102, 241, 0.08);
}

[data-theme="light"] .blob-2 {
  background: rgba(59, 130, 246, 0.08);
}

[data-theme="light"] .blob-3 {
  background: rgba(148, 163, 184, 0.1);
}
</style>
