<template>
  <div>
    <div class="centered">
      <SectionHeader title="Publications, Interviews and Quotes" />
      <v-row style="margin-bottom: 20px; align-items: start;">
        <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
          <MiniHeader title="Publications" />
          <Dropdown :items="publications"
            :style="windowWidth <= 700 ? {'margin-bottom': '20px'} : null"
          />
        </v-col>

        <v-col class="centered" :cols="windowWidth > 700 ? '6' : '12'">
            <MiniHeader title="Interviews and Quotes" />
            <Dropdown :items="interviews" />
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
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'
import Dropdown from '~/components/Dropdown.vue';

export default {
  name: 'PublicationsPage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    SectionHeader,
    BottomBuffer,
    Dropdown
  },

  data () {
    return {
      publications: [
        {
          title: '7 Ways to Change \'Business as Usual\': The Theodore Roosevelt Presidential Library',
          url: 'https://www.bdcnetwork.com/ThibaudeauTRPL2024',
          details: 'Building Design + Construction Magazine online. Invited by publisher to author this article.',
          year: [2024],
        },
        {
          title: 'Soil Carbon Sequestration in Building Life Cycle Assessment: Offsetting Measure or Site Impact',
          url: 'soil-carbon-sequestrianism-in-building-life-cycle-assessment.pdf',
          details: 'Matt Roberts and Patrick Thibaudeau, World Sustainable Built Environment Conference (WSBE24)',
          year: [2024],
        },
        {
          title: 'Trailblazers in Sustainable Design',
          url: 'https://bismaninc.com/trailblazers-in-sustainable-design',
          details: 'by Josiah Copp, Bis-Man Inc. March 25, 2024, Featured Article written in collaboration with staff writer for Bis-Man Inc. magazine.',
          year: [2024],
        },
        {
          title: 'Breathing Life into the Badlands',
          url: 'https://www.prbplus.com/breathing-life-into-the-badlands',
          details: 'by Patrick Thibaudeau, PRB+Magazine. I was invited to write this article by the publisher. Trends and case examples of cutting-edge sustainability.',
          year: [2024],
        },
        {
          title: 'Think Big, Future of Learning, Business of Education, Carbon Neutral Resilient Facilities: Minnesota State University at Moorhead Master Plan',
          url: 'https://www.facebook.com/story.php?story_fbid=8380806408627526&id=175676935807222&m_entstream_source=permalink',
          details: 'A presentation to a public event for the Moorhead community. Interviewed for TV, radio and print new media. This visioning and planning effort received TV, Radio and print news media coverage. I was pleased to lead a large diverse team for Minnesota State University and Moorhead (MSUM) producing a ground breaking, forward looking, carbon neutral master plan. I hosted a public open house with MSUM to introduce the new 20-year plan. This carbon neutral plan is leading the country, region and state. The plan includes key reductions that pay big returns and big impact. It sets a framework for future enrollment growth for a thriving MSUM campus. The plan focusses on the Future of Learning, The Business of Education, Resilient Carbon Neutral Facilities built on a foundation of equitable and inclusive learning. Four strategies in the plan: 1. Culture of Connecting, Best Business Case, Carbon Neutrality, Honoring Heritage and Technology of Tomorrow. I was pleased to host this public open house with Jean Hollaar, the MSUM Vice President of Finance & Administration and Brenda Norris, MSUM AVP Facilities Director. This plan is evidence we are on the brink of the greatest economic development and financial prosperity transition that has occurred in more than a generation.',
          year: [2022],
        },
        {
          title: 'MSUM unveils long-range facility plan',
          url: 'https://www.valleynewslive.com/2022/11/01/msum-unveils-long-range-facility-plan',
          details: 'by Gretchen Hjelmstad, Valley News Live Nov. 1, 2022 at 4:39PM CDT',
          year: [2022],
        },
        {
          title: 'The business of sustainability: A seven-year study of the UND Gorecki Alumni Center in action',
          url: 'https://www.grandforksherald.com/news/local/the-business-of-sustainability',
          details: 'by Patrick Thibaudeau and Tracy Nicholson, GrandForks Herald, August 26, 2021.',
          year: [2021],
        },
        {
          title: 'Framework for Design Excellence, Design for Equitable Communities',
          url: 'https://www.aia.org/resources/6077668-framework-for-design-excellence',
          details: 'American Institute of Architects, Patrick Thibaudeau, et al., principal of author of and co-author with 9 others to write and publish the entire guide for the profession outlining design excellence.',
          year: [2021],
        },
        {
          title: 'JLG Architects JUST Label',
          url: 'https://just.living-future.org/s/organizations/20-organizations/jlg-architects',
          details: 'by Patrick Thibaudeau, International Living Futures Institute',
          year: [2021],
        },
        {
          title: 'New CBE Partner JLG Architects: Explorers of Design Excellence, Community Engagement and Quality of Life',
          url: 'https://cbe.berkeley.edu/centerline/cbe-partner-jlg-architects-explore-design-excellence-community',
          details: 'Centerline, by Patrick Thibaudeau for Centerline team, UC Berkley Center for the Built Environment',
          year: [2020],
        },
        {
          title: 'Sustainability Playbook',
          details: 'Large Firm Roundtable, by Patrick Thibaudeau principal author et al. Led a working group and was principal author of a concise guide for CEO\'s to operationalize sustainability at scale across the profession. This guide was unanimously adopted as the high performance guide for firm operations and integrating sustainability into each firms operations at an accelerated pace by identifying top five high performance attributes and top 5 high performance actions.',
          year: [2020],
        },
        {
          title: 'New Questions, Different Thinking, Positive Impact: Start at Zero?',
          details: 'by Patrick Thibaudeau, Design Intelligence, Issue 269, p. 32-35, Third Quarter 2017.',
          year: [2017],
        },
        {
          title: 'Embracing Green: Choosing Materials to Promote Healthy Indoor Environments',
          details: 'by Patrick Thibaudeau and Peter Dahl, Medical Construction & Design, Vol. 13, Issue 2, p. 55-56. March/April 2017.',
          year: [2017],
        },
        {
          title: 'Designing Healthcare Spaces for the Human Experience',
          details: 'by Patrick Thibaudeau and Kara Freihoefer, Healthcare Design, Designing healthcare facilities. February 2015.',
          year: [2015],
        },
        {
          title: 'Fresh Perspectives: The human scale in sustainable healthcare design',
          details: 'by Patrick Thibaudeau and Stan Chiu, Medical Construction & Design, September/October 2014.',
          year: [2014],
        },
        {
          title: 'Transforming Building Performance Using \'Zero-Plus\' Principles',
          details: 'by Patrick Thibaudeau and James Matson, American School & Hospital Facilities, March/April 2014. Cover Story.',
          year: [2014],
        },
        {
          title: 'An Energy Approach: Zero-Plus energy strategies are part of an integrated plan that ties new technology with passive strategies',
          details: 'by Patrick Thibaudeau and James Matson, American School & University',
          year: [2013],
        },
        {
          title: 'Higher Education Design: Implementing Zero-Plus Energy Strategies',
          details: 'by Patrick Thibaudeau and James Matson, Environmental Design & Construction, Volume 16, Issue 8, p. 22-24. August 2013.',
          year: [2013],
        },
        {
          title: '5 Metrics for Going Green in Healthcare',
          details: 'by Patrick Thibaudeau and Michael Franklin Ross, Medical Construction and Design, Volume 9, Issue 4, p. 16-18. July/August 2013.',
          year: [2013],
        },
        {
          title: 'Perspectives in Sustainable Design 2012',
          details: 'by Mara Baum, Dan Heinfeld, Daniel Overbey, Erik Ring, Derrick Teal, Patrick Thibaudeau, Environmental Design & Construction, December 3, 2012.',
          year: [2012],
        },
        {
          title: 'The Leadership Progression - Allowing Growth By Nurturing New Leaders Through Various Approaches',
          details: 'by Patrick Thibaudeau, Design Intelligence, , Volume 18, Issue 3, p. 53-59. May 2012.',
          year: [2012],
        },
        {
          title: 'Zero Plus',
          details: 'Environmental Design & Construction, by Patrick Thibaudeau, Volume 15, Issue 3, p. 34-36, March 2012.',
          year: [2012],
        },
        {
          title: 'Integrated Design is Green',
          details: 'by Patrick Thibaudeau, Journal of Green Building, Volume 3, Issue 4, p. 78-93. December 2008.',
          year: [2008],
        },
        {
          title: 'Continuing Education: Universities can use a variety of strategies, many of them low-cost, to ensure ongoing sustainable operations',
          details: 'by Jim Goblirsch and Patrick Thibaudeau, Building Operating Management, Volume 53, Issue 9, p. 39-46. September 2007.',
          year: [2007],
        },
        {
          title: 'Guide on Waterproofing Coatings',
          details: 'by Patrick Thibaudeau, Trainee Guide, National Center for Construction Education and Research. Co-author, 1997.',
          year: [1997],
        },
      ],
      interviews: [
        {
          title: 'Integrative Process: Pathways to Performance and Regeneration',
          url: 'https://www.buildinggreen.com/feature/integrative-process-pathways-performance-and-regeneration',
          details: 'by Paula Melton Building Green, January 18, 2023. Significant quotes included about integrative process.',
          year: [2023],
        },
        {
          title: 'MSUM Carbon Neutral Plan” Moorhead area television, radio and print news interviews',
          url: 'https://www.valleynewslive.com/2022/11/01/msum-unveils-long-range-facility-plan',
          details: '',
          year: [2022],
        },
        {
          title: 'Sustainable Architecture',
          url: 'https://www.grandforksherald.com/news/local/sustainable-architecture',
          details: 'Grand Forks Herald By Sam Easter, August 16, 2021',
          year: [2021],
        },
        {
          title: 'Improving High Performance Facades Through Post-Occupancy Evaluation',
          url: '',
          details: 'Sponsored by Ornamental Metal Institute of New York, Architectural Record, p. 168-169. November 2018.',
          year: [2018],
        },
        {
          title: 'NZB: Daylighting',
          url: '',
          details: 'Net Zero Buildings, Vol 7, No 2, pg. 22, May 2018.',
          year: [2018],
        },
        {
          title: 'Lucky Number 7? California\'s 7x7x7 program explores how its schools can be more sustainable',
          url: '',
          details: 'Michael Franklin Ross, The Architect\'s Newspaper, Issue 3, p. 6. April 27, 2016.',
          year: [2016],
        },
        {
          title: 'Typology: Humans & Health',
          url: '',
          details: 'Green Building & Design, March/April 2016.',
          year: [2016],
        },
        {
          title: '2014 LEED Fellow Announced',
          url: 'https://greenbuildingnews.com/2014/11/19/patrick-thibaudeau/',
          details: 'Targeted News Service, October 2014. Patrick Thibaudeau named 2014 LEED fellow.',
          year: [2014],
        },
        {
          title: 'HGA Architects & Engineers Completes Phase One Design of New West Valley Campus at College of the Desert',
          url: '',
          details: 'California Builder & Engineer, July 2013.',
          year: [2013],
        },
        {
          title: 'Self Sustaining School in Palm Springs',
          url: '',
          details: 'World Architect News, May 2013.',
          year: [2013],
        },
        {
          title: 'HGA Completes Phase One Design for College of the Desert West Valley Campus',
          url: '',
          details: 'Deane Madsen, Architect, May 10, 2013.',
          year: [2013],
        },
        {
          title: 'HGA Architects and Engineers Completes Phase One Design of New West Valley Campus at College of the Desert',
          url: '',
          details: 'Real Estate Rama, May 8, 2013.',
          year: [2013],
        },
        {
          title: 'College of the Desert\'s Tabular Rasa: The New West Valley Campus',
          url: '',
          details: 'Kristen Dispensza, Buildipedia.com, September 2011.',
          year: [2011],
        },
        {
          title: 'Net-Zero Energy Campus Planned for California Community College',
          url: '',
          details: 'Contract, Online. July 29, 2011.',
          year: [2011],
        },
        {
          title: 'HGA to Design New West Valley Campus for College of the Desert',
          url: '',
          details: 'dBusiness News, July 2011.',
          year: [2011],
        },
        {
          title: 'Newsworthy: Mother Nature Knows Best',
          url: '',
          details: 'Kylie Wrablaski, Janelle Penny and Jennie Morton, Buildings, Volume 105, Issue 5, p. 8. May 2011. Patrick Thibaudeau is interviewed about biomimicry.',
          year: [2011],
        },
        {
          title: 'Construction Digital Investigates the Top Buildings Inspired by Nature in the April Issue',
          url: '',
          details: 'American Banking & Market News, April 2011.',
          year: [2011],
        },
        {
          title: 'Buildings Inspired by the Natural World',
          url: '',
          details: 'Laura Clapper, Construction Digital, April 2011.',
          year: [2011],
        },
        {
          title: 'Sustainable Roofing, A Whole-Building Approach',
          url: '',
          details: 'C.C. Sullivan and Barbara Horwitz-Bennett, Building Design & Construction, Volume 52, Issue 2, p. 38-46. February 2011.',
          year: [2011],
        },
        {
          title: 'HGA Creates Greener Outlook with Print Systems from Oce',
          url: '',
          details: 'Building Design & Construction, Volume online. September 2, 2009.',
          year: [2009],
        },
        {
          title: 'BIPV and Your Building',
          url: '',
          details: 'Leah B. Garris, Buildings, Volume 103, Issue 8, p. 30. August 2009.',
          year: [2009],
        },
        {
          title: 'The Top 100 Green Design Firms: No Longer a Fad, Green Hits Mainstream',
          url: '',
          details: 'Gary Tulacz and Melissa Traynor, ENR Engineering News Record, Volume 260, Issue 21, p. 116-122. June 23, 2008.',
          year: [2008],
        },
        {
          title: 'Green Means Collaboration: Involving the Entire Project Team as Early as Possible Allows Expertise to be Shared. The Payoff: a Better Building at a Lower Cost',
          url: '',
          details: 'Building Operating Management, Volume 53, Issue 9, p. 23-26. September 2007.',
          year: [2007],
        },
        {
          title: 'LEED certification is here to stay',
          url: '',
          details: 'Sam Black, Minneapolis-St. Paul Business Journal, Volume 25, No. 9, p. 15. August 10, 2007. Real Estate and Construction Special Report - Cover story.',
          year: [2007],
        },
        {
          title: 'Minnesota is green, but not in the LEED',
          url: '',
          details: 'Liz Wolf, Finance and Commerce, p. S-1. September 28, 2006.',
          year: [2006],
        },
      ],
      windowWidth: window.innerWidth
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles.css';

</style>