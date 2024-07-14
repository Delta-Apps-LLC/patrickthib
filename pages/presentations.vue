<template>
  <div>
    <div class="centered">
      <SectionHeader title="Presentations" />
      <Dropdown :items="presentations" />
      <!-- <Info :items="presentations" /> -->
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
import BottomBuffer from '~/components/BottomBuffer.vue'

export default {
  name: 'PresentationsPage',

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
    BottomBuffer
  },

  data () {
    return {
      presentations: [
        {
          title: 'Net Zero Summit, Detroit Area',
          url: null,
          details: 'Panel facilitator.',
          year: [2020],
        },
        {
          title: 'Impact Conference,',
          url: null,
          details: 'Sponsored by USGBC Minnesota, St Paul Rivercenter, St Paul Minnesota, \"Transformative Future, Living Building Challenge: Wolf Ridge Environmental Center Case Study,\" Guest lecturers Patrick Thibaudeau, Pete Smerud, Jim Bradburn, Jonathan Ballmer.',
          year: [2018],
        },
        {
          title: 'US Green Building Council Duluth: Building Green 2017 \"Engage and Empower\"',
          url: null,
          details: 'Duluth Minnesota, \"Transformative Future, Living Building Challenge: Wolf Ridge Environmental Center Case Study,\" Guest lecturers Patrick Thibaudeau, Pete Smerud, Jim Bradburn, Jonathan Ballmer.',
          year: [2017],
        },
        {
          title: '14th Annual Sustainability Summit and Exposition: Building a Sustainable Future - Making it Work',
          url: null,
          details: 'Milwaukee Area Technical College, Milwaukee, Wisconsin. \"Mega-Trends, Future Forces and New Ways of Thinking about Sustainability,\" Keynote address.',
          year: [2017],
        },
        {
          title: 'Antioch University: Graduate Naturalist Training Program',
          url: null,
          details: 'Wolf Ridge Environmental Learning Center Sustainability Curriculum, Finland Minnesota, \"Starting at Zero: A New Way of Thinking About Our Future,\" Guest lecturer.',
          year: [2017],
        },
        {
          title: '15th Annual New York State Green Building Conference',
          url: null,
          details: 'Syracuse New York, \"Planning a Net-Zero Ready Facility: Counter-Intuitive Opportunities and Solutions,\" co-presenter with Chris Piche, Elementa Consulting.',
          year: [2017],
        },
        {
          title: 'University of Minnesota College of Design',
          url: null,
          details: 'ARCH 5550: Environmental Technology; Integrative Ecological Design for Responsive Architecture, Guest lecturer, Sustainable design.',
          year: [2016],
        },
        {
          title: 'Design Future Council Sustainable Design Summit',
          url: null,
          details: 'Seattle Washington, panel presenter on future trends.',
          year: [2016],
        },
        {
          title: 'Association of Nature Center Administrators (ANCA)',
          url: null,
          details: 'Sandstone MN, conference presentation on Living Building Challenge at Wolf Ridge Environmental Learning Center, co-presented with Pete Smerud.',
          year: [2016],
        },
        {
          title: 'University of Hawaii 4th Annual Sustainability Summit',
          url: null,
          details: 'Oahu, \"Starting at Zero - Campus Sustainability Planning,\" Keynote address to all campuses on Hawaiian Islands.',
          year: [2016],
        },
        {
          title: 'Design Future Council Sustainable Design Summit',
          url: null,
          details: 'Dallas TX, panel presenter on future trends.',
          year: [2015],
        },
        {
          title: 'BUILDING Chicago-Greening the Heartland',
          url: null,
          details: '\"Measuring Building Performance, User Satisfaction and Financial Value across Energy, Carbon, Waster and Materials,\"',
          year: [2013],
        },
        {
          title: 'USGBC Mississippi Headwaters Chapter',
          url: null,
          details: 'Quarterly presentation, \"Future Forces Powering Now.\" This presentation focused on long term future trends that have evidence in emerging efforts today. About 80 attendees.',
          year: [2013],
        },
        {
          title: 'Design Future Council Sustainable Design Summit',
          url: null,
          details: 'Dallas TX, panel presenter on future trends.',
          year: [2016],
        },
        {
          title: 'HGA-University',
          url: null,
          details: '\"High Performance Building Research Results\" presentation to a seven office audience of about 120 people. Information presented includes POE survey on two case study projects, Energy, Carbon, Water, Waste and Materials performance data and Life Cycle Cost information on energy cost savings. Sample size: 40 projects.',
          year: [2012],
        },
        {
          title: 'AIBC Conference',
          url: null,
          details: '\"Zero-Plus and College of Desert Sustainable Design Plans\"',
          year: [2012],
        },
        {
          title: '8th International Sustainability Conference',
          url: null,
          details: 'Vancouver BC Canada, \"Beyond Net Zero: An Innovative Approach for a New College in the California Desert with a Quadruple Bottom Line.\"',
          year: [2012],
        },
        {
          title: '3M Worldwide Broadcast',
          url: null,
          details: '\"Trends in Sustainable Design.\"',
          year: [2011],
        },
        {
          title: 'Design Future Council Sustainable Leadership Summit',
          url: null,
          details: 'Boston, Presented Zero-Plus concepts to executives from national and international participants. Participated in executive council roundtable.',
          year: [2011],
        },
        {
          title: 'HGA Annual Shareholder Meeting',
          url: null,
          details: 'Organizer of presentation to HGA annual shareholder meeting. Overall development of 30 minutes presentation for multiple presenters, via video conference to 6 or 7 locations nationwide. Occasional travel to lead follow-up presentations with local co-presenters.',
          year: [2011, 2007, 2005],
        },
        {
          title: 'USGBC GreenBuild International Conference',
          url: null,
          details: 'Chicago McCormick Place. Session presented to about 250 people.',
          year: [2010],
        },
        {
          title: 'The Big Green Conference',
          url: null,
          details: '\"The 2030 Plan - Affecting Change within Development and Design,\" Patrick Thibaudeau, Julianne Laue, Laura D\'Ardenne. Moderator - John Carmody. Panel presenter on achieving carbon neutral design.',
          year: [2010],
        },
        {
          title: 'USGBC Chapter Meetings',
          url: null,
          details: 'Multiple presentations including one at U of M lecture hall, one on a new approach to sustainable design and one on achieving net zero energy.',
          year: [2010, 2007, 2005],
        },
        {
          title: 'HGA Annual Shareholder Meeting',
          url: null,
          details: 'Led the development of 30 minutes presentation for 7 council leaders featuring an integrated approach of two speakers for 6 topics developed out a strategic visioning session I led. Six topics for improving the firm\'s market strength were: sustainability, integrated services, collaborative process, reputation, firm-wide expertise, design excellence.',
          year: [2009],
        },
        {
          title: 'ACEC MN',
          url: null,
          details: '\"LEED and the process.\"',
          year: [2009],
        },
        {
          title: 'World Usability Day',
          url: null,
          details: '\"Greening in a Different Color.\"',
          year: [2009],
        },
        {
          title: 'CSI-MSP December Chapter Meeting',
          url: null,
          details: '\"The Black and White of Green: From Sustainable Ideas to Certified Construction.\"',
          year: [2008],
        },
        {
          title: 'Economic Development Association of Minnesota (EDAM)',
          url: null,
          details: '\"Green Minnesota - What Does That Mean?\" How sustainable design impacts our communities. Patrick Thibaudeau and Rick Carter, co-presenters.',
          year: [2007],
        },
        {
          title: 'CSI Project Manual Resource Training',
          url: null,
          details: 'Second year presenting a one hour session introducing chapter 4 Design of the new CSI Project Resource Manual. Co-presented Larry Prinds of Saint Paul, MN. Location: Minneapolis Convention Center. In addition, due to the untimely death of one presenter, stepped in on short notice to present to the chapter on procurement for one hour.',
          year: [2007],
        },
        {
          title: 'USGBC Mississippi Headwaters Chapter',
          url: null,
          details: 'University of Minnesota, College of Architecture and Landscape Architecture auditorium. \"Back to the Future\" a presentation of practical advice and real examples of how to implement LEED in design and construction. Co-presented with Terry Brickman of PCL construction. Audience was over 100 at the U of M and about 80 total at HGA.',
          year: [2006],
        },
        {
          title: 'CSI Project Manual Resource Training',
          url: null,
          details: 'Presented a one hour session introducing chapter 4 Design of the new CSI Project Resource Manual. Emphasis on sustainable design. Co-presented Larry Prinds of Saint Paul, MN.',
          year: [2006],
        },
        {
          title: 'LEED Accredited Professional Class',
          url: null,
          details: 'Varied format including: a 6 part series to introduce sustainable design, all day sessions, three part series with practice exam.',
          year: [2005],
        },
        {
          title: 'CSI-IFMA Showcase',
          url: null,
          details: 'Key note panel speaker/presenter, Minneapolis Convention Center. Topic Project Partnering. Speaker to an audience of approximately 400 at MSP Convention center ballroom stage.',
          year: [2005],
        },
        {
          title: 'Construction and Facility Showcase (CSI-IFMA)',
          url: null,
          details: 'Two years planning committee participation to plan the event. Upgraded promotional materials for new venue at convention center. Planned theme and education tracks. 2004 theme: \"Collaboration for healthy secure buildings.\" 2005 theme: \"Partnering for Performance.\" Received CSI firm Principal Award for 2004 participation as well as an individual citation.',
          year: [2005],
        },
        {
          title: 'CSI-IFMA Exhibitor Training',
          url: null,
          details: '2 hr training session co-presented with Alan Griffith a national recognized presenter within CSI.',
          year: [2005],
        },
        {
          title: 'AIA Panel on Sustainable Design',
          url: null,
          details: 'Presentor',
          year: [2004],
        },
        {
          title: 'CSI Chapter Meeting',
          url: null,
          details: '\"Pantages Theater\", 1 hour presentation.',
          year: [2004],
        },
        {
          title: 'Maxxon Corporation',
          url: null,
          details: 'Dana Point California, National dealers meeting presentation, opening session. 45 minutes presentation regarding trends in construction and how to get specified. Approximately 225 people.',
          year: [2001],
        },
        {
          title: 'University of Minnesota - College of Education and Human Development',
          url: null,
          details: 'FE/WCFE 5201 - Family and Work Relationships: Presentation to class as guest speaker on home offices Spring 2000. Invited to return to present again Feb 2001.',
          year: [2000],
        },
        {
          title: 'AIA Continuing Education Provider Curriculum Development',
          url: null,
          details: 'Development of internal training programs for continuing education of architecture professionals for professional development and state registration continuing education requirements.',
          year: [1997],
        },
        {
          title: 'AIA MN',
          url: null,
          details: 'Presented seminar on environmental issues for building design and materials selection, seminar organizer.',
          year: [1992],
        },
        {
          title: 'Construction Documents Seminar',
          url: null,
          details: '10 page research paper on law for architects addressing the subject \"The Role of the Manufacturer\'s Representative in the development of the Contract Documents,\" resulted in two hour seminar for 3M Construction Markets field sales people. Topics addressed in seminar: How projects move through an office, basics of specifying, office organization, B-141 definitions of basic services, A-201 definitions of responsibilities, development of documents and the participant in the design team.',
          year: [1989, 1990],
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