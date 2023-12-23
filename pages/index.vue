<template>
  <div>
    <span class="header main-white centered text-center"
      data-aos="zoom-in"
      data-aos-duration="2500"
    >
      {{ tagline }}
    </span>

    <v-row class="picture-card-row" justify="center" align="center">
      <div class="picture-card main-white"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div class="centered">
          <img class="profile-img" src="~/assets/images/profile.jpg" />
        </div>
        <div class="picture-card-text text-font main-white">
          <span>{{ introduction }}</span>
        </div>
      </div>
    </v-row>

    <div class="centered">
      <span class="header main-white centered text-center"
        style="font-size: 25px !important; padding: 60px 0 0 0 !important;"
        data-aos="zoom-in"
        data-aos-duration="2500"
      >
        {{ awards }}
      </span>
      <v-divider />
      
    </div>

  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
export default {
  name: 'IndexPage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  data () {
    return {
      introduction: 'Hi, I\'m Patrick Thibaudeau. As a dedicated architect with a passion for sustainability and green design, my journey in the field has been shaped by a steadfast commitment to creating spaces that not only meet the needs of the present but also embrace a responsible and environmentally conscious future.\n\nThroughout my entire career, I have consistently championed the principles of sustainability, recognizing the crucial role architecture plays in mitigating environmental impact. From incorporating energy-efficient technologies to advocating for eco-friendly materials, every project I undertake reflects a deep-seated belief in the transformative power of green design.\n\nEngaging in the relentless pursuit of sustainable practices has not only defined my professional identity but has become a personal mission, as I strive to contribute meaningfully to the collective efforts in building a harmonious coexistence between architecture and the environment.',
      tagline: 'Sustainable Spaces, Endless Possibilities',
      awards: 'Awards and Achievements',
      windowWidth: window.innerWidth,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

@media (max-width: 600px) {
  .profile-img {
    margin-top: -150px;
  }
}

@media (min-width: 601px) {
  .profile-img {
    margin-left: -130px !important;
  }
}
.profile-img {
  max-height: 300px;
  border-radius: 3px;
  opacity: 0.95;
}

@media (max-width: 350px) {
  .profile-img {
    max-height: 250px;
  }
}

</style>
