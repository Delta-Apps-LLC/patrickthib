<template>
    <div>
        <div class="centered">
            <SectionHeader title="Engagement and Involvement" />
            <v-row style="margin-bottom: 20px;">
                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <span class="mini-header main-white text-center"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Memberships
                    </span>
                    <Dropdown :items="memberships"
                        :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
                    />
                </v-col>

                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <span class="mini-header main-white text-center"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Conferences
                    </span>
                    <Dropdown :items="conferences" />
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
        SectionHeader,
        BottomBuffer
    },

    data () {
        return {
            memberships: [
                {
                    title: 'USGBC National - Firm',
                    details: '',
                },
                {
                    title: 'USGBC Local Chapter',
                    details: '',
                },
                {
                    title: 'Internal Living Futures Institute',
                    details: '',
                },
                {
                    title: 'UC Berkley Center for the Built Environment',
                    details: '',
                },
                {
                    title: 'Design Futures Council',
                    details: '',
                },
                {
                    title: 'AIA Large Firm Round Table',
                    details: '',
                },
            ],
            conferences: [
                {
                    title: 'Greenbuild',
                    details: '',
                },
                {
                    title: 'Living Futures Conference',
                    details: '',
                },
                {
                    title: 'DFC Sustainability Summitt',
                    details: '',
                },
                {
                    title: 'Net Zero Sumitt - Michigan',
                    details: '',
                },
                {
                    title: 'Carbon Positive or other',
                    details: '',
                },
                {
                    title: 'LFRT SDL meeting',
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