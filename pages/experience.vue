<template>
  <div>
    <div class="centered">
      <SectionHeader title="Employment" />
      <PictureCard :items="employment" :anchor="anchor" />
    </div>

    <div class="centered" style="margin-bottom: 20px;">
      <SectionHeader title="Service and Leadership" />
      <Dropdown :items="leadership" :anchor="anchor"/>
    </div>
    
    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import PictureCard from '~/components/PictureCard.vue'
import Dropdown from '~/components/Dropdown.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'
import { employment } from '~/static/data';
import { leadership } from '~/static/data';

export default {
  name: 'ExperiencePage',

  head() {
    return {
      title: 'Experience - Patrick Thibaudeau',
      meta: [
        { hid: 'experience-description', name: 'description', content: 'Patrick Thibaudeau experience page; see Patrick\'s professional experience, leadership, and service' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, experience, professional, architecture, sustainability, service, leadership' }
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
    PictureCard,
    Dropdown,
    SectionHeader,
    BottomBuffer
  },

  data () {
    return {
      anchor: this.$route.params.hash,
      employment: employment,
      leadership: leadership,
      windowWidth: window.innerWidth
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';


</style>