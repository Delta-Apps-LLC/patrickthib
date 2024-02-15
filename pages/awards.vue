<template>
  <div>
    <div class="centered">
      <SectionHeader title="Awards and Achievements" />
      <Dropdown :items="awardsAchievements" />
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

export default {
  name: 'AwardsPage',

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
      awardsAchievements: [
        {
          title: 'Environmental Leader 75',
          details: 'The annual Environmental Leader 75 is a list of the top 75 executives in environmental and sustainability management who are “driving their companies, and the industry itself, forward and are making a difference,” as selected by the Editorial and Management team at Business Sector Media.',
          year: 2018,
        },
        {
          title: 'LA Harbor College Outstanding Project of the Year, Energy and Innovation Awards',
          details: '',
          year: 2016,
        },
        {
          title: 'LA Harbor College SCUP Award',
          details: '',
          year: 2015,
        },
        {
          title: 'CCFC Award of Excellence',
          details: '',
          year: 2014,
        },
        {
          title: 'LEED FELLOW',
          details: 'Green Business Certification Inc. (GBCI)',
          year: 2014,
        },
        {
          title: 'National Environmental Stewardship Award',
          details: 'Firm award achieved under my leadership.',
          year: 2007,
        },
        {
          title: 'Rebecca L Foss Environmental Stewardship Award',
          details: 'Firm award achieved under my leadership.',
          year: 2006,
        },
      ],
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>