<template>
  <div>
    <SectionHeader :title="tagline" />
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
          text: 'Hi, I\'m Patrick Thibaudeau. As a dedicated sustainability leader with a passion for green design, my journey in the field has been shaped by a steadfast commitment to creating spaces that not only meet the needs of the present but also embrace a responsible and environmentally conscious future.\n\nThroughout my entire career, I have consistently championed the principles of sustainability, recognizing the crucial role architecture plays in mitigating environmental impact. From incorporating energy-efficient technologies to advocating for eco-friendly materials, every project I undertake reflects a deep-seated belief in the transformative power of green design.\n\nEngaging in the relentless pursuit of sustainable practices has not only defined my professional identity but has become a personal mission, as I strive to contribute meaningfully to the collective efforts in building a harmonious coexistence between architecture and the environment.',
          image: '/images/profile.jpg',
        },
      ],
      tagline: 'Sustainable Spaces, Endless Possibilities',
      tedTalkURL: 'https://www.youtube.com/embed/edmrxrdDePQ?si=JIS9tDKbKdcgxltg',
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>
