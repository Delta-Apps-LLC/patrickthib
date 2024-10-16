<template>
  <div>
    <div class="centered">
      <SectionHeader title="Publications, Interviews and Quotes" />
      <v-row style="margin-bottom: 20px; align-items: start;">
        <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
          <MiniHeader title="Publications" />
          <Dropdown :items="publications" :anchor="anchor"
            :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
          />
        </v-col>

        <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
            <MiniHeader title="Interviews and Quotes" />
            <Dropdown :items="interviews" :anchor="anchor" />
        </v-col>
      </v-row>
    </div>

    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'
import Dropdown from '~/components/Dropdown.vue';
import { publications } from '~/static/data';
import { interviews } from '~/static/data';

export default {
  name: 'PublicationsPage',

  head() {
    return {
      title: 'Publications - Patrick Thibaudeau',
      meta: [
        { hid: 'publications-description', name: 'description', content: 'Patrick Thibaudeau publications page; see Patrick\'s publications, including articles, interviews, and quotes' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, articles, publications, interviews, quotes' }
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
    SectionHeader,
    BottomBuffer,
    Dropdown
  },

  data () {
    return {
      anchor: this.$route.params.hash,
      publications: publications,
      interviews: interviews,
      windowWidth: window.innerWidth
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>