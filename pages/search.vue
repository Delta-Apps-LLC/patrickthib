<template>
    <div>
        <div class="centered">
            <SectionHeader :title="`Search Results For: ${searchText}`" />
            <LoadingSpinner v-if="searching" />
            <div v-if="!searching">
                <v-list class="results-list">
                    <div
                        class="result-item"
                        v-for="(result, i) in searchResults" :key="i"
                    >
                        <button @click="goToSearchItem(result)">
                            <div>
                                <p class="small-header"
                                    style="padding: 5px 0 !important;"
                                >{{ result.title ?? result.source }}</p>
                                <p class="mini-header"
                                    v-if="result.subtitle"
                                    style="padding-bottom: 0px !important;"
                                >{{ result.subtitle }}</p>
                                <p class="result-details text-font"
                                    v-if="result.details"
                                >{{ charLimit(result.details) }}</p>
                                <p class="result-details text-font"
                                    v-if="result.url"
                                >{{ result.url }}</p>
                                <p class="mini-header"
                                    v-if="result.author"
                                    style="padding-top: 15px !important;"
                                >{{ result.author }}</p>
                                <p class="text-font">
                                    {{ result.source }} 
                                    <span v-if="result.year ?? result.duration">
                                        {{ '&mdash; ' + result.year?.join(', ') ?? result.duration }}
                                    </span>
                                </p>
                            </div>
                        </button>
                        <div class="divider" v-if="i < searchResults.length - 1"></div>
                    </div>
                </v-list>
            </div>
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
  import LoadingSpinner from '~/components/LoadingSpinner.vue'
  
  export default {
    name: 'SearchPage',
  
    head() {
      return {
        title: 'Search - Patrick Thibaudeau',
        meta: [
          { hid: 'search-description', name: 'description', content: 'Patrick Thibaudeau search page for articles, presentations, awards, and more.' },
          { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, search, architecture, sustainability' }
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
      LoadingSpinner
    },
  
    data () {
      return {
        windowWidth: window.innerWidth,
      }
    },
  
    methods: {
        charLimit(text) {
            if (text.length > 300) return `${text.slice(0, 300)}...`
            else return text
        },

        goToSearchItem(item) {
            this.$router.push({ name: item.source.toLowerCase(), params: {
                hash: `${item.id}`,
            }})
        }
    },

    computed: {
        searchText () {
            return this.$store.state.search.searchText
        },

        searchResults () {
            return this.$store.state.search.searchResults
        },

        searching () {
            return this.$store.state.search.searching
        }
    }
  }
  </script>
  
  <style scoped>
  @import '~/assets/styles.css';

  .result-item {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  button {
    border-radius: 10px;
  }

  button:hover {
    background-color: #858282;
  }

  .result-details {
    width: 80%;
    margin: auto;
  }

  .divider {
    height: 1px;
    background-color: #ccc;
    margin: 30px 0 0 0;
    width: 100%;
  }
  
  </style>