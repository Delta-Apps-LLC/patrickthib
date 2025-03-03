<template>
  <div>
    <SideBySide :src="portrait" />
    <BottomBuffer style="margin-bottom: 60px;" />
    <PictureCard id="about-me" :items="introPictureCards" />

    <div class="centered">
      <SectionHeader title="Top Highlights" />

      <MiniHeader id="tedx-talk" title="TEDxFargo" />
      <iframe style="margin: 0 auto 20px auto;"
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

      <BottomBuffer />

      <MiniHeader id="featured-magazine" title="Innovator Magazine" />
      <img
        src="innovator-magazine.jpeg"
        :width="windowWidth < 700 ? '70%' : '60%'"
      />
      <div class="links-list text-font">
        <a target="_blank" href="https://innovator-magazine.com/top-innovators-thought-leaders-from-all-over-the-globe/">View Article</a>
      </div>
      
      <BottomBuffer />

      <MiniHeader id="featured-award" title="Outstanding Contribution Award" />
      <img
        src="outstanding-contribution-award.png"
        :width="windowWidth < 700 ? '70%' : '60%'"
      />
      <div class="links-list text-font">
        <a target="_blank" href="SCS_WORLDSBE-FINAL.pdf">View Article</a>
        <a target="_blank" href="WSBE-2024-SCS.pdf">View Presentation</a>
      </div>

    </div>

    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import PictureCard from '~/components/PictureCard.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'
import MiniHeader from '~/components/MiniHeader.vue';
import SideBySide from '~/components/SideBySide.vue';

export default {
  name: 'IndexPage',

  head() {
    return {
      title: 'Home - Patrick Thibaudeau',
      meta: [
        { hid: 'home-description', name: 'description', content: 'Patrick Thibaudeau home page; see Patrick\'s introduction, overview, and TEDxFargo presentation' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, TEDx, TEDxFargo, presentation, qualifications' }
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
    SectionHeader,
    BottomBuffer,
    MiniHeader,
    SideBySide
  },

  data () {
    return {
      introPictureCards: [
        {
          details: 'Patrick Thibaudeau is a true visionary in his field. His personal mission and professional identity is showing individuals, teams and organizations that they can achieve what they did not know was possible. He is an energetic leader with a unique blend of business savvy, design excellence and pioneering inventive ideas.\n\nHe lives and leads by the core values of respect, integrity and trust. He listens to needs and identifies future-focused solutions that are actionable today. Through thoughtful collaboration he helps people and organizations achieve ambitious outcomes and enduring impact previously unattainable. He has achieved more than 30 firsts including a first in the world achievement.\n\nPatrick is a frequent speaker at national and regional events and has been widely published on a variety of innovative, research-based topics. He was a founding member of the National Large Firm Roundtable commitment for carbon neutrality by 2030. His national influence continues with Large Firm Roundtable National Co-Chair, USGBC, Living Futures Institute, Design Futures Council and UC Berkeley Center for the Built Environment (CBE).\n\nPatrick has been an advisory board member for 12 years at CBE where he has been guiding strategic research planning.\n\nPatrick\'s work has been honored with numerous awards, including twice receiving the National Environmental Stewardship Award for his organizations.   He is a recognized national expert with multiple credentials including: LEED Fellow, Living Futures Accredited, Top 50 National Environmental Leader.',
          image: '/images/patrick-portrait-2.jpeg',
        },
      ],
      portrait: 'images/patrick-portrait.jpeg',
      // tagline: 'Master Your Future Mindset, Do Your Undoable',
      tedTalkURL: 'https://www.youtube.com/embed/edmrxrdDePQ?si=JIS9tDKbKdcgxltg',
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

html {
  scroll-behavior: smooth;
}

.links-list {
  padding: 12px;
}

.links-list a {
  padding: 0 10px;
}

</style>
