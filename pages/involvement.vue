<template>
    <div>
        <div class="centered">
            <SectionHeader title="Engagement and Involvement" />
            <v-row style="margin-bottom: 20px; align-items: start;">
                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Memberships" />
                    <Dropdown :items="memberships" :anchor="anchor"
                        :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
                    />
                </v-col>

                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Conferences" />
                    <Dropdown :items="conferences" :anchor="anchor" />
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
import { memberships } from '~/static/data';
import { conferences } from '~/static/data';

export default {
    name: 'InvolvementPage',

    head() {
        return {
        title: 'Involvement - Patrick Thibaudeau',
        meta: [
            { hid: 'involvement-description', name: 'description', content: 'Patrick Thibaudeau involvement page; see the memberships and conferences that Patrick has be involved in.' },
            { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, involvement, conferences, memberships, USGBC, AIA' }
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
            memberships: memberships,
            conferences: conferences,
            windowWidth: window.innerWidth,
        }
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>