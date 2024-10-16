<template>
  <div>
    <div class="centered">
      <SectionHeader title="Awards and Achievements" />
      <Dropdown :items="awards" :anchor="anchor" />
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
import { awards } from '../static/data'

export default {
  name: 'AwardsPage',

  head() {
    return {
      title: 'Awards - Patrick Thibaudeau',
      meta: [
        { hid: 'awards-description', name: 'description', content: 'Patrick Thibaudeau awards page; see Patrick\'s awards and achievements' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, awards, architecture, sustainability, LEED FELLOW, environment' }
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
      awards: awards,
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>../static/data