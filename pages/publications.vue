<template>
  <div>
    <div class="centered">
      <SectionHeader title="Publications" />
      <Dropdown :items="publications" />
    </div>

    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'
import Dropdown from '~/components/Dropdown.vue';

export default {
  name: 'PublicationsPage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    SectionHeader,
    BottomBuffer,
    Dropdown
  },

  data () {
    return {
      publications: [
        {
          title: '7 Ways to Change \'Business as Usual\': The Theodore Roosevelt Presidential Library',
          url: 'https://www.bdcnetwork.com/ThibaudeauTRPL2024',
          details: 'Building Design + Construction Magazine online. Invited by publisher to author this article.',
          year: [2024],
        },
        {
          title: 'Soil Carbon Sequestration in Building Life Cycle Assessment: Offsetting Measure or Site Impact',
          url: 'soil-carbon-sequestrianism-in-building-life-cycle-assessment.pdf',
          details: 'Matt Roberts and Patrick Thibaudeau, World Sustainable Built Environment Conference (WSBE24)',
          year: [2024],
        },
      ],
      windowWidth: window.innerWidth
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>