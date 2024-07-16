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
          title: 'University of California, Berkeley, Center for the Built Environment, Executive Advisory Board',
          details: 'Strategic planning for research impacting human experience and built environment performance.',
          duration: '2011-Present',
        },
        {
          title: 'Trimble-Sketch-up Advisory Board',
          details: 'Provide strategic insight for future planning of the architecture profession and the built environment.',
          duration: '2023-Present',
        },
        {
          title: 'National Large Firm Roundtable (LFRT) Sustainability Committee Executive Board',
          details: 'Strategic planning for the 60 largest firm in the US and the collective action to be taken to change business as usual for the built environment and related industries.',
          duration: '2022-Present',
        },
        {
          title: 'National Large Firm Roundtable Annual Sustainability Summit Leader',
          details: 'National co-chair for the national summit "Collaborating to Exponentially Accelerate our Decarbonized Future" Representing 200,000 design professional under my leadership a selected group of 50+ senior national leaders convened to significantly change business as usual.',
          duration: '2024',
        },
        {
          title: 'National Large Firm Roundtable Sustainability Committee Chair',
          details: 'National co-chair leading 60+ of the largest architecture firms in the United States to make an accelerated carbon neutral commitment for the firms own operations adding on to the long-standing carbon neutral design commitment for the firms work for its clients. Recently convened annual summit with the focus of "Accelerating our Decarbonized Future"',
          duration: '2022-2024',
        },
        {
          title: 'American Institute of Architects, Framework for Design Excellence',
          details: 'National working group and principal of author of "Design for Equitable Communities" and co-author with 9 others to write and publish the guide for the entire profession outlining design excellence.',
          duration: '2021',
          url: 'https://www.aia.org/resources/6077668-framework-for-design-excellence'
        },
        {
          title: 'National Working Group Leader, Sustainability Playbook',
          details: 'Large Firm Roundtable Sustainability Committee. Led a working group and was principal author of a concise guide for CEO\'s to operationalize sustainability at scale across the profession. This guide was unanimously adopted as the high performance guide for firm operations and integrating sustainability into each firms operations at an accelerated pace by identifying top five high performance attributes and top 5 high performance actions.',
          duration: '2020',
        },
        {
          title: 'Strategic Planning',
          details: 'JLG strategic planning core team 2020 to 2021. HGA: strategic plan for 2011-2013 and for 2007-2010. Wrote the sustainable design strategic plan for the firm.',
          duration: 'Various',
        },
        {
          title: 'Strategic Planning',
          details: 'JLG strategic planning core team 2020 to 2021. HGA: strategic plan for 2011-2013 and for 2007-2010. Wrote the sustainable design strategic plan for the firm.',
          duration: '6 years',
        },
        // 
        {
          title: 'National Chairman of Council Coordinating Committee',
          details: 'Responsible for all disciplines and practice initiatives with emphasis including sustainable design.',
          duration: '2004-2016',
        },
        {
          title: 'National Chair of HGA Sustainability Council',
          details: 'First chair of national council to collaborate between all disciplines and plan for collective action.',
          duration: '9 years',
        },
        {
          title: 'Design Futures Council Sustainable Leadership Summit',
          details: 'National delegate to the annual invitation-only meeting. 2012 produced a document called the \"Portland Promise.\"',
          duration: '2012-Present',
        },
        {
          title: 'Visioning the Future of University of Minnesota Center for Sustainable Building Research',
          details: 'Strategic planning meeting with the Dean of College of Architecture to develop a plan for the future of this center.',
          duration: '2012',
        },
        {
          title: 'Firm-Wide Sustainable Design Summit',
          details: 'Hosted 26 delegates gathered for a two day summit to plan for the future of sustainable design and how to impact communities for good.',
          duration: '2011, 2012',
        },
        {
          title: 'AIA Large Firm Roundtable Sustainable Design Leaders',
          details: 'National working group of large architecture firms working toward a carbon neutral future. Water working group and carbon working group.',
          duration: '2009-Present',
        },
        {
          title: 'Eco-Structure National Advisory Board',
          details: 'Strategic planning for knowledge sharing topic and looking to the future of the architecture profession.',
          duration: '2010-2012',
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
          title: 'AIA Continuing Education Course Provider',
          details: 'Ongoing provider of curriculum for continuing education for American Institute of Architects.',
          duration: 'Ongoing',
        },
        {
          title: 'North American Institute of Architects (AIA) Committee on the Environment, Environmental Resource Guide,',
          details: 'Strategy that became todays sustainability approach and national organizations. National working group member for ERG, energy group and materials group. Contributions included research, strategy for ERG format and content. National liaison for AIA MN. Presented to local professional associations and fostered support for the strategic direction of the ERG project in 3M and around the profession.',
          duration: '1990-1993',
        },
        {
          title: 'Construction Specifications Institute (CSI), Technical Committee Chair',
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
          details: 'Working group leading to Committee on the Environment (COTE). AIA Committee on the Environment. AIA Environmental Resource Guide. AIA MN Committee on the Environment. National working group for Framework for Design Excellence: Strategy, planning and content for a sustainability guide for the built environment that impacts the work of 90,000+ architects and additional others.',
          duration: '1990-1992',
        },
        {
          title: 'MasterSpec Architectural Review Committee',
          details: '',
          duration: '1991',
        },
        {
          title: 'AIA Housing Committee',
          details: '',
          duration: '1991',
        },
        {
          title: 'Professional Association Membership',
          details: 'American Institute of Architects. Construction Specification Institute. US Green Building Council. Living Futures Institute. UC Berkeley Center for the Built Environment. Design Future Council. Large Firm Roundtable.',
          duration: '',
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