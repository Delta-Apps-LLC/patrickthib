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
        v-for="(item, i) in properList"
        :key="i"
      >
        <v-expansion-panel-header>
          <span style="width: 85%;" v-if="item.url">
            <a target="_blank" :href="item.url">{{ item.title }}</a>
          </span>
          <span style="width: 85%;" v-else>{{ item.title }}</span>
          <v-spacer />
          <span>{{ item.year?.join(', ') }}{{ item.duration }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content style="white-space: pre-wrap;">{{ item.details }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <div class="load-buttons-wrapper">
      <v-btn class="load-more-btn main-font"
        @click="loadMoreItems()"
        text
        :disabled="properList.length === items.length"
      >Load More</v-btn>
  
      <v-btn class="load-more-btn main-font"
        @click="showAllItems()"
        text
        :disabled="properList.length === items.length"
      >Show All</v-btn>
    </div>
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
        { value: 0, text: 'Reset' },
        { value: 1, text: 'Alphabetical' },
        { value: 2, text: 'Date' },
      ],
      selected: 0,
      itemsToDisplay: 10,
      windowWidth: window.innerWidth,
    }
  },

  props: {
    items: Array,
  },

  watch: {
    selected(newValue) {
      if (newValue === 0) {
        this.properList = this.items.slice(0, this.itemsToDisplay);
      } else if (newValue === 1) {
        this.properList = this.alphabeticalOrder;
      } else if (newValue === 2) {
        this.properList = this.dateOrder;
      }
    },

    itemsToDisplay() {
      if (this.selected === 0) {
        this.properList = this.items.slice(0, this.itemsToDisplay);
      } else if (this.selected === 1) {
        this.properList = this.alphabeticalOrder;
      } else if (this.selected === 2) {
        this.properList = this.dateOrder;
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
    },

    showAllItems() {
      this.itemsToDisplay = this.items.length
    }
  },

  computed: {
    properList() {
      if (this.selected === 0) {
        return this.items.slice(0, this.itemsToDisplay);
      } else if (this.selected === 1) {
        return this.alphabeticalOrder;
      } else if (this.selected === 2) {
        return this.dateOrder;
      }
      return this.items.slice(0, this.itemsToDisplay);
    },

    alphabeticalOrder () {
      let alphaItems = [...this.items];
      alphaItems = alphaItems.sort((a, b) => {
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
      return alphaItems.slice(0, this.itemsToDisplay);
    },

    dateOrder () {
      let dateItems = [...this.items];
      dateItems = dateItems.sort((a, b) => {
        const yearA = a.year ? a.year[0] : 0;
        const yearB = b.year ? b.year[0] : 0;
        return yearB - yearA;
      });
      return dateItems.slice(0, this.itemsToDisplay);
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

.load-buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px auto;
}

</style>