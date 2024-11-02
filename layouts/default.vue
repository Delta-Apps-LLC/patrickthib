<template>
  <v-app dark>
    <v-app-bar
      class="app-bar"
      :class="{ 'collapsed': isCollapsed }"
      :src="require('@/assets/images/building-sun.jpg')"
      shrink-on-scroll
      fixed
      app
    >
      <button @click="toHome()" style="display: flex; margin: auto;">
        <img class="logo" src="~/assets/images/logo.png" />
      </button>

      <v-spacer />

      <div class="nav-list" v-if="windowWidth >= 950">
        <nuxt-link class="nav-btns main-font main-black"
          :class="btn.to == currentPage ? 'selected' : null"
          v-for="(btn, i) in items"
          :key="i"
          :to="btn.to"
        >
          {{ btn.title }}
        </nuxt-link>

        <v-icon color="#2b2b2b">mdi-circle-small</v-icon>
        <nuxt-link class="nav-btns main-font main-black"
          :class="currentPage == '/contact' ? 'selected' : null"
          to="/contact"
          >
          Contact
        </nuxt-link>
        <v-icon color="#2b2b2b">mdi-circle-small</v-icon>

        <div style="float: right; display: flex; flex-direction: row;">
          <input
            @keypress.enter="search()"
            v-model="searchText"
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
          />
          <button @click="search()" id="search-btn">
            <v-icon color="black">mdi-magnify</v-icon>
          </button>
        </div>
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
        <v-list style="min-width: 250px;">
          <div v-for="(btn, i) in items" :key="i" style="margin-bottom: 5px;">
            <nuxt-link class="nav-btns main-font main-white"
              :class="btn.to == currentPage ? 'selected-menu' : null"
              :to="btn.to"
            >
              {{ btn.title }}
            </nuxt-link>
          </div>
          <v-divider />
          <nuxt-link class="nav-btns main-font main-white"
            :class="currentPage == '/contact' ? 'selected-menu' : null"
            to="/contact"
          >
            Contact
          </nuxt-link>

          <div class="mobile-search-wrapper">
            <div class="mobile-search-content">
              <input
                @click.stop
                @keypress.enter="search()"
                v-model="searchText"
                type="text"
                id="mobile-search"
                name="search"
                placeholder="Search..."
              />
              <button @click="search()" id="mobile-search-btn">
                <v-icon color="#e1e1e1">mdi-magnify</v-icon>
              </button>
            </div>
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
      <span>&copy; {{ new Date().getFullYear() }}, All Rights Reserved</span>
      <v-spacer />
      <!-- <a target="_blank" href="resume.pdf">Full Resume</a> -->
      <div style="margin-right: 10px;"></div>
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
    window.addEventListener('scroll', () => {
      this.isCollapsed = window.scrollY > 0;
    });
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
        {
          title: 'Recommendations',
          to: '/recommendations'
        },
        {
          title: 'Teaching and Research',
          to: '/teaching_and_research'
        },
      ],
      searchText: '',
      title: 'Patrick Thibaudeau',
      linkedinURL: 'https://www.linkedin.com/in/patrick-thibaudeau-leed-fellow-lfa-ccs-6348685/',
      isCollapsed: false,
      windowWidth: window.innerWidth,
    }
  },

  methods: {
    toHome() {
      this.$router.push('/')
    },

    async search() {
      if (this.searchText.length >= 2) {
        await this.$store.dispatch('search/search', { searchText: this.searchText})
        if (this.currentPage != '/search') {
          this.$router.push('/search')
        }
      }
    }
  },

  computed: {
    currentPage () {
      return this.$route.path
    },
  }
}
</script>

<style scoped>
@import '~/assets/styles.css';

.mobile-search-content {
  display: flex;
  flex-direction: row;
  margin: 12px 0 0 16px;
}

#mobile-search {
  color: #e1e1e1;
  font-size: 14px;
  height: 24px;
  border: solid #e1e1e1 1.5px;
  padding: 2px;
  border-radius: 4px;
}

#mobile-search-btn {
  margin-left: 8px;
}

.nav-list {
  max-width: 70% !important;
  display: inline-flex;
  margin: auto 0;
  flex-wrap: wrap;
}

.nav-title {
  margin: auto !important;
}

.nav-btns {
  text-decoration: none;
  margin-left: 5px !important;
  margin-top: 2px;
  padding: 4px 12px !important;
  border-radius: 4px;
  font-size: 18px;
}

.nav-btns:hover {
  opacity: 0.7;
  background-color: #dbd3d3;
}

#search-btn {
  margin-left: 2px;
}

#search-btn:hover {
  opacity: 0.6;
}

#search {
  font-size: 14px;
  height: 24px;
  border: solid #2b2b2b 1.5px;
  padding: 1px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin: auto;
}

.selected {
  opacity: 0.7;
  background-color: #dbd3d3;
}

.selected-menu {
  opacity: 0.7;
  background-color: #858282;
}

#linkedin-logo:hover {
  opacity: 0.7;
}

.app-bar.collapsed .nav-btns {
  padding: 2px 6px !important;
  font-size: 14px;
}

</style>