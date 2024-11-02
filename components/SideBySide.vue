<template>
    <div class="side-by-side">
        <div v-if="windowWidth >= 750" class="larger-screens">
            <div class="col">
                <MainHeader />
                <MiniHeader style="margin-top: 15px;" title="Quick Links" />
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    style="margin: -10px auto 15px auto;"
                >
                    <a href="/#about-me">About Me</a>
                    <a href="/#tedx-talk">TEDx Talk</a>
                    <a href="/#featured-award">Featured Award</a>
                </div>
            </div>
            <div class="col">
                <img id="portrait" :src="src">
            </div>
        </div>

        <div v-if="windowWidth < 750" class="smaller-screens">
            <div class="col section-header">
                <MainHeader />
            </div>
            <div class="col image-col">
                <img :src="src" width="250" />
            </div>
            <div class="col">
                <MiniHeader style="margin-top: 15px;" title="Quick Links" />
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    style="display: flex; flex-direction: row;
                        justify-content: center; margin: -10px auto 15px auto;"
                >
                    <a href="/#about-me">About Me</a>
                    <a href="/#tedx-talk">TEDx Talk</a>
                    <a href="/#featured-award">Featured Award</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import SectionHeader from '~/components/SectionHeader.vue'
import MainHeader from './MainHeader.vue';
import MiniHeader from './MiniHeader.vue';

export default {
    name: 'SideBySideComponent',

    created () {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
        AOS.init()
    },

    components: {
        SectionHeader,
        MiniHeader,
        MainHeader
    },

    data () {
        return {
            windowWidth: window.innerWidth,
        }
    },

    props: {
        src: String,
    },
}
</script>

<style scoped>
@import '~/assets/styles.css';

.divider {
    height: 1px;
    background-color: #ccc;
    margin: 15px 0 15px 0;
    width: 100%;
}

#portrait {
    border-radius: 4px;
    min-width: 100px;
    max-width: 250px;
}

a {
    padding: 5px;
    color: #205294;
}

.side-by-side {
    margin: 20px auto;
    max-width: 100%;
}

/* Styling for larger screens */
.larger-screens {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.larger-screens .col {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally in each column */
    justify-content: center;
}

/* Styling for smaller screens */
.smaller-screens {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.smaller-screens .section-header, 
.smaller-screens .image-col, 
.smaller-screens .mini-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Optional: additional styling for image alignment */
.image-col img {
    display: block;
    margin: 0 auto;
}


</style>