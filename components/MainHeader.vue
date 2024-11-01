<template>
  <div>
    <span class="centered header main-white text-center"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {{ title }}
    </span>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
export default {
  name: 'MainHeaderComponent',

  created () {
    window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  data () {
    return {
      windowWidth: window.innerWidth,
    }
  },

  props: {
    title: String,
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>