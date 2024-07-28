<template>
    <div>
        <SectionHeader title="Recommendations" />
        <div class="rec-content centered">
            <div class="rec-item"
                v-for="(rec, i) in recommendations"
                :key="i"
                :style="{ 'max-width': windowWidth <= 500 ? '90%' : '60%' }"
                data-aos="fade-in"
                data-aos-duration="2500"
            >
                <p class="centered main-white text-font">{{ rec.text }}</p>
                <p class="centered main-white text-font" style="font-style: italic;">~ {{ rec.author }}</p>
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

    components: {
        SectionHeader,
        BottomBuffer
    },

    data () {
        return {
            recommendations: [
                {
                    text: 'Patrick and JLG have the most impressive (and successful) behavior change initiative related to sustainability that I\'ve seen across all the [organizations] I\'ve worked with and Patrick is such a wonderfully articulate advocate of not just the "why" but the "how" of [organizational] transformation.',
                    author: 'Barbara Bathshalom, Executive Director Sustainable Performance Institute'
                },
                {
                    text: 'Patrick\'s work is exceptional compared to his peers. He is sought for presentations among influential firm leaders giving him greater impact than his peers such as: AIA Large Firm Roundtable, Design Future Council and international trade delegations. Patrick\'s leadership causes his colleagues and clients to pursue higher goals. His leadership was recently seen on a large hospital in China where he led the team in goal setting to achieve results that go beyond net zero. Patrick propelled [us] to national recognition with his…credentials and now with an innovative performance approach.',
                    author: 'Steve Fiskum, HGA COO (now retired)'
                },
                {
                    text: 'Wow, I\'m blown away…The plan is visionary and exciting…Under Patrick\'s leadership we achieved a first in the world [sustainability] certification.',
                    author: 'Client'
                },
                {
                    text: 'Patrick Thibaudeau...[is] rare...pushing the boundaries and truly defining the cutting edge in [sustainability], driven primarily by a unique process and consistent approach to embedding sustainability into [operation at scale]. In my role as Founder of Sefaira, I work daily with firms on the front lines of sustainable design, and Patrick\'s leadership in this regard stands out and should be a model for other organizations to emulate..',
                    author: 'Peter Krebs, Sefaira founder'
                },
                {
                    text: '...Patrick Thibaudeau, has spearheaded an effort...to develop a [profession changing] strategy and "playbook" [an] easyto-use resource...for firm leaders attempting to unlock new levels of sustainable practice.',
                    author: 'American Institute of Architects Staff'
                },
                {
                    text: '[Patrick]...brings excellence and high-performance…and elevates the lives of people…',
                    author: 'CSI Chapter President'
                },
                {
                    text: '...clear vision...integrated process...is a character trait which is not easily acquired - and yet it is represented in each and every one of our collaborations with …[Patrick]',
                    author: 'Chris Piche\' Integral Group'
                },
            ],
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

</style>