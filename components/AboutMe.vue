<template>
    <div>
        <v-divider />
        <MiniHeader title="Summary of Qualifications" />
        <span class="picture-card-text-even text-font main-white"
            data-aos="fade-in"
            data-aos-duration="3000"
        >
            {{ summary }}
        </span>
        <ul>
            <li v-for="(item, i) in summaryPoints" :key="i">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import SectionHeader from '~/components/SectionHeader.vue'
import MiniHeader from '~/components/MiniHeader.vue'
export default {
    name: 'AboutMeComponent',

    created () {
        window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
        })
        AOS.init()
    },

    components: {
        SectionHeader,
        MiniHeader
    },

    data () {
        return {
            summary: 'Patrick is an experienced executive and visionary thought-leader with keen foresight and a unique ability to see future trends, inspire people and transform organizations. A results-oriented, proven record of leading diverse groups, developing strategic plans, implementing those plans, achieving predicted outcomes, and exceeding performance results that organizations and individuals did not know were possible. Unique blend of business savvy, planning excellence and operational quality.\n\nExtensive experience working with over 25 large, matrixed, or vertically integrated organizations. Exceptionally strong at developing inventive approaches and innovative solutions, leading organizations to consistently achieve high performance results, increased efficiency and enhanced quality.\n\nReadily identifies market opportunities and risks, develops long-term strategies and priorities, establishes ambitious goals, while building consensus through collaboration to achieve successful implementation. Works across all levels including board of directors, C-suite, executive leadership, owners, enterprise management groups, front-line workers, stakeholders and customers.\n\nPatrick has an extensive national network and has long time service on boards of directors, industry governing councils, research bodies and global representation. He is a fearless pioneer of new ideas and is a sought-after keynote and featured speaker at regional, national and international events and widely published.\n\nHe was an official NGO delegate at COP26 influencing the outcome of the Glasgow Climate Pact connecting with senior White House officials, senate and house leadership, governors, and mayors from around the country. He has transformed his current company, in less than two years during the pandemic, from a lagger to a nationally recognized leader with global impact. He was recently the national co-chair of the Large Firm Roundtable influencing the entire building industry in the US to be carbon neutral organizations.\n\nImpact Highlights:\n',
            summaryPoints: [
                'Driving Business: Proven record of driving business growth. A winning marketing record, high profitability.',
                'Elevating the Business: An inventive leader bringing value with far reaching impact in the lives of people and the built environment supported by arch and exploration of cutting-edge thoughts like: \"Building an Idea\", \"Z7+\", \"Syrup Syndrome\", \"A Breath of Fresh Air\", \"TR20\", \"GatewayTM Platform\", \"Thrive Approach\".',
                'Lifetime of Leadership: Presidential award for lifetime community service, USGBC FELLOW. Direct responsibility for supervising staff throughout career: Cumulative total: about 250 direct report people, 30 +/- business reports at one time and 3800 +/- volunteer reports. Extensive service on board of directors.'
            ],
            windowWidth: window.innerWidth,
        }
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>