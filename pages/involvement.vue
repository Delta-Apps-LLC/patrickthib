<template>
    <div>
        <div class="centered">
            <SectionHeader title="Engagement and Involvement" />
            <v-row style="margin-bottom: 20px;">
                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Memberships" />
                    <Dropdown :items="memberships"
                        :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
                    />
                    <!-- <Info :items="memberships"
                        :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
                    /> -->
                </v-col>

                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Conferences" />
                    <Dropdown :items="conferences" />
                    <!-- <Info :items="conferences" /> -->
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
import Info from '~/components/Info.vue';
import SectionHeader from '~/components/SectionHeader.vue'
import MiniHeader from '~/components/MiniHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'

export default {
    name: 'InvolvementPage',

    created () {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
        AOS.init()
    },

    components: {
        Dropdown,
        Info,
        SectionHeader,
        MiniHeader,
        BottomBuffer
    },

    data () {
        return {
            memberships: [
                {
                    title: 'USGBC National - Firm',
                    url: null,
                    details: '',
                },
                {
                    title: 'USGBC Local Chapter',
                    url: null,
                    details: '',
                },
                {
                    title: 'Internal Living Futures Institute',
                    url: null,
                    details: '',
                },
                {
                    title: 'UC Berkley Center for the Built Environment',
                    url: null,
                    details: '',
                },
                {
                    title: 'Design Futures Council',
                    url: null,
                    details: '',
                },
                {
                    title: 'AIA Large Firm Round Table',
                    url: null,
                    details: '',
                },
            ],
            conferences: [
                {
                    title: 'Greenbuild',
                    url: null,
                    details: '',
                },
                {
                    title: 'Living Futures Conference',
                    url: null,
                    details: '',
                },
                {
                    title: 'DFC Sustainability Summitt',
                    url: null,
                    details: '',
                },
                {
                    title: 'Net Zero Sumitt - Michigan',
                    url: null,
                    details: '',
                },
                {
                    title: 'Carbon Positive or other',
                    url: null,
                    details: '',
                },
                {
                    title: 'LFRT SDL meeting',
                    url: null,
                    details: '',
                },
            ],
            windowWidth: window.innerWidth,
        }
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>