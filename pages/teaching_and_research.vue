<template>
    <div>
        <div class="centered">
            <SectionHeader title="Teaching and Research" />
            <v-row style="margin-bottom: 20px; align-items: start;">
                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Teaching" />
                    <Dropdown :items="teaching"
                        :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
                    />
                </v-col>

                <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
                    <MiniHeader title="Research" />
                    <Dropdown :items="research" />
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
export default {
    name: 'TeachingResearchPage',

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
            teaching: [
                {
                    title: 'University of Minnesota - Biophilic Design Studio',
                    url: null,
                    details: 'Biophilic design process.',
                    year: [2021]
                },
                {
                    title: 'University of Minnesota - Environmental Class',
                    url: null,
                    details: 'Sustainable projects and process to performance.',
                    year: [2016]
                },
                {
                    title: 'AIA Continuing Education Provider Curriculum Development.',
                    url: null,
                    details: 'Development of internal training programs for continuing education of architecture professionals for professional development and state registration continuing education requirements. Courses organized and/or taught include:\n\n- LEED Accredited Professional Class - Varied format including: a 6 part series with exam.\n- Overview of Sustainable Design:  Multiple presentations over 8+ years.\n- Introduction to Specifications\n- Various design guide sessions\n- 5-part series on construction administration',
                    duration: '1997-2020'
                },
                {
                    title: 'University of Minnesota - College of Education and Human Development',
                    url: null,
                    details: 'FE/WCFE 5201 - Family and Work Relationships: Presentation to class as guest speaker on home offices. Invited to return to present again Feb 2001.',
                    year: [2001]
                },
                {
                    title: '3M Training Seminar',
                    url: null,
                    details: 'Two-hour training seminar on contract documents and the role of the manufacturer\'s representative.',
                    duration: '2 Years'
                },
                {
                    title: 'Programming in Architecture, University of Minnesota',
                    url: null,
                    details: 'Guest lecturer for the Programming in Architecture course at the University of Minnesota, instructor Julia Robinson. Presented lecture slide presentation of research done during Internship on behavioral issues in architecture, the role of research in programming and design, and the design criteria of a corporate work at home development with solutions.',
                    duration: '1 Year'
                },
                {
                    title: 'University YMCA: Board of Management and Teaching Assistant',
                    url: null,
                    details: 'Student member of the board and liaison to internship program. Responsibilities included interviewing potential interns, selection of interns, general program administration, supervising and counseling interns. Teaching assistant for Ssci 3251 and 3252 internship seminar under the direction of business school and communications department professors. Prepared course outline, materials, taught class lectures, organized guest lectures, administration of assignments, graded papers.',
                    duration: '1 Year'
                },
            ],
            research: [
                {
                    title: 'University of California Berkely, Center for the Built Environment',
                    url: null,
                    details: 'Research Partner, 2011 to Current, two firms. Strategic planning for research topics and twice a year reviews of progress. Currently leading a collaborative research effort to develop a process for quantifying soil organic carbon and establish protocols for documenting total carbon positive design performance. Supporting a research grant proposal to improve Environmental Product Declarations and Global Warming Potential reporting.',
                    duration: '2011-Current'
                },
                {
                    title: 'University of Minnesota Center for Sustainable Building Research',
                    url: null,
                    details: 'Ongoing collaboration',
                    duration: '2013-Present'
                },
                {
                    title: 'JLG Research Initiative',
                    url: null,
                    details: 'Exploring the frontier of practice and inventing new processes and developing impactful new ideas. Inventor of Gateway Platform a virtual world for display of data and scenario planning, JLG 20 Biophilic Guide and Resilience Evaluation Tool',
                    duration: '2020-2023'
                },
                {
                    title: 'HGA Research Initiative',
                    url: null,
                    details: 'Leader contributing to developing a research council and a research driven practice.',
                    duration: '2004-2013'
                },
                {
                    title: 'Marketing for industry corporations',
                    url: null,
                    details: 'Responsible for technical and market research on building systems and products. Utilized interview techniques as well as literature and publication research.',
                    duration: '2 Years'
                },
                {
                    title: 'Master of Architecture Thesis',
                    url: null,
                    details: 'Developed housing interview and survey questions for people working at home, researched EDRA for methods, incorporated personality survey, identified sample, analysis, conclusions, translation to design, developed computer design methodology.',
                    year: null
                },
                {
                    title: 'Project Leader YMCA Metro Executive Program',
                    url: null,
                    details: 'Survey research of housing market and interest of corporate employees for company sponsored housing. Identified sample, developed survey questions, administered survey, analysis and conclusions.',
                    year: null
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