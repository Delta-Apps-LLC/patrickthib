<template>
    <div>
        <SectionHeader title="Recommendations" />
        <div class="rec-content centered">
            <div class="rec-item"
                :id="rec.id"
                v-for="(rec, i) in recommendations"
                :key="i"
                :style="{ 'max-width': windowWidth <= 500 ? '90%' : '60%' }"
                data-aos="fade-in"
                data-aos-duration="2500"
            >
                <div>
                    <p class="centered main-white text-font">{{ rec.details }}</p>
                    <p class="centered main-white text-font" style="font-style: italic;">~ {{ rec.author }}</p>
                </div>
                <div class="divider" v-if="i < recommendations.length - 1"></div>
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
import { recommendations } from '~/static/data';

export default {
    name: 'RecommendationsPage',

    head() {
        return {
            title: 'Recommendations - Patrick Thibaudeau',
            meta: [
                { hid: 'recommendations-description', name: 'description', content: 'Patrick Thibaudeau recommendations page; see what people have said about Patrick and why they recommend him' },
                { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, recommendations, reviews, quotes, endorsements' }
            ]
        }
    },

    created () {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
        AOS.init()
    },

    mounted () {
        if (this.anchor) {
            this.$nextTick(() => {
                const el = document.getElementById(this.anchor)
                if (el) {
                    setTimeout(() => {
                        const offsetTop = el?.offsetTop;
                        window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                        });
                    }, 500);
                }
            })
        }
    },

    components: {
        SectionHeader,
        BottomBuffer
    },

    data () {
        return {
            anchor: this.$route.params.hash,
            recommendations: recommendations,
            windowWidth: window.innerWidth,
        }
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';

.rec-content {
    margin: 20px 0;
}

.rec-item {
    margin: 10px;
}

.divider {
    height: 1px;
    background-color: #ccc;
    margin: 30px 0 0 0;
    width: 100%;
}

</style>