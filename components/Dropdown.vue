<template>
  <div>
    <v-expansion-panels class="expand-group main-white text-font"
      data-aos="fade-in"
      data-aos-duration="2500"
    >
      <v-expansion-panel
        v-for="(item, i) in items"
        :key="i"
      >
        <v-expansion-panel-header>
          <span style="width: 85%;">{{ item.title }}</span>
          <v-spacer />
          <span>{{ item.year }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>{{ item.details }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
export default {
  name: 'DropdownComponent',

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
    items: Array,
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>