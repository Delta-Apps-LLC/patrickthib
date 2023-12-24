<template>
  <div>
    <div class="centered">
      <span class="small-header main-white text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Employment
      </span>
      <PictureCard :items="employment" />
    </div>

    <div class="centered" style="margin-bottom: 40px;">
      <span class="small-header main-white text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Service and Leadership
      </span>
      <v-expansion-panels class="expand-group main-white text-font"
        data-aos="fade-in"
        data-aos-duration="2500"
      >
        <v-expansion-panel
          v-for="(item, i) in leadership"
          :key="i"
        >
          <v-expansion-panel-header>
            <span style="width: 85%;">{{ item.title }}</span>
            <v-spacer />
            <span>{{ item.year }}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>{{ item.details }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="centered">
      <span class="small-header main-white text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Presentations
      </span>
      <v-expansion-panels class="expand-group main-white text-font"
        data-aos="fade-in"
        data-aos-duration="2500"
      >
        <v-expansion-panel
          v-for="(item, i) in presentations"
          :key="i"
        >
          <v-expansion-panel-header>
            <span style="width: 85%;">{{ item.title }}</span>
            <v-spacer />
            <span>{{ item.year }}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>{{ item.details }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    
    <div style="height: 50px;"></div>
  </div>
</template>

<script>
import PictureCard from '~/components/PictureCard.vue'
export default {
  name: 'ExperiencePage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },

  components: {
    PictureCard
  },

  data () {
    return {
      employment: [
        {
          title: 'Principal Sustainability Officer',
          subtitle: 'JLG Architects | March 2020 - Present',
          text: 'Exploration that goes beyond buildings to help individuals, teams and communities thrive, prosper and achieve outcomes not thought possible. Discover insights the elevate health, wellness and resilience for person and place. Leading strategy, research and process development for positive impact on individual experience, built performance and financial prosperity.',
          image: '/images/jlg-logo.jpg',
        },
        {
          title: 'Vice President, Sustainability',
          subtitle: 'HGA Architects and Engineers | July 2001 - March 2020',
          text: 'Sustainability, strategy, design, inventive ideas, planning, leadership, business development, marketing, business management, firmwide councils, high performance projects. Council Chair: 11 years chair of firm-wide councils (Design, Engineering, Research, Project Management): Operations, practice policies, resources, training, 2004-2015',
          image: '/images/hga-logo.jpg',
        },
        {
          title: 'Principal',
          subtitle: 'AResource | September 1991 - February 2001',
          text: 'Sole proprietor, principal responsible for business development, marketing, proposals, production, finances, maintaining client relationships. Grew business based on repeat work from clients and attracting new business for 10 years with multinational corporate clients as well as regional businesses.',
          image: '/images/profile.jpg',
        },
        {
          title: 'Construction Products Division Marketing Communications',
          subtitle: '3M, Contract | February 1988 - August 1991',
          text: 'Marketing communications coordinator, sales training, technical consultation. Achieved outcomes by customer consultation, industry networking, professional association leadership, developing technical and marketing documents, marketing planning and implementation of strategies and sales staff training.',
          image: '/images/3m-logo.jpg',
        },
      ],
      leadership: [
        {
          title: 'HGA Chairman of Council Coordinating Committee',
          details: 'Responsible for all disciplines and practice initiatives with emphasis including sustainable design.',
          year: '2004-2016',
        },
        {
          title: 'HGA Chair of HGA Sustainability Council',
          details: 'First chair of newly formed council.',
          year: '',
        },
        {
          title: 'Design Futures Council Sustainable Leadership Summit',
          details: 'Delegate to the annual invitation-only meeting. 2012 produced a document called the \"Portland Promise.\"',
          year: '2012-Present',
        },
        {
          title: 'Visioning the Future of University of Minnesota Center for Sustainable Building Research',
          details: 'Meeting with Dean of College of Architecture to develop a plan for the future of this center.',
          year: '2012',
        },
        {
          title: 'HGA Firm-Wide Sustainable Design Summit',
          details: 'Hosted 26 delegates gathered for a two day summit to plan for the future of sustainable design and how to impact communities for good.',
          year: '2011, 2012',
        },
        {
          title: 'Center for the Built Environment, UC Berkley',
          details: 'Executive council of industry partners.',
          year: '2011, 2012',
        },
        {
          title: 'AIA Large Firm Roundtable Sustainable Design Leaders',
          details: 'National working group of large architecture firms working toward a carbon neutral future. Water working group and carbon working group.',
          year: '2009-Present',
        },
        {
          title: 'HGA Strategic Plan Subcommittee',
          details: 'Appointed to subcommittee to help develop the firm\'s strategic plan for 2011-2013 and for 2007-2010. Wrote the sustainable design strategic plan for the firm.',
          year: '',
        },
        {
          title: 'Eco-Structure Board',
          details: '',
          year: '2010-Present',
        },
        {
          title: 'Evergreen Awards Jury',
          details: '',
          year: '2010',
        },
        {
          title: 'Minnesota Contractors Association Sustainable Design Awards Jury',
          details: '',
          year: '2010',
        },
        {
          title: 'USGBC Mississippi Headwaters Chapter (HGA)',
          details: 'Sponsor of chapter.',
          year: '2004-Present',
        },
        {
          title: 'CSI-IFMA Product Showcase Organizing Committee',
          details: 'Leader of conference planning. Keynote panel.',
          year: '2004, 2005',
        },
        {
          title: 'AIA Continuing Education Provider Curriculum Development',
          details: '',
          year: '1997',
        },
        {
          title: 'American Institute of Architects (AIA) Committee on the Environment, Environmental Resource Guide,',
          details: 'Task group member for ERG, energy group and materials group. Contributions included research on the regulatory background of paints, input for ERG format and contact with other associations to secure involvement. Coordinated ERG meetings at 3M, a construction products supplier, and generated support for ERG project.',
          year: '1990-1993',
        },
        {
          title: 'Construction Specifications Institute (CSI)',
          details: 'Professional Member Construction Specifications Institute Technical Committee Chairman.',
          year: '1990-1993',
        },
        {
          title: 'American Society for Testing and Materials (ASTM), Sub-Committee Chair',
          details: 'D-1 Committee on Paints and Related Coatings - concrete sealer standards subcommittee developing standards for penetrating sealers, task group leader developing standard for testing chemical resistance of concrete and masonry sealers. C-24 Committee Building Seals and Sealants member. Task group for C 957-87 Standard Spec for coatings. Pursuing development of new standards.',
          year: '1991-1992',
        },
        {
          title: 'Sealant Waterproofing and Restoration Institute (SWRI)',
          details: 'Traffic Bearing Waterproofing Committee member.',
          year: '1991-1992',
        },
        {
          title: 'Joint Working Group on Housing',
          details: 'A group cooperating with the Soviet Union on developing the market for general construction, renovation and western style housing. This group was coordinated by J.A. Jones Construction Company.',
          year: '1991-1992',
        },
        {
          title: 'American Institute of Architects (AIA)',
          details: 'Task group for ERG, energy group and materials group. Contributions include research on the regulatory background of paints, input for ERG format and contact with other associations to secure involvement. Coordinated ERG meetings at 3M, a construction products supplier, and generated support for ERG project.',
          year: '1990-1992',
        },
        {
          title: 'MasterSpec Architectural Review Committee',
          details: '',
          year: '1991',
        },
        {
          title: 'AIA Housing Committee,',
          details: '',
          year: '1991',
        },
      ],
      presentations: [
        {
          title: 'Net Zero Summit, Detroit Area',
          details: 'Panel facilitator.',
          year: 2020,
        },
        {
          title: 'Impact Conference,',
          details: 'Sponsored by USGBC Minnesota, St Paul Rivercenter, St Paul Minnesota, \"Transformative Future, Living Building Challenge: Wolf Ridge Environmental Center Case Study,\" Guest lecturers Patrick Thibaudeau, Pete Smerud, Jim Bradburn, Jonathan Ballmer.',
          year: 2018,
        },
        {
          title: 'US Green Building Council Duluth: Building Green 2017 \"Engage and Empower\"',
          details: 'Duluth Minnesota, \"Transformative Future, Living Building Challenge: Wolf Ridge Environmental Center Case Study,\" Guest lecturers Patrick Thibaudeau, Pete Smerud, Jim Bradburn, Jonathan Ballmer.',
          year: 2017,
        },
        {
          title: '14th Annual Sustainability Summit and Exposition: Building a Sustainable Future – Making it Work',
          details: 'Milwaukee Area Technical College, Milwaukee, Wisconsin. \"Mega-Trends, Future Forces and New Ways of Thinking about Sustainability,\" Keynote address.',
          year: 2017,
        },
        {
          title: 'Antioch University: Graduate Naturalist Training Program',
          details: 'Wolf Ridge Environmental Learning Center Sustainability Curriculum, Finland Minnesota, \"Starting at Zero: A New Way of Thinking About Our Future,\" Guest lecturer.',
          year: 2017,
        },
        {
          title: '15th Annual New York State Green Building Conference',
          details: 'Syracuse New York, \"Planning a Net-Zero Ready Facility: Counter-Intuitive Opportunities and Solutions,\" co-presenter with Chris Piche, Elementa Consulting.',
          year: 2017,
        },
        {
          title: 'University of Minnesota College of Design',
          details: 'ARCH 5550: Environmental Technology; Integrative Ecological Design for Responsive Architecture, Guest lecturer, Sustainable design.',
          year: 2016,
        },
        {
          title: 'Design Future Council Sustainable Design Summit',
          details: 'Seattle Washington, panel presenter on future trends.',
          year: 2016,
        },
        {
          title: 'Association of Nature Center Administrators (ANCA)',
          details: 'Sandstone MN, conference presentation on Living Building Challenge at Wolf Ridge Environmental Learning Center, co-presented with Pete Smerud.',
          year: 2016,
        },
        {
          title: 'University of Hawaii 4th Annual Sustainability Summit',
          details: 'Oahu, \"Starting at Zero – Campus Sustainability Planning,\" Keynote address to all campuses on Hawaiian Islands.',
          year: 2016,
        },
        {
          title: 'Design Future Council Sustainable Design Summit',
          details: 'Dallas TX, panel presenter on future trends.',
          year: 2015,
        },
        {
          title: 'BUILDING Chicago-Greening the Heartland',
          details: '\"Measuring Building Performance, User Satisfaction and Financial Value across Energy, Carbon, Waster and Materials,\"',
          year: 2013,
        },
        {
          title: 'USGBC Mississippi Headwaters Chapter',
          details: 'Quarterly presentation, \"Future Forces Powering Now.\" This presentation focused on long term future trends that have evidence in emerging efforts today. About 80 attendees.',
          year: 2013,
        },
        {
          title: 'Design Future Council Sustainable Design Summit',
          details: 'Dallas TX, panel presenter on future trends.',
          year: 2016,
        },
        {
          title: 'HGA-University',
          details: '\"High Performance Building Research Results\" presentation to a seven office audience of about 120 people. Information presented includes POE survey on two case study projects, Energy, Carbon, Water, Waste and Materials performance data and Life Cycle Cost information on energy cost savings. Sample size: 40 projects.',
          year: 2012,
        },
        {
          title: 'AIBC Conference',
          details: '\"Zero-Plus and College of Desert Sustainable Design Plans\"',
          year: 2012,
        },
        {
          title: '8th International Sustainability Conference',
          details: 'Vancouver BC Canada, \"Beyond Net Zero: An Innovative Approach for a New College in the California Desert with a Quadruple Bottom Line.\"',
          year: 2012,
        },
        {
          title: '3M Worldwide Broadcast',
          details: '\"Trends in Sustainable Design.\"',
          year: 2011,
        },
        {
          title: 'Design Future Council Sustainable Leadership Summit',
          details: 'Boston, Presented Zero-Plus concepts to executives from national and international participants. Participated in executive council roundtable.',
          year: 2011,
        },
        {
          title: 'HGA Annual Shareholder Meeting',
          details: 'Organizer of presentation to HGA annual shareholder meeting. Overall development of 30 minutes presentation for multiple presenters, via video conference to 6 or 7 locations nationwide. Occasional travel to lead follow-up presentations with local co-presenters.',
          year: '2011, 2007, 2005',
        },
        {
          title: 'USGBC GreenBuild International Conference',
          details: 'Chicago McCormick Place. Session presented to about 250 people.',
          year: 2010,
        },
        {
          title: 'The Big Green Conference',
          details: '\"The 2030 Plan - Affecting Change within Development and Design,\" Patrick Thibaudeau, Julianne Laue, Laura D\'Ardenne. Moderator - John Carmody. Panel presenter on achieving carbon neutral design.',
          year: 2010,
        },
        {
          title: 'USGBC Chapter Meetings',
          details: 'Multiple presentations including one at U of M lecture hall, one on a new approach to sustainable design and one on achieving net zero energy.',
          year: '2010, 2007, 2005',
        },
        {
          title: 'HGA Annual Shareholder Meeting',
          details: 'Led the development of 30 minutes presentation for 7 council leaders featuring an integrated approach of two speakers for 6 topics developed out a strategic visioning session I led. Six topics for improving the firm\'s market strength were: sustainability, integrated services, collaborative process, reputation, firm-wide expertise, design excellence.',
          year: 2009,
        },
        {
          title: 'ACEC MN',
          details: '\"LEED and the process.\"',
          year: 2009,
        },
        {
          title: 'World Usability Day',
          details: '\"Greening in a Different Color.\"',
          year: 2009,
        },
        {
          title: 'CSI-MSP December Chapter Meeting',
          details: '\"The Black and White of Green: From Sustainable Ideas to Certified Construction.\"',
          year: 2008,
        },
        {
          title: 'Economic Development Association of Minnesota (EDAM)',
          details: '\"Green Minnesota - What Does That Mean?\" How sustainable design impacts our communities. Patrick Thibaudeau and Rick Carter, co-presenters.',
          year: 2007,
        },
        {
          title: 'CSI Project Manual Resource Training',
          details: 'Second year presenting a one hour session introducing chapter 4 Design of the new CSI Project Resource Manual. Co-presented Larry Prinds of Saint Paul, MN. Location: Minneapolis Convention Center. In addition, due to the untimely death of one presenter, stepped in on short notice to present to the chapter on procurement for one hour.',
          year: 2007,
        },
        {
          title: 'USGBC Mississippi Headwaters Chapter',
          details: 'University of Minnesota, College of Architecture and Landscape Architecture auditorium. \"Back to the Future\" a presentation of practical advice and real examples of how to implement LEED in design and construction. Co-presented with Terry Brickman of PCL construction. Audience was over 100 at the U of M and about 80 total at HGA.',
          year: 2006,
        },
        {
          title: 'CSI Project Manual Resource Training',
          details: 'Presented a one hour session introducing chapter 4 Design of the new CSI Project Resource Manual. Emphasis on sustainable design. Co-presented Larry Prinds of Saint Paul, MN.',
          year: 2006,
        },
        {
          title: 'LEED Accredited Professional Class',
          details: 'Varied format including: a 6 part series to introduce sustainable design, all day sessions, three part series with practice exam.',
          year: 2005,
        },
        {
          title: 'CSI-IFMA Showcase',
          details: 'Key note panel speaker/presenter, Minneapolis Convention Center. Topic Project Partnering. Speaker to an audience of approximately 400 at MSP Convention center ballroom stage.',
          year: 2005,
        },
        {
          title: 'Construction and Facility Showcase (CSI-IFMA)',
          details: 'Two years planning committee participation to plan the event. Upgraded promotional materials for new venue at convention center. Planned theme and education tracks. 2004 theme: \"Collaboration for healthy secure buildings.\" 2005 theme: \"Partnering for Performance.\" Received CSI firm Principal Award for 2004 participation as well as an individual citation.',
          year: 2005,
        },
        {
          title: 'CSI-IFMA Exhibitor Training',
          details: '2 hr training session co-presented with Alan Griffith a national recognized presenter within CSI.',
          year: 2005,
        },
        {
          title: 'AIA Panel on Sustainable Design',
          details: 'Presentor',
          year: 2004,
        },
        {
          title: 'CSI Chapter Meeting',
          details: '\"Pantages Theater\", 1 hour presentation.',
          year: 2004,
        },
        {
          title: 'Maxxon Corporation',
          details: 'Dana Point California, National dealers meeting presentation, opening session. 45 minutes presentation regarding trends in construction and how to get specified. Approximately 225 people.',
          year: 2001,
        },
        {
          title: 'University of Minnesota - College of Education and Human Development',
          details: 'FE/WCFE 5201 - Family and Work Relationships: Presentation to class as guest speaker on home offices Spring 2000. Invited to return to present again Feb 2001.',
          year: 2000,
        },
        {
          title: 'AIA Continuing Education Provider Curriculum Development',
          details: 'Development of internal training programs for continuing education of architecture professionals for professional development and state registration continuing education requirements.',
          year: 1997,
        },
        {
          title: 'AIA MN',
          details: 'Presented seminar on environmental issues for building design and materials selection, seminar organizer.',
          year: 1992,
        },
        {
          title: 'Construction Documents Seminar',
          details: '10 page research paper on law for architects addressing the subject \"The Role of the Manufacturer\'s Representative in the development of the Contract Documents,\" resulted in two hour seminar for 3M Construction Markets field sales people. Topics addressed in seminar: How projects move through an office, basics of specifying, office organization, B-141 definitions of basic services, A-201 definitions of responsibilities, development of documents and the participant in the design team.',
          year: '1989, 1990',
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