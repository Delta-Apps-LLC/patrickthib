<template>
  <v-app dark>
    <v-app-bar
      class="app-bar"
      :src="require('@/assets/images/building-sun.jpg')"
      shrink-on-scroll
      fixed
      app
    >
      <button @click="toHome()" style="display: flex; margin: auto;">
        <img class="logo" src="~/assets/images/logo.png" />
      </button>
      <v-spacer />
      <div v-if="windowWidth >= 950"
        style="display: flex; margin: auto;"
      >
        <nuxt-link class="nav-btns main-font main-black"
          :class="btn.to == currentPage ? 'selected' : null"
          v-for="(btn, i) in items"
          :key="i"
          :to="btn.to"
        >
          {{ btn.title }}
        </nuxt-link>
      </div>

      <v-menu v-else-if="windowWidth < 950" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon
            v-on="on"
            v-bind="attrs"
            style="display: flex; margin: auto;"
          >
            <v-icon size="35" style="color: #2b2b2b;">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <div v-for="(btn, i) in items" :key="i" style="margin-bottom: 5px;">
            <nuxt-link class="nav-btns main-font main-white"
              :class="btn.to == currentPage ? 'selected-menu' : null"
              :to="btn.to"
            >
              {{ btn.title }}
            </nuxt-link>
          </div>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer class="footer"
      absolute
      app
    >
      <span>&copy; 2023</span>
      <v-spacer />
      <a id="linkedin-logo" :href="linkedinURL">
        <v-icon size="35">mdi-linkedin</v-icon>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  
  data () {
    return {
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Awards',
          to: '/awards'
        },
        {
          title: 'Experience',
          to: '/experience'
        },
        {
          title: 'Involvement',
          to: '/involvement'
        },
        {
          title: 'Presentations',
          to: '/presentations'
        },
        {
          title: 'Projects',
          to: '/projects'
        },
        {
          title: 'Publications',
          to: '/publications'
        },
      ],
      title: 'Patrick Thibaudeau',
      linkedinURL: 'https://www.linkedin.com/in/patrick-thibaudeau-leed-fellow-lfa-ccs-6348685/',
      windowWidth: window.innerWidth,
    }
  },

  methods: {
    toHome() {
      this.$router.push('/')
    },
  },

  computed: {
    currentPage () {
      return this.$route.path
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
  margin-left: 5px !important;
  padding: 4px 12px !important;
  border-radius: 4px;
  font-size: 18px;
  margin: auto;
  
  &&:hover {
    opacity: 0.7;
    background-color: #dbd3d3;
  }
}

.selected {
  opacity: 0.7;
  background-color: #dbd3d3;
}

.selected-menu {
  opacity: 0.7;
  background-color: #858282;
}

#linkedin-logo {
  &&:hover {
    opacity: 0.7;
  }
}

</style>