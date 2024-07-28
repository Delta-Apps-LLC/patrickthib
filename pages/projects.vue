<template>
  <div>
    <SectionHeader title="Nothing here yet, stay tuned!" />
    
    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'

export default {
  name: 'ProjectsPage',

  head() {
    return {
      title: 'Projects - Patrick Thibaudeau',
      meta: [
        { hid: 'projects-description', name: 'description', content: 'Patrick Thibaudeau projects page; see the projects that Patrick has lead throughout his career' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, project, projects' }
      ]
    }
  },

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    SectionHeader,
    BottomBuffer
  },

  data () {
    return {
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>