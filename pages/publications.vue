<template>
  <div>
    Publications Page

    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'

export default {
  name: 'PublicationsPage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    SectionHeader,
    BottomBuffer
  },

  data () {
    return {

    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>