<template>
  <div class="app-wrapper">
    <BackgroundEffects />
    <Navbar />
    <HeroSection />
    <IngestionSection />
    <ExecutiveVisionSection />
    <CollaborationSection />
    <ValuePortalSection />
    <GovernanceSection />
    <CompetitiveSection />
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import BackgroundEffects from './components/BackgroundEffects.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import IngestionSection from './components/IngestionSection.vue'
import ExecutiveVisionSection from './components/ExecutiveVisionSection.vue'
import CollaborationSection from './components/CollaborationSection.vue'
import ValuePortalSection from './components/ValuePortalSection.vue'
import GovernanceSection from './components/GovernanceSection.vue'
import CompetitiveSection from './components/CompetitiveSection.vue'
import Footer from './components/Footer.vue'
import { useScrollReveal } from './composables/useScrollReveal'

export default {
  name: 'App',
  components: {
    BackgroundEffects,
    Navbar,
    HeroSection,
    IngestionSection,
    ExecutiveVisionSection,
    CollaborationSection,
    ValuePortalSection,
    GovernanceSection,
    CompetitiveSection,
    Footer
  },
  setup() {
    useScrollReveal()
    
    return {}
  }
}
</script>
