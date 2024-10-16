<template>
  <div>
    <div class="centered">
      <SectionHeader title="Presentations" />
      <Dropdown :items="presentations" :anchor="anchor" />
    </div>

    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import Dropdown from '~/components/Dropdown.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'
import { presentations } from '~/static/data';

export default {
  name: 'PresentationsPage',

  head() {
    return {
      title: 'Presentations - Patrick Thibaudeau',
      meta: [
        { hid: 'presentations-description', name: 'description', content: 'Patrick Thibaudeau presentations page; see Patrick\'s professional presentations throughout his career' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, presentation, speaker, keynote' }
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
    Dropdown,
    SectionHeader,
    BottomBuffer
  },

  data () {
    return {
      anchor: this.$route.params.hash,
      presentations: presentations,
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>