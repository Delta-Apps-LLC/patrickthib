<template>
  <div>
    <div class="centered">
      <SectionHeader title="Employment" />
      <PictureCard :items="employment" />
    </div>

    <div class="centered" style="margin-bottom: 20px;">
      <SectionHeader title="Service and Leadership" />
      <Dropdown :items="leadership" />
    </div>
    
    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import PictureCard from '~/components/PictureCard.vue'
import Dropdown from '~/components/Dropdown.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'

export default {
  name: 'ExperiencePage',

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    PictureCard,
    Dropdown,
    SectionHeader,
    BottomBuffer
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
          duration: '2004-2016',
        },
        {
          title: 'HGA Chair of HGA Sustainability Council',
          details: 'First chair of newly formed council.',
          duration: '',
        },
        {
          title: 'Design Futures Council Sustainable Leadership Summit',
          details: 'Delegate to the annual invitation-only meeting. 2012 produced a document called the \"Portland Promise.\"',
          duration: '2012-Present',
        },
        {
          title: 'Visioning the Future of University of Minnesota Center for Sustainable Building Research',
          details: 'Meeting with Dean of College of Architecture to develop a plan for the future of this center.',
          duration: '2012',
        },
        {
          title: 'HGA Firm-Wide Sustainable Design Summit',
          details: 'Hosted 26 delegates gathered for a two day summit to plan for the future of sustainable design and how to impact communities for good.',
          duration: '2011, 2012',
        },
        {
          title: 'Center for the Built Environment, UC Berkley',
          details: 'Executive council of industry partners.',
          duration: '2011, 2012',
        },
        {
          title: 'AIA Large Firm Roundtable Sustainable Design Leaders',
          details: 'National working group of large architecture firms working toward a carbon neutral future. Water working group and carbon working group.',
          duration: '2009-Present',
        },
        {
          title: 'HGA Strategic Plan Subcommittee',
          details: 'Appointed to subcommittee to help develop the firm\'s strategic plan for 2011-2013 and for 2007-2010. Wrote the sustainable design strategic plan for the firm.',
          duration: '',
        },
        {
          title: 'Eco-Structure Board',
          details: '',
          duration: '2010-Present',
        },
        {
          title: 'Evergreen Awards Jury',
          details: '',
          duration: '2010',
        },
        {
          title: 'Minnesota Contractors Association Sustainable Design Awards Jury',
          details: '',
          duration: '2010',
        },
        {
          title: 'USGBC Mississippi Headwaters Chapter (HGA)',
          details: 'Sponsor of chapter.',
          duration: '2004-Present',
        },
        {
          title: 'CSI-IFMA Product Showcase Organizing Committee',
          details: 'Leader of conference planning. Keynote panel.',
          duration: '2004, 2005',
        },
        {
          title: 'AIA Continuing Education Provider Curriculum Development',
          details: '',
          duration: '1997',
        },
        {
          title: 'American Institute of Architects (AIA) Committee on the Environment, Environmental Resource Guide,',
          details: 'Task group member for ERG, energy group and materials group. Contributions included research on the regulatory background of paints, input for ERG format and contact with other associations to secure involvement. Coordinated ERG meetings at 3M, a construction products supplier, and generated support for ERG project.',
          duration: '1990-1993',
        },
        {
          title: 'Construction Specifications Institute (CSI)',
          details: 'Professional Member Construction Specifications Institute Technical Committee Chairman.',
          duration: '1990-1993',
        },
        {
          title: 'American Society for Testing and Materials (ASTM), Sub-Committee Chair',
          details: 'D-1 Committee on Paints and Related Coatings - concrete sealer standards subcommittee developing standards for penetrating sealers, task group leader developing standard for testing chemical resistance of concrete and masonry sealers. C-24 Committee Building Seals and Sealants member. Task group for C 957-87 Standard Spec for coatings. Pursuing development of new standards.',
          duration: '1991-1992',
        },
        {
          title: 'Sealant Waterproofing and Restoration Institute (SWRI)',
          details: 'Traffic Bearing Waterproofing Committee member.',
          duration: '1991-1992',
        },
        {
          title: 'Joint Working Group on Housing',
          details: 'A group cooperating with the Soviet Union on developing the market for general construction, renovation and western style housing. This group was coordinated by J.A. Jones Construction Company.',
          duration: '1991-1992',
        },
        {
          title: 'American Institute of Architects (AIA)',
          details: 'Task group for ERG, energy group and materials group. Contributions include research on the regulatory background of paints, input for ERG format and contact with other associations to secure involvement. Coordinated ERG meetings at 3M, a construction products supplier, and generated support for ERG project.',
          duration: '1990-1992',
        },
        {
          title: 'MasterSpec Architectural Review Committee',
          details: '',
          duration: '1991',
        },
        {
          title: 'AIA Housing Committee,',
          details: '',
          duration: '1991',
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