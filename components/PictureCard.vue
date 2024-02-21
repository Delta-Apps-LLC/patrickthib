<template>
    <div>
        <v-row class="picture-card-row"
            justify="center"
            align="center"
            v-for="(item, i) in items"
            :key="i"
        >
            <div :class="isEven(i) ? 'picture-card-even main-white' : 'picture-card-odd main-white'"
                data-aos="fade-in"
                data-aos-duration="3000"
            >
                <div :class="isHome && viewMore ? 'topped' : 'centered'" v-if="isEven(i) || windowWidth <= 600">
                    <img class="picture-card-img-even" :src="item.image" />
                </div>
                <div :class="isEven(i) ? 'picture-card-text-even text-font main-white' : 'picture-card-text-odd text-font main-white'">
                    <span v-if="item.title">{{ item.title }}<br></span>
                    <span v-if="item.subtitle">{{ item.subtitle }}<br><br></span>
                    <span>{{ item.text }}</span>

                    <div v-if="isHome"
                        style="margin-top: 20px;"
                    >
                        <div style="display: flex; justify-content: right !important;">
                            <v-btn class="main-font"
                                id="showMoreButton"
                                @click="showMore()"
                                text
                            >
                                {{ viewMore ? 'See Less' : 'See More' }}
                            </v-btn>
                        </div>
                        <div v-if="viewMore"
                            id="aboutMeSection"
                            style="width: 100%; margin: 20px 0 !important; display: flex; justify-content: left !important;"
                        >
                            <AboutMe />
                        </div>
                        <div v-if="viewMore" style="display: flex; justify-content: right !important;">
                            <v-btn class="main-font"
                                @click="showMore()"
                                text
                            >
                                See Less
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div class="centered" v-if="!isEven(i) && windowWidth > 600">
                    <img class="picture-card-img-odd" :src="item.image" />
                </div>
            </div>
        </v-row>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import AboutMe from '~/components/AboutMe.vue'

export default {
    name: 'PictureCardComponent',

    created () {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
        AOS.init()
    },

    components: {
        AboutMe
    },

    data () {
        return {
            viewMore: false,
            windowWidth: window.innerWidth,
        }
    },

    props: {
        items: Array,
    },

    methods: {
        isEven(i) {
            return i == 0 || i % 2 == 0
        },

        showMore() {
            this.viewMore = !this.viewMore
            if (this.viewMore) {
                this.$nextTick(() => {
                    const aboutMeElement = document.getElementById('aboutMeSection');
                    const offsetTop = aboutMeElement.offsetTop;
    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                    });
                })
            } else {
                const buttonElement = document.getElementById('showMoreButton');
                const offsetTop = buttonElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        },
    },

    computed: {
        isHome () {
            return this.$route.name == 'index'
        }
    }
}
</script>

<style scoped>
@import '~/assets/styles.css';

.picture-card-row {
    margin: 20px 0 20px 0;
}

.picture-card-even, .picture-card-odd {
    max-width: 80%;
    background-color: #2b2b2b;
    padding: 15px;
    border-radius: 3px;
}

@media (max-width: 600px) {
    .picture-card-row {
        margin-top: 160px !important;
    }

    .picture-card-even, .picture-card-odd {
        display: flex;
        flex-direction: column;
    }

    .picture-card-text-even, .picture-card-text-odd {
        white-space: pre-line;
        margin: 5px !important;
    }

    .picture-card-img-even, .picture-card-img-odd {
        margin: -150px auto 0 auto;
        max-width: 75%;
        border-radius: 3px;
    }
}

@media (min-width: 601px) {
    .picture-card-row {
        margin-top: 10px !important;
    }

    .picture-card-even {
        display: flex;
        flex-direction: row;
        margin-left: 115px;
    }

    .picture-card-odd {
        display: flex;
        flex-direction: row;
        margin-right: 115px;
    }

    .picture-card-text-even {
        white-space: pre-line;
        margin-left: 40px !important;
    }

    .picture-card-text-odd {
        white-space: pre-line;
        margin-right: 40px !important;
    }

    .picture-card-img-even {
        margin-left: -130px !important;
        max-height: 300px;
        border-radius: 3px;
    }

    .picture-card-img-odd {
        margin-right: -130px !important;
        max-height: 300px;
        border-radius: 3px;
    }
}

@media (max-width: 350px) {
    .picture-card-img-even, .picture-card-img-odd {
        max-height: 250px;
    }
}


</style>