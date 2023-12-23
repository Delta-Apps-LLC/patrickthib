<template>
  <v-app dark>
    <v-app-bar
      class="app-bar"
      :src="require('@/assets/images/building-sun.jpg')"
      shrink-on-scroll
      fixed
      app
    >
      <button @click="toHome()">
        <!-- <v-toolbar-title class="nav-title main-font main-white">{{ title }}</v-toolbar-title> -->
        <img class="logo" src="~/assets/images/logo.png" />
      </button>
      <v-spacer />
      <a class="nav-btns main-font main-black"
        v-for="(btn, i) in items"
        :key="i"
        :href="btn.to"
      >
        {{ btn.title }}
      </a>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <v-btn @click="toLinkedin()" icon>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Projects',
          to: '/projects'
        },
        {
          title: 'Experience',
          to: '/experience'
        }
      ],
      title: 'Patrick Thibaudeau',
      linkedinURL: 'https://www.linkedin.com/in/patrick-thibaudeau-leed-fellow-lfa-ccs-6348685/',
    }
  },

  methods: {
    toHome() {
      this.$router.push('/')
    },

    toLinkedin() {
      window.open(this.linkedinURL)
    }
  }
}
</script>

<style scoped>
@import '~/assets/styles.css';

.nav-title {
  margin: auto !important;
}

.nav-btns {
  text-decoration: none;
  margin-left: 5px;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 18px;
  margin: auto;
  
  &&:hover {
    opacity: 0.7;
    background-color: #9a9a9a;
  }
}

</style>