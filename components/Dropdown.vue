<template>
  <div>
    <div class="dropdown-filters-group"
      data-aos="fade-in"
      data-aos-duration="2500"
    >
      <div style="max-width: 160px;">
        <v-select
          id="filter-select"
          :items="filterItems"
          label="Sort by:"
          v-model="selected"
          item-text="text"
          item-value="value"
          menu-props="auto"
          prepend-inner-icon="mdi-sort"
          hide-details
          dense
        ></v-select>
      </div>

      <v-btn text class="expandBtn main-font" @click="toggleAllPanels()">{{ expanded ? 'Close All' : 'Expand All' }}</v-btn>
    </div>
    
    <v-expansion-panels class="expand-group main-white text-font"
      data-aos="fade-in"
      data-aos-duration="2500"
      v-model="expandedPanels"
      multiple
      hover
    >
      <v-expansion-panel
        v-for="(item, i) in displayedItems"
        :key="i"
      >
        <v-expansion-panel-header>
          <span style="width: 85%;" v-if="item.url">
            <a target="_blank" :href="item.url">{{ item.title }}</a>
          </span>
          <span style="width: 85%;" v-else>{{ item.title }}</span>
          <v-spacer />
          <span>{{ item.year?.join(', ') }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>{{ item.details }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn class="load-more-btn main-font"
      @click="loadMoreItems"
      text
      :disabled="displayedItems.length == items.length"
    >Load More...</v-btn>
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
      expandedPanels: [],
      expanded: false,
      filterItems: [
        { value: 1, text: 'Alphabetical' },
        { value: 2, text: 'Date' },
      ],
      selected: null,
      itemsToDisplay: 10,
      windowWidth: window.innerWidth,
    }
  },

  props: {
    items: Array,
  },

  watch: {
    selected (oldValue, newValue) {
      if (oldValue === 1) {
        this.items = this.items.sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });
      } else if (oldValue === 2) {
        this.items = this.items.sort((a, b) => b.year[0] - a.year[0]);
      }
    }
  },

  methods: {
    toggleAllPanels() {
      if (this.expandedPanels.length === this.items.length) {
        // Close all panels if all are open
        this.expanded = false
        this.expandedPanels = [];
      } else {
        // Open all panels
        this.expanded = true
        this.expandedPanels = this.items.map((item, index) => index);
      }
    },

    loadMoreItems() {
      this.itemsToDisplay += 10;
    }
  },

  computed: {
    displayedItems() {
      return this.items.slice(0, this.itemsToDisplay);
    }
  }
}
</script>

<style scoped>
@import '~/assets/styles.css';

.dropdown-filters-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  float: right;
}

#filter-select {
  background-color: #858282;
}

.load-more-btn {
  display: flex;
  margin: 10px auto;
}

</style>