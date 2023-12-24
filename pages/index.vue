<template>
  <div>
    <span class="header main-white centered text-center"
      data-aos="zoom-in"
      data-aos-duration="2500"
    >
      {{ tagline }}
    </span>

    <PictureCard :items="introPictureCards" />

    <div class="centered">
      <span class="small-header main-white text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Awards and Achievements
      </span>

      <v-expansion-panels class="expand-group main-white text-font"
        data-aos="fade-in"
        data-aos-duration="2500"
        style="margin-bottom: 40px;"
      >
        <v-expansion-panel
          v-for="(item, i) in awardsAchievements"
          :key="i"
        >
          <v-expansion-panel-header>
            <span style="width: 90%;">{{ item.title }}</span>
            <v-spacer />
            <span>{{ item.year }}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>{{ item.details }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="centered">
      <span class="small-header main-white text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Recent Highlights
      </span>
      <iframe style="margin: 0 auto 40px auto;"
        data-aos="fade-in"
        data-aos-duration="2500"
        :width="windowWidth < 650 ? '90%' : windowWidth < 900 ? '70%' : '60%'"
        :height="windowWidth < 650 ? '240' : '340'"
        :src="tedTalkURL"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <div class="centered">
      <span class="small-header main-white text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Engagement and Involvement
      </span>
      <v-row style="margin-bottom: 60px;">
        <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
          <span class="mini-header main-white text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Memberships
          </span>
          <v-expansion-panels class="expand-group main-white text-font"
            data-aos="fade-in"
            data-aos-duration="2500"
            :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
          >
            <v-expansion-panel
              v-for="(item, i) in memberships"
              :key="i"
            >
              <v-expansion-panel-header>
                <span>{{ item.title }}</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>{{ item.details }}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
          <span class="mini-header main-white text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Conferences
          </span>
          <v-expansion-panels class="expand-group main-white text-font"
            data-aos="fade-in"
            data-aos-duration="2500"
          >
            <v-expansion-panel
              v-for="(item, i) in conferences"
              :key="i"
            >
              <v-expansion-panel-header>
                <span>{{ item.title }}</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>{{ item.details }}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import PictureCard from '~/components/PictureCard.vue'

export default {
  name: 'IndexPage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    PictureCard
  },

  data () {
    return {
      introPictureCards: [
        {
          text: 'Hi, I\'m Patrick Thibaudeau. As a dedicated architect with a passion for sustainability and green design, my journey in the field has been shaped by a steadfast commitment to creating spaces that not only meet the needs of the present but also embrace a responsible and environmentally conscious future.\n\nThroughout my entire career, I have consistently championed the principles of sustainability, recognizing the crucial role architecture plays in mitigating environmental impact. From incorporating energy-efficient technologies to advocating for eco-friendly materials, every project I undertake reflects a deep-seated belief in the transformative power of green design.\n\nEngaging in the relentless pursuit of sustainable practices has not only defined my professional identity but has become a personal mission, as I strive to contribute meaningfully to the collective efforts in building a harmonious coexistence between architecture and the environment.',
          image: '/images/profile.jpg',
        },
      ],
      tagline: 'Sustainable Spaces, Endless Possibilities',
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
      tedTalkURL: 'https://www.youtube.com/embed/edmrxrdDePQ?si=JIS9tDKbKdcgxltg',
      memberships: [
        {
          title: 'USGBC National - Firm',
          details: '',
        },
        {
          title: 'USGBC Local Chapter',
          details: '',
        },
        {
          title: 'Internal Living Futures Institute',
          details: '',
        },
        {
          title: 'UC Berkley Center for the Built Environment',
          details: '',
        },
        {
          title: 'Design Futures Council',
          details: '',
        },
        {
          title: 'AIA Large Firm Round Table',
          details: '',
        },
      ],
      conferences: [
        {
          title: 'Greenbuild',
          details: '',
        },
        {
          title: 'Living Futures Conference',
          details: '',
        },
        {
          title: 'DFC Sustainability Summitt',
          details: '',
        },
        {
          title: 'Net Zero Sumitt - Michigan',
          details: '',
        },
        {
          title: 'Carbon Positive or other',
          details: '',
        },
        {
          title: 'LFRT SDL meeting',
          details: '',
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
