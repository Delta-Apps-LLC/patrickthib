<template>
  <div>
    <div class="centered">
      <SectionHeader title="Presentations" />
      <Dropdown :items="presentations" />
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
  name: 'PresentationsPage',

  head() {
    return {
      title: 'Presentations - Patrick Thibaudeau',
      meta: [
        { hid: 'presentations-description', name: 'description', content: 'Patrick Thibaudeau presentations page; see Patrick\'s professional presentations throughout his career' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, architecture, sustainability, presentation, speaker, keynote' }
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
    Dropdown,
    SectionHeader,
    BottomBuffer
  },

  data () {
    return {
      presentations: [
        {
          title: 'Ending the Syrup Syndrome: Theodore Roosevelt Presidential Library',
          url: null,
          details: 'November 13, 2024, GreenBuild International Conference, Philadelphia PA.',
          year: [2024],
        },
        {
          title: 'Collaborating to Exponentially Accelerate our Decarbonized',
          url: null,
          details: 'AIA Large firm Roundtable Annual Summit, August 22 and 23. Representing over 200,000 design professionals in the US, 50+ senior leaders of the largest architecture firms and national leaders of each major design profession and associated organizations gathered under my leadership to change business as usual.',
          year: [2024],
        },
        {
          title: 'TEDx Speaker Introduction, TEDx Fargo',
          url: 'https://www.youtube.com/embed/edmrxrdDePQ?si=JIS9tDKbKdcgxltg',
          details: '',
          year: [2024],
        },
        {
          title: 'Beyond Zero: The Bright Future of Campus Planning',
          url: null,
          details: 'A visioning presentation to the president and selected cabinet members of Minnesota State University at Mankato. June 10, 2024.',
          year: [2024],
        },
        {
          title: 'Accelerating our Decarbonized Future through Design Integration',
          url: null,
          details: 'JLG Design Integration Summit, May 21 to May 23. An immersive experience for 33 senior leaders over two days to transform business as usual at JLG Architects.',
          year: [2024],
        },
        {
          title: 'Ending the Syrup Syndrome: Theodore Roosevelt Presidential Library',
          url: null,
          details: 'Living Futures, live May 8, 2024, Omni Conference Center at CNN Plaza 1000+/- live audience, recorded and published by International Living Futures Institute.',
          year: [2024],
        },
        {
          title: 'Accelerating our Decarbonized Future',
          url: null,
          details: 'JLG Earth Week presentations to 10 offices April 22 to April 26, 2024.',
          year: [2024],
        },
        {
          title: 'Accelerating our Decarbonized Future”: Large Firm Roundtable CEO\'s January 2024.',
          url: null,
          details: 'A strategy presentation to the 60+/- CEO of the largest firms in the US. Achieved a unanimous game-changing profession wide impacting commitment for unified action by all the CEO\'s of the large firm creating a national strategy that has fueled action and achieved measured national results.',
          year: [2024],
        },
        {
          title: 'Ending the Syrup Syndrome: Making vs Taking',
          url: 'https://youtu.be/edmrxrdDePQ',
          details: 'TEDx Fargo, live July 20, 2023, 1200+/- live audience, published October 4, 2023, TEDx Talks channel on Youtube.',
          year: [2024],
        },
        {
          title: 'Accelerating our Decarbonized Future',
          url: null,
          details: 'Large Firm Roundtable (LFRT) Annual Summit, August 24, 2023and October 12, 2023 to LFRT CEO\'s.',
          year: [2023],
        },
        {
          title: 'Integrated Design Summit',
          url: null,
          details: 'August 16-17, 2023. A focused, emissive, transforming experience for 33 leading designers at JLG Architects to make sustainability a key criteria and part of the culture not a separate add-on.',
          year: [2023],
        },
        {
          title: 'Design Informing Questions',
          url: null,
          details: 'August 16-17, 2023. A focused, emissive, transforming experience for 33 leading designers at JLG Architects to make sustainability a key criteria and part of the culture not a separate add-on.',
          year: [2023],
        },
        {
          title: 'Ending the Syrup Syndrome: Making vs Taking',
          url: null,
          details: 'AIA North Dakota State Conference, Keynote, October 4, 2023.',
          year: [2023],
        },
        {
          title: 'Ending the Syrup Syndrome-Earth Day',
          url: null,
          details: 'School of Environmental Studies, April 19, 2023. A presentation about COP 26 climate action, carbon and a personal call to action.',
          year: [2023],
        },
        {
          title: 'The Integrative Process: A Virtual Roundtable',
          url: 'https://www.buildinggreen.com/webcast/demand-webinar-integrative-process-virtual-roundtable',
          details: 'Building Green national webinar, April 12, 2023. Patrick Thibaudeau, Principal Sustainability Officer, JLG along with Barbara Batshalom, Founder and CEO, Sustainable Performance Institute, Darrah Jakab, Associate Principal Sustainability, MHTN, Candace Person, Director of Consulting, Building Green.',
          year: [2023],
        },
        {
          title: 'Carbon Neutral Commitment',
          url: null,
          details: 'Large Firm Roundtable CEO\'s meeting January 11, 2023. Led a working group of national experts and presented to 60+/- CEO\'s of the largest firms in the US to obtain a collective commitment to accelerate the entire architecture profession to become carbon neutral by 2024 using SBTI approach reduce real emissions by 2030 to 80% of benchmark year.',
          year: [2023],
        },
        {
          title: 'Ending the Syrup Syndrome-A Breath of Fresh Air: Resilience for Persons and Place',
          url: 'https://www.csiresources.org/minneapolis-stpaulchapter/events/event-description?CalendarEventKey=bf6d5e7a-f452-413f-b398-095fb051e3f4&CommunityKey=18bc3ea4-bcac-4de8-bd0e-6677046c43dc&Home=%2Fhome',
          details: 'Carbon Leadership Form, US Green Building Council and Construction Specification Institute combined meeting, Minneapolis MN, January 11, 2023.',
          year: [2023],
        },
        {
          title: 'Think Big, Future of Learning, Business of Education, Carbon Neutral Resilient Facilities: Minnesota State University at Moorhead Master Plan, November 2022',
          url: null,
          details: 'A presentation to a public event for the Moorhead community. Interviewed for TV, radio and print new media.',
          year: [2022],
        },
        {
          title: 'MSUM unveils long-range facility plan',
          url: 'https://www.valleynewslive.com/2022/11/01/msum-unveils-long-range-facility-plan/',
          details: '',
          year: [2022],
        },
        {
          title: 'What You Did Not Know Was Possible',
          url: null,
          details: 'University of California Berkely Center for the Built Environment Partner profile, October 2022.',
          year: [2022],
        },
        {
          title: 'Think Big and Decarbonize',
          url: null,
          details: 'Large Firm Roundtable Annual Summit, Denver Colorado, October 6-7, 2022. Presented a summary of COP26 and examples of how we can achieve what we did not know was possible. We are on the brink of the greatest economic transformation possibly in a century. Think Big and Be Bold. The time to act is now!',
          year: [2022],
        },
        {
          title: 'What Really Happened at COP26: Decarbonizing our Lifestyle',
          url: null,
          details: 'Minnesota State University at Moorhead, campus sustainability committee, student senate, and campus president\'s cabinet 2022. Various versions of the presentation given to multiple audiences.',
          year: [2022],
        },
        {
          title: 'A Breath of Fresh Air: New Approach to Biophilic Design',
          url: null,
          details: 'University of Minnesota College of Design, 2022.',
          year: [2022],
        },
        {
          title: 'Future Trends about Carbon Neutral',
          url: null,
          details: '2023 Annual Outlook Forecast Conference, McGraw Hill Dodge annual trends conference, Invited speaker, Online Presentation, November 2022.',
          year: [2022],
        },
        {
          title: 'Future Trends Panel',
          url: null,
          details: 'The Future of Environmental Sustainability: Design Futures Council, September 2022, Washington DC.',
          year: [2022],
        },
        {
          title: 'Ending the Syrup Syndrome',
          url: null,
          details: 'American Institute of Architects South Dakota State Conventions, September 2022.',
          year: [2022],
        },
        {
          title: 'Wolf Ridge Environmental Learning Center: First in World Living Building Certified',
          url: null,
          details: 'International Living Futures Institute National Conference, video recorded presentation, leader of team with Owner and other team members, May 2022.',
          year: [2022],
        },
        {
          title: 'Ending the Syrup Syndrome',
          url: null,
          details: 'Stanford University Global Innovation Conference on the built environment, Fall 2021.',
          year: [2021],
        },
        {
          title: 'Ending the Syrup Syndrome to Achieve Climate Action',
          url: null,
          details: 'COP26, Glasgow Scotland, global audience, November 2021.',
          year: [2021],
        },
        {
          title: 'A Breath of Fresh Air: Health Wellness and Resilience for Persons and Place',
          url: null,
          details: 'Hosted by American Institute of Architects Minnesota online from COP26, November 2021.',
          year: [2021],
        },
        {
          title: 'Morning Talks with Carbon Action Network',
          url: null,
          details: 'Live online interview at COP26 with head of housing for European Union.',
          year: [2021],
        },
        {
          title: 'Live TV News Interview with London Based New outlet at COP26',
          url: null,
          details: '',
          year: [2021],
        },
        {
          title: 'Theodore Roosevelt Presidential Library: A new global standard for sustainability',
          url: null,
          details: 'American Institute of Architect South Dakota State Convention, September 2021.',
          year: [2021],
        },
        {
          title: 'Tips for Building and Exceptional Sustainable Practice: Operationalizing Sustainability in Organizations',
          url: null,
          details: 'Invited speaker with Barbara BatShalom executive director of the Sustainable Performance Institute (SPI) and Sandra Montalbo University of Texas at San Antonio, American Institute of Architects National Convention.',
          year: [2021],
        },
        {
          title: 'Achieving Net Zero',
          url: null,
          details: 'Net Zero Summit, Detroit Area (Online), March 2020. Panel participant.',
          year: [2020],
        },
        {
          title: 'Achieving Net Zero Business Case',
          url: null,
          details: 'Net Zero Summit, Detroit Area, March 2020. Panel leader.',
          year: [2020],
        },
        {
          title: 'Impact Conference',
          url: null,
          details: 'sponsored by USGBC Minnesota, St Paul Rivercenter, St Paul Minnesota, \"Transformative Future, Living Building Challenge: Wolf Ridge Environmental Center Case Study,\" Guest lecturers Patrick Thibaudeau, Pete Smerud, Jim Bradburn, Jonathan Ballmer. May 1, 2018.',
          year: [2018],
        },
        {
          title: 'US Green Building Council Duluth: Building Green 2017 \"Engage and Empower\"',
          url: null,
          details: 'Duluth Minnesota, \"Transformative Future, Living Building Challenge: Wolf Ridge Environmental Center Case Study,\" Guest lecturers Patrick Thibaudeau, Pete Smerud, Jim Bradburn, Jonathan Ballmer. October 12, 2017.',
          year: [2017],
        },
        {
          title: 'Mega-Trends, Future Forces and New Ways of Thinking about Sustainability',
          url: null,
          details: 'Keynote Speaker, 14th Annual Sustainability Summit and Exposition: Building a Sustainable Future - Making it Work, Milwaukee Area Technical College, Milwaukee, Wisconsin, May 4, 2017.',
          year: [2017],
        },
        ////////
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
          title: 'University of Hawaii 4th Annual Sustainability Summit Keynote Speaker',
          url: 'https://vimeo.com/170720450',
          details: 'Oahu, \"Starting at Zero - Campus Sustainability Planning,\" Keynote address to all campuses on Hawaiian Islands.',
          year: [2016],
        },
        {
          title: '7x7x7 Design Energy Water',
          url: 'https://www.youtube.com/watch?v=RNHhe3TI6-s',
          details: 'Greenbuild International Conference by US Green Building Council 2016.  Four presentations around the state of California to show how to convert existing buildings in the California school system to net zero energy.  Presented to school officials, professionals and the public culminating in the final presentation in Sacramento and the Greenbuild at the end of the year.',
          year: [2015],
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
          details: '\"Measuring Building Performance, User Satisfaction and Financial Value across Energy, Carbon, Waster and Materials\"',
          year: [2013],
        },
        {
          title: 'USGBC Mississippi Headwaters Chapter',
          url: null,
          details: 'Quarterly presentation, \"Future Forces Powering Now.\" This presentation focused on long term future trends that have evidence in emerging efforts today. About 80 attendees.',
          year: [2013],
        },
        {
          title: 'High Performance Building Research Results',
          url: null,
          details: 'presentation to a national seven office audience of about 120 people.  Information presented includes post occupancy evaluation survey on two case study projects, Energy, Carbon, Water, Waste and Materials performance data and Life Cycle Cost information on energy cost savings. Sample size: 40 projects. August 2012.',
          year: [2012],
        },
        {
          title: 'Zero-Plus and College of Desert Sustainable Design Plans',
          url: null,
          details: 'Architectural Institute of British Columbia Conference, May 2012.',
          year: [2012],
        },
        {
          title: 'Beyond Net Zero: An Innovative Approach for a New College in the California Desert with a Quadruple Bottom Line.',
          url: null,
          details: '8th International Sustainability Conference: Vancouver BC Canada, January 2012.',
          year: [2012],
        },
        {
          title: 'Trends in Sustainable Design.',
          url: null,
          details: '3M Worldwide Broadcast, 2011.',
          year: [2011],
        },
        {
          title: 'Zero-Plus',
          url: null,
          details: 'Design Future Council Sustainable Leadership Summit, Boston, MA presented to executives from national and international participants. Executive council roundtable. October 2011.',
          year: [2011],
        },
        {
          title: 'A Vision for the Future',
          url: null,
          details: 'HGA Annual National Shareholder Meeting, led a 7-person team and presented to HGA annual shareholder meeting. Led 7 council leaders featuring an integrated approach to present 6 topics to show a strategic vision for improving the firm\'s market strength were: sustainability, integrated services, collaborative process, reputation, firm-wide expertise, design excellence. 2011, 2007, 2005.',
          year: [2011, 2007, 2005],
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
          title: 'The 2030 Plan - Affecting Change within Development and Design',
          url: null,
          details: 'The Big Green Conference, Patrick Thibaudeau, Julianne Laue, Laura D\'Ardenne. Moderator - John Carmody. Panel presenter on achieving carbon neutral design. November 11, 2010.',
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
          title: 'LEED and the Process',
          url: null,
          details: 'American Council of Engineering Companies of Minnesota, Spring 2009.',
          year: [2009],
        },
        {
          title: 'Greening in a Different Color',
          url: null,
          details: 'World Usability Day, Minneapolis, MN, Spring 2009.',
          year: [2009],
        },
        {
          title: 'ACEC MN',
          url: null,
          details: '\"LEED and the process.\"',
          year: [2009],
        },
        {
          title: '\"Greening in a Different Color.\"',
          url: null,
          details: 'World Usability Day',
          year: [2009],
        },
        {
          title: 'CSI-MSP December Chapter Meeting',
          url: null,
          details: '\"The Black and White of Green: From Sustainable Ideas to Certified Construction.\"',
          year: [2008],
        },
        {
          title: 'The Black and White of Green: From Sustainable Ideas to Certified Construction',
          url: null,
          details: 'CSI-MSP December Chapter Meeting, Minneapolis, MN, December 8, 2008.',
          year: [2008],
        },
        {
          title: 'Sustainability Approach and LEED',
          url: null,
          details: 'Minnesota Chamber of Commerce.',
          year: [2008],
        },
        {
          title: 'Sustainability Approach and LEED',
          url: null,
          details: 'Rochester Minnesota Contractor\'s Association',
          year: [2008],
        },
        {
          title: 'Economic Development Association of Minnesota (EDAM)',
          url: null,
          details: '\"Green Minnesota - What Does That Mean?\" How sustainable design impacts our communities. Patrick Thibaudeau and Rick Carter, co-presenters.',
          year: [2007],
        },
        {
          title: 'Green Minnesota - What Does That Mean?',
          url: null,
          details: 'Economic Development Association of Minnesota (EDAM), How sustainable design impacts our communities. Patrick Thibaudeau and Rick Carter, co-presenters. Feb 15, 2007.',
          year: [2007],
        },
        {
          title: 'CSI Project Manual Resource Training - Sustainability in Specifications',
          url: null,
          details: 'Two years presenting a one hour session introducing chapter 4 Design of the new CSI Project Resource Manual. Co-presented Larry Prinds of Saint Paul, MN.  Location: Minneapolis Convention Center. In addition, due to the untimely death of one presenter, stepped in on short notice to present to the chapter on procurement for one hour. January 2007.',
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
          title: 'Back to the Future',
          url: null,
          details: 'US Green Building Council Mississippi Headwaters Chapter, University of Minnesota, College of Architecture and Landscape Architecture auditorium. a presentation of practical advice and real examples of how to implement LEED in design and construction. Co-presented with Terry Brickman of PCL construction. Audience was over 100 at the U of M and about 80 total at HGA. April 11, 2006.',
          year: [2006],
        },
        {
          title: 'LEED Accredited Professional Class',
          url: null,
          details: 'Varied format including: a 6 part series to introduce sustainable design, all day sessions, three part series with practice exam.',
          year: [2005],
        },
        {
          title: 'Project Partnering',
          url: null,
          details: 'CSI-IFMA Showcase keynote panel speaker/presenter, Minneapolis Convention Center. Approximately 400 at Minneapolis Convention center ballroom stage. Feb 23, 2005.',
          year: [2005],
        },
        {
          title: 'Collaboration for Healthy Secure Buildings',
          url: null,
          details: 'Construction and Facility Showcase, Construction Specifications Institute and International Facility Managers Association combined conference, 2004 Planning leader. Received CSI firm Principal Award for 2004 participation as well as an individual citation, 2005, Minneapolis, MN.',
          year: [2005],
        },
        {
          title: 'Partnering for Performance',
          url: null,
          details: 'Construction and Facility Showcase, Construction Specifications Institute and International Facility Managers Association combined conference, 2004 Planning leader, 2004, Minneapolis, MN.',
          year: [2004],
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
          title: 'Sustainable Design',
          url: null,
          details: 'American Institute of Architects panel presenter, 2004.',
          year: [2004],
        },
        {
          title: 'Pantages Theater',
          url: null,
          details: 'CSI Chapter Meeting, 1 hour presentation. January 2004.',
          year: [2004],
        },
        {
          title: 'Future Trends and Economic Indicators',
          url: null,
          details: 'Maxxon Corporation, Dana Point California, National dealers meeting presentation, opening session. 45 minutes presentation regarding trends in construction and how to get specified. Approximately 225 people. May 2001.',
          year: [2001],
        },
        {
          title: 'Family and Work Relationships FE/WCFE 5201',
          url: null,
          details: 'University of Minnesota - College of Education and Human Development. Presentation to class as guest speaker on home offices Spring 2000. Invited to return to present again Feb 2001',
          year: [2001],
        },
        {
          title: 'AIA Environmental Resource Guide (ERG)',
          url: null,
          details: 'CSI Chapter Meeting, 1992.',
          year: [1992],
        },
        {
          title: 'Environmental and Energy Factors in Facility Design and Operation',
          url: null,
          details: 'Environment Expo 92 April 23, 1992.',
          year: [1992],
        },
        {
          title: 'Environmental Issues for Building Design and Materials Selection',
          url: null,
          details: 'American Institute of Architects Minnesota seminar, 1991. Event organizer.',
          year: [1991],
        },
        {
          title: 'Environmental Issues for Building Design and Materials Selection',
          url: null,
          details: 'American Institute of Architects Minnesota seminar, 1992.',
          year: [1992],
        },
        {
          title: 'American Institute of Architects Continuing Education Provider and Curriculum Development',
          url: null,
          details: 'Development of internal training programs for continuing education of architecture professionals for professional development and state registration continuing education requirements. Courses organized and/or taught include:\n\n- LEED Accredited Professional Class - Varied format including: a 6 part series to introduce sustainable design, all day sessions, three part series with practice exam.\n- Overview of Sustainable Design: Multiple presentations over 8+ years.\n- Specification Writing - multiple sessions\n- Specifications and Materials Identification Abbreviations - multiple sessions\n- Introduction to Hardware (taught jointly with AHC)\n- Underslab vapor retarders and moisture/mold problems\n- Metal Panel (self-study display and reading guide)\n- Waterproofing design guide\n- Curtainwall design guide\n- 5-part series on construction administration',
          duration: '1997-2020'
        },
        {
          title: 'The Role of the Manufacturer\'s Representative in the development of the Contract Documents',
          url: null,
          details: 'Construction Documents Seminar, 1989 and 1990. 10 page research paper on law for architects addressing the subject  resulted in two hour seminar for 3M Construction Markets field sales people.',
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