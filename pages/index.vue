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
      <span class="header main-white text-center"
        style="font-size: 25px !important; padding: 50px 0 0 0 !important;"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {{ awardsTitle }}
      </span>
      <v-divider />
      <p>LEED FELLOW</p>
      <p>LFA</p>
      <p>CCS</p>
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
          image: 'images/profile.jpg',
        },
        {
          text: 'Hi, I\'m Patrick Thibaudeau. As a dedicated architect with a passion for sustainability and green design, my journey in the field has been shaped by a steadfast commitment to creating spaces that not only meet the needs of the present but also embrace a responsible and environmentally conscious future.\n\nThroughout my entire career, I have consistently championed the principles of sustainability, recognizing the crucial role architecture plays in mitigating environmental impact. From incorporating energy-efficient technologies to advocating for eco-friendly materials, every project I undertake reflects a deep-seated belief in the transformative power of green design.\n\nEngaging in the relentless pursuit of sustainable practices has not only defined my professional identity but has become a personal mission, as I strive to contribute meaningfully to the collective efforts in building a harmonious coexistence between architecture and the environment.',
          image: 'images/profile.jpg',
        },
      ],
      tagline: 'Sustainable Spaces, Endless Possibilities',
      awardsTitle: 'Awards and Achievements',
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';



</style>
