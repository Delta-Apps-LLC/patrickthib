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
      awardsAchievements: [
        {
          title: 'Outstanding Contribution Award',
          url: 'outstanding-contribution-award.png',
          details: 'This is in recognition of the innovation and overall scientific quality of the paper presented during the WSBE24 Conference, held on 12-14 June 2024, and, thus, contributing to knowledge development and exchange in the field.',
          year: [2024]
        },
        {
          title: 'Most Inspirational & Progressive Architecture Firm - USA',
          url: null,
          details: 'BUILD Magazine Awards,',
          year: [2023],
        },
        {
          title: 'Gorecki Alumni Center Livable Building National Finalist',
          url: null,
          details: 'UC Berkley Center for the Built Environment. Cited for its exceptional post occupancy evaluation results which I led.',
          year: [2021],
        },
        {
          title: 'CSI National Environmental Stewardship Award',
          url: null,
          details: 'Two different firms, HGA and JLG for promoting environmental awareness in the industry, educating others on the benefits of sustainable design and practicing sustainable design.',
          year: [2021, 2007],
        },
        {
          title: 'Environmental Leader 75',
          url: null,
          details: 'The annual Environmental Leader 75 is a list of the top 75 executives in environmental and sustainability management who are “driving their companies, and the industry itself, forward and are making a difference,” as selected by the Editorial and Management team at Business Sector Media.',
          year: [2018],
        },
        {
          title: 'Wolf Ridge Learning Center',
          url: null,
          details: 'Living Building Challenge Full Certification. First in the world for a renovation project. Forest Stewardship Council (FSC) 2018 Leadership Award, Minnesota Clean Energy Community - Town of Crystal Bay, presented by Minnesota Dept of Commerce (Recognized for having the highest per capita renewable energy of any community in the United States. WRELC was a significant portion of that renewable energy)',
          year: [2018],
        },
        {
          title: 'East LA College, Language Arts and Humanities Building',
          url: null,
          details: 'Two Sustainable Innovation Awards, by USGBC LA Chapter',
          year: [2017],
        },
        {
          title: 'LA Harbor College',
          url: null,
          details: 'SCUP National, CCCF, USGBC LA Chapter: Energy, Innovation, Outstanding Project of the Year',
          year: [2016],
        },  
        {
          title: 'LEED FELLOW',
          url: null,
          details: 'Green Business Certification Inc. (GBCI)',
          year: [2014],
        },
        {
          title: 'CSI President\'s Certificate',
          url: null,
          details: 'Recognized for teaching the Introduction to Construction Documents seminar.',
          year: [2008],
        },
        {
          title: 'National Environmental Stewardship Award',
          url: null,
          details: 'Firm award achieved under my leadership.',
          year: [2007],
        },
        {
          title: 'Wisconsin Sustainability Award',
          url: null,
          details: 'Pier Wisconsin Milwaukee, Wisconsin, specifications for sustainable products with special emphasis on waterproofing systems and garden roof design.',
          year: [2007],
        },
        {
          title: 'CSI (Minneapolis St. Paul) Environmental Stewardship Award',
          url: null,
          details: 'Received on behalf of HGA for promoting environmental awareness in the industry, educating others on the benefits of sustainable design and practicing sustainable design.',
          year: [2006],
        },
        {
          title: 'Rebecca L Foss Environmental Stewardship Award',
          url: null,
          details: 'Firm award achieved under my leadership.',
          year: [2006],
        },
        {
          title: 'Other Project Awards of Excellence',
          url: null,
          details: 'Walker Arts Center; CSI Principles Award - 2004; MDA-MDH Real Estate Association Award; Como ERC; Pantages Theater; Como Pedestrian Bridge',
          year: [],
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