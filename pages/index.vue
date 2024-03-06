<template>
  <div>
    <SectionHeader :title="tagline" />
    <BottomBuffer style="margin-bottom: 40px;" />
    <PictureCard :items="introPictureCards" />

    <div class="centered">
      <SectionHeader title="Recent Highlights" />
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

export default {
  name: 'IndexPage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    PictureCard,
    SectionHeader,
    BottomBuffer
  },

  data () {
    return {
      introPictureCards: [
        {
          text: 'Patrick Thibaudeau is a true visionary in his field. His personal mission and professional identity is showing individuals, teams and organizations that they can achieve high performance excellence they did not know was possible. He is an energetic leader with a unique blend of business savvy, design excellence and pioneering inventive ideas.\n\nPatrick is recognized as a national expert in sustainability (LEED Fellow 2015, Top 50 2018). Living and leading by the core values of respect, integrity and trust, he listens to his client\'s needs and identifies future-focused solutions that are actionable today. Through thoughtful collaboration he helps clients achieve ambitious outcomes and enduring impact previously unattainable. He has achieved more than 30 firsts.\n\nPatrick is a frequent speaker at national and regional events and has been widely published on a variety of innovative, research-based topics. He was an original member of the AIA National Large Firm Roundtable working toward carbon neutrality by 2030.His national influence continues today with several leading national organizations such as AIA Large Firm Roundtable, USGBC, Living Futures Institute, Design Futures Council.\n\nPatrick has been an advisory board member for 12 years at UC Berkeley Center for the Built Environment guiding research strategic planning. Patrick\'s work has been honored with numerous awards, including his twice receiving the National Environmental Stewardship Award.',
          image: '/images/profile.jpg',
        },
      ],
      tagline: 'Foresight Into the Future, Doing What Can\'t be Done',
      tedTalkURL: 'https://www.youtube.com/embed/edmrxrdDePQ?si=JIS9tDKbKdcgxltg',
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>
