<template>
  <div>
    <div class="main-white"
      data-aos="zoom-in"
      data-aos-duration="1000"
      :class="windowWidth >= 750 ? 'header' : 'header-mobile'"
    >
      <span>
        <span :class="windowWidth >= 750 ? 'accent-letters' : 'accent-letters-mobile'">M</span>aster Your Future 
        <span :class="windowWidth >= 750 ? 'accent-letters' : 'accent-letters-mobile'">M</span>indset
      </span>
      <span>
        <span :class="windowWidth >= 750 ? 'accent-letters' : 'accent-letters-mobile'">D</span>o Your 
        <span :class="windowWidth >= 750 ? 'accent-letters' : 'accent-letters-mobile'">U</span>ndoable
      </span>
    </div>
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
}
</script>

<style scoped>
@import '~/assets/styles.css';

.header {
  font-family: 'Modal-Semibold', sans-serif;
  letter-spacing: 1.8px;
  font-size: 30px !important;
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;
  padding-bottom: 20px;
}

.header-mobile {
  font-family: 'Modal-Semibold', sans-serif;
  letter-spacing: 1.5px;
  font-size: 20px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: 20px;
}

.accent-letters {
  font-size: 2.4rem;
}

.accent-letters-mobile {
  font-size: 1.6rem;
}

</style>