<template>
    <div>
        <div class="centered">
            <SectionHeader title="Teaching and Research" />
            <v-row style="margin-bottom: 20px; align-items: start;">
                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Teaching" />
                    <Dropdown :items="teaching" :anchor="anchor"
                        :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
                    />
                </v-col>

                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Research" />
                    <Dropdown :items="research" :anchor="anchor" />
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
import Dropdown from '~/components/Dropdown.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import MiniHeader from '~/components/MiniHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'
import { teaching } from '~/static/data';
import { research } from '~/static/data';

export default {
    name: 'TeachingResearchPage',

    head() {
        return {
            title: 'Teaching and Research - Patrick Thibaudeau',
            meta: [
                { hid: 'teaching-and-research-description', name: 'description', content: 'Patrick Thibaudeau teaching and research page; see Patrick\'s teaching experience and his career research' },
                { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, teacher, teaching, instructor, leader, research, industry' }
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
        Dropdown,
        SectionHeader,
        MiniHeader,
        BottomBuffer
    },

    data () {
        return {
            anchor: this.$route.params.hash,
            teaching: teaching,
            research: research,
            windowWidth: window.innerWidth,
        }
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';


</style>