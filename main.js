import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users, Target, Lightbulb, Cog, Building2, GraduationCap, Heart, TrendingUp } from 'lucide-react';

const CSRDashboard = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);

  const frameworkData = {
    what: {
      icon: Target,
      color: 'bg-amber-200',
      hoverColor: 'hover:bg-amber-300',
      textColor: 'text-amber-900',
      title: 'WHAT',
      subtitle: 'Defining CSR-Based Remediation',
      description: 'CSR-based remediation refers to corporate-funded educational interventions specifically designed to address learning gaps in underserved schools. These programs aim to provide targeted support for students who have fallen behind grade-level standards through various models including before-school, during-school, or after-school interventions. The current landscape operates under Schedule VII of the Companies Act, though integration with formal education systems presents ongoing challenges in terms of resource allocation and program design.',
      points: [
        'CSR Remediation Programs',
        'School Remediation',
        'Program Models',
        'Current Landscape'
      ],
      details: {
        'CSR Remediation Programs': 'Corporate-funded educational interventions designed to address learning gaps and improve student outcomes in underserved schools. These initiatives leverage mandatory CSR spending to create sustainable, impactful educational programs.',
        'School Remediation': 'Targeted educational support for students who have fallen behind grade-level standards. This includes specialized instruction, personalized learning approaches, and supplementary resources to help students catch up with their peers.',
        'Program Models': 'Three primary delivery models exist: Before-school programs (6:30-8:00 AM) for early morning intervention, during-school integrated programs that blend with regular curriculum, and after-school programs (3:00-5:00 PM) that provide dedicated remediation time.',
        'Current Landscape': 'CSR education initiatives operate under Schedule VII of the Companies Act, creating a mandatory 2% spending requirement. However, integration challenges persist including coordination with formal education systems, resource allocation complexities, and the need for robust monitoring frameworks.'
      }
    },
    why: {
      icon: Lightbulb,
      color: 'bg-rose-200',
      hoverColor: 'hover:bg-rose-300',
      textColor: 'text-rose-900',
      title: 'WHY',
      subtitle: 'The Case for CSR Remediation',
      description: 'The imperative for CSR remediation stems from significant learning gaps in marginalized communities where government schools often lack resources for specialized interventions. With millions of students across rural and urban areas requiring support, the mandatory 2% CSR spending creates a substantial funding pool. Corporate involvement brings innovation capacity, modern pedagogies, and technology integration while ensuring long-term sustainability through multi-stakeholder collaboration. This aligns with government mandates for educational spending and policy support for public-private partnerships.',
      points: [
        'Educational Need',
        'CSR Advantage',
        'Regulatory Alignment'
      ],
      details: {
        'Educational Need': 'Significant achievement disparities exist in marginalized communities, with millions of students in rural and urban areas falling behind grade-level standards. Government schools face severe resource constraints, lacking funds for specialized remediation programs, qualified instructors, and modern educational materials. The scale of impact required demands innovative, well-funded interventions.',
        'CSR Advantage': 'The mandatory 2% CSR spending requirement creates a substantial funding pool for educational initiatives. Private sector involvement brings innovation capacity, technological solutions, and modern pedagogical approaches. Corporate commitment ensures program sustainability and continuity beyond short-term projects. Multi-stakeholder collaboration bridges corporate expertise, NGO implementation capabilities, and community-specific needs.',
        'Regulatory Alignment': 'Government mandates specifically encourage CSR spending on education under Schedule VII. Strong policy support exists for public-private partnerships in education sector. Accountability frameworks through monitoring and evaluation systems ensure transparency and impact measurement, creating an enabling environment for corporate involvement.'
      }
    },
    whom: {
      icon: Users,
      color: 'bg-stone-200',
      hoverColor: 'hover:bg-stone-300',
      textColor: 'text-stone-900',
      title: 'WHOM',
      subtitle: 'Stakeholder Ecosystem',
      description: 'The CSR remediation ecosystem comprises three distinct tiers of stakeholders. Tier 1 includes influencers and funders like CSR corporations (TCS, Infosys, Reliance), government agencies, and policy makers who shape strategy and provide resources. Tier 2 encompasses designers and enablers such as NGOs (Pratham, Akanksha), school administrators, EdTech providers, and community leaders who implement programs. Tier 3 consists of direct beneficiaries including students, teachers, parents, and M&E agencies who receive services and provide critical feedback for continuous improvement.',
      points: [
        'Tier 1: Influencers & Funders',
        'Tier 2: Designers & Enablers',
        'Tier 3: Beneficiaries'
      ],
      details: {
        'Tier 1: Influencers & Funders': 'This tier shapes overall strategy and provides financial resources. CSR-funding corporations like TCS, Infosys, Reliance, Wipro Foundation, and Tata Trusts fund programs and demand impact metrics. Government agencies (Ministry of Education, NCERT, SCERT, District Education Officers) regulate and ensure compliance. Policy makers from Parliament, State education boards, and NITI Aayog create enabling frameworks. Board members and investors provide governance, strategic alignment, and demand transparency in social impact.',
        'Tier 2: Designers & Enablers': 'Implementation partners who design and execute programs. NGOs like Pratham, Akanksha, and Save the Children manage ground-level implementation and community engagement. School administrators coordinate logistics and resources. Academic experts from universities provide research-based design and quality assurance. EdTech providers like BYJU\'S, iDream Education, and Khan Academy offer digital solutions. Teacher unions advocate for welfare, while community leaders (Sarpanch, ward councilors) mobilize local support. Media ensures transparency and public awareness.',
        'Tier 3: Beneficiaries': 'Direct recipients and feedback providers. Students (primary, secondary, marginalized groups including SC/ST, girls, disabled, rural populations) are primary beneficiaries experiencing improved learning outcomes. Teachers deliver remediation and provide classroom feedback. Parents support participation and monitor progress through PTAs. Community groups (SHGs, youth clubs, village education committees) provide grassroots involvement. M&E agencies like KPMG and Pratham-ASER assess effectiveness and ensure accountability through rigorous evaluation.'
      }
    },
    how: {
      icon: Cog,
      color: 'bg-cyan-200',
      hoverColor: 'hover:bg-cyan-300',
      textColor: 'text-cyan-900',
      title: 'HOW',
      subtitle: 'Implementation Strategy',
      description: 'Implementation requires careful consideration of timing models, program design components, and success factors. The recommended approach is a hybrid model with after-school programs (3-5 PM) as the default due to minimal disruption and maximum flexibility, supplemented by government partnerships for during-school integration in select pilots, and before-school programs for specific urban contexts. Success depends on robust needs assessment, competency-based curriculum, specialized teacher training, technology integration, community engagement, and comprehensive monitoring and evaluation frameworks with multi-year corporate commitment.',
      points: [
        'Timing Models',
        'Program Design',
        'Success Factors'
      ],
      details: {
        'Timing Models': 'Three primary models exist: Before-school programs (6:30-8:00 AM) work best in urban contexts with good transportation, offering minimal disruption but facing attendance challenges. During-school integrated programs guarantee attendance and equity but require government approval and curriculum coordination. After-school programs (3:00-5:00 PM) are the recommended default model, offering dedicated remediation time and flexibility despite potential attendance drops due to student fatigue and competing household responsibilities. A hybrid approach adapts to local context and student needs.',
        'Program Design': 'Six critical components ensure effectiveness: (1) Needs assessment through baseline testing and community consultations; (2) Curriculum development with competency-based, culturally adapted content in local languages; (3) Teacher training in specialized remediation pedagogy with fair compensation; (4) Technology integration using EdTech platforms for personalized learning with low-tech alternatives; (5) Community engagement through parent orientation and local leader partnerships; (6) Monitoring & evaluation with regular assessments, third-party evaluations, and transparent reporting to all stakeholders.',
        'Success Factors': 'Efficacy requires clear learning outcome definitions, research-based pedagogical approaches, adequate program duration (minimum 3-6 months), and trained facilitators with appropriate student ratios (1:15-20). Sustainability demands multi-year corporate commitment, government partnership and policy support, community ownership and participation, teacher union collaboration, and scalable, replicable models. Regular assessment and adaptive instruction ensure continuous improvement based on student progress and feedback from all stakeholder tiers.'
      }
    }
  };

  const stakeholders = {
    tier1: {
      name: 'Tier 1: Influencers & Funders',
      color: 'bg-amber-50 border-amber-300',
      description: 'Shape strategy, provide resources, set compliance standards',
      members: [
        { name: 'CSR Corporations', role: 'Fund programs, set priorities, demand impact metrics', examples: 'TCS, Infosys, Reliance, Wipro, Tata Trusts' },
        { name: 'Government Agencies', role: 'Regulate, ensure compliance, provide approvals', examples: 'Ministry of Education, NCERT, SCERT, DEOs' },
        { name: 'Policy Makers', role: 'Create enabling frameworks, set mandates', examples: 'Parliament, State boards, NITI Aayog' },
        { name: 'Board Members', role: 'Governance, strategic alignment, ethical oversight', examples: 'Company/NGO directors, advisory councils' },
        { name: 'Investors', role: 'Value social impact, demand transparency', examples: 'Impact investors, mutual funds' }
      ]
    },
    tier2: {
      name: 'Tier 2: Designers, Partners & Enablers',
      color: 'bg-stone-50 border-stone-300',
      description: 'Design, implement, and support program delivery',
      members: [
        { name: 'NGOs/Nonprofits', role: 'Design interventions, manage implementation', examples: 'Pratham, Akanksha, Save the Children' },
        { name: 'School Administrators', role: 'Coordinate logistics, manage resources', examples: 'Principals, headmasters, cluster coordinators' },
        { name: 'Academic Experts', role: 'Research-based design, quality assurance', examples: 'University professors, curriculum specialists' },
        { name: 'EdTech Providers', role: 'Digital solutions, learning platforms', examples: "BYJU'S, iDream Education, Khan Academy" },
        { name: 'Teacher Unions', role: 'Advocate for teacher welfare', examples: 'AIPTF, local associations' },
        { name: 'Community Leaders', role: 'Mobilize support, ensure cultural relevance', examples: 'Sarpanch, ward councilors' },
        { name: 'Media', role: 'Public awareness, transparency', examples: 'Education journalists, CSR publications' }
      ]
    },
    tier3: {
      name: 'Tier 3: Beneficiaries & Feedback Providers',
      color: 'bg-rose-50 border-rose-300',
      description: 'Receive services, implement programs, provide critical feedback',
      members: [
        { name: 'Students', role: 'Primary beneficiaries, improved learning outcomes', examples: 'Primary, secondary, SC/ST, girls, disabled, rural' },
        { name: 'Teachers', role: 'Deliver remediation, provide classroom feedback', examples: 'Subject teachers, special educators, volunteers' },
        { name: 'Parents', role: 'Support participation, monitor progress', examples: 'PTAs, guardians, caregivers' },
        { name: 'Community Groups', role: 'Grassroots involvement, local advocacy', examples: 'PTAs, SHGs, youth clubs, village committees' },
        { name: 'M&E Agencies', role: 'Assess effectiveness, ensure accountability', examples: 'KPMG, Pratham-ASER, internal audit teams' }
      ]
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-stone-800 mb-2">CSR as School Remediation</h1>
        <p className="text-lg text-stone-600">Efficacy & Implementation Strategy Framework</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(frameworkData).map(([key, data]) => {
          const Icon = data.icon;
          const isExpanded = expandedSection === key;
          return (
            <div
              key={key}
              className={`${data.color} ${data.hoverColor} border-2 border-opacity-50 p-6 rounded-lg cursor-pointer transition-all transform hover:scale-102 shadow-md`}
            >
              <div 
                onClick={() => setExpandedSection(isExpanded ? null : key)}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center space-x-3">
                  <Icon size={32} className={data.textColor} />
                  <div>
                    <h2 className={`text-2xl font-bold ${data.textColor}`}>{data.title}</h2>
                    <p className={`text-sm ${data.textColor} opacity-75`}>{data.subtitle}</p>
                  </div>
                </div>
                {isExpanded ? 
                  <ChevronDown size={24} className={data.textColor} /> : 
                  <ChevronRight size={24} className={data.textColor} />
                }
              </div>
              
              {isExpanded && (
                <div className="mt-4 space-y-4">
                  <div className="bg-white bg-opacity-60 rounded p-4 border border-gray-300">
                    <p className={`text-sm leading-relaxed ${data.textColor}`}>
                      {data.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 bg-white bg-opacity-40 rounded p-4">
                    <p className={`font-bold text-sm ${data.textColor}`}>Key Components:</p>
                    {data.points.map((point, idx) => (
                      <div key={idx}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedStakeholder(selectedStakeholder === `${key}-${point}` ? null : `${key}-${point}`);
                          }}
                          className={`w-full text-left font-semibold text-sm ${data.textColor} hover:underline flex items-center justify-between py-1`}
                        >
                          <span>• {point}</span>
                          {selectedStakeholder === `${key}-${point}` ? 
                            <ChevronDown size={16} /> : 
                            <ChevronRight size={16} />
                          }
                        </button>
                        {selectedStakeholder === `${key}-${point}` && (
                          <p className={`text-sm mt-2 pl-4 border-l-2 ${data.textColor} bg-white bg-opacity-50 p-3 rounded`}>
                            {data.details[point]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-stone-300 to-amber-300 border-2 border-stone-400 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center">
          <TrendingUp className="mr-2" />
          Recommended Model: Hybrid + Context-Based Approach
        </h3>
        <ul className="space-y-2 text-sm text-stone-900">
          <li>• <strong>Primary:</strong> After-school programs (3-5 PM) as default - least disruptive, maximum flexibility</li>
          <li>• <strong>Integration:</strong> Partner with government for during-school pilots</li>
          <li>• <strong>Supplementary:</strong> Before-school for urban contexts and exam prep</li>
          <li>• <strong>Critical:</strong> Strong M&E framework, multi-stakeholder governance, teacher compensation</li>
        </ul>
      </div>
    </div>
  );

  const renderStakeholderMap = () => (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-stone-800 mb-2">Stakeholder Ecosystem Map</h2>
        <p className="text-stone-600">Three-tier hierarchical structure with visual diagram</p>
      </div>

      {/* Hierarchy Diagram */}
      <div className="bg-gradient-to-b from-amber-50 to-rose-50 border-2 border-stone-300 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-stone-800 mb-6 text-center">Visual Hierarchy Flow</h3>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Tier 1 - Top */}
          <div className="mb-6">
            <div className="bg-amber-200 border-2 border-amber-400 rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-center mb-2">
                <Building2 size={24} className="text-amber-900 mr-2" />
                <h4 className="font-bold text-amber-900">TIER 1: Influencers & Funders</h4>
              </div>
              <p className="text-xs text-center text-amber-800 mb-3 italic">Shape strategy, provide resources, set compliance</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-white text-amber-900 text-xs px-3 py-1 rounded-full font-medium">CSR Corps</span>
                <span className="bg-white text-amber-900 text-xs px-3 py-1 rounded-full font-medium">Gov Agencies</span>
                <span className="bg-white text-amber-900 text-xs px-3 py-1 rounded-full font-medium">Policy Makers</span>
                <span className="bg-white text-amber-900 text-xs px-3 py-1 rounded-full font-medium">Board Members</span>
                <span className="bg-white text-amber-900 text-xs px-3 py-1 rounded-full font-medium">Investors</span>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div className="flex justify-center my-3">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-stone-400"></div>
                <div className="text-stone-600 text-xs bg-stone-100 px-2 py-1 rounded">Strategy & Resources Flow</div>
                <div className="w-0.5 h-8 bg-stone-400"></div>
              </div>
            </div>
          </div>

          {/* Tier 2 - Middle */}
          <div className="mb-6">
            <div className="bg-stone-200 border-2 border-stone-400 rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-center mb-2">
                <Cog size={24} className="text-stone-900 mr-2" />
                <h4 className="font-bold text-stone-900">TIER 2: Designers, Partners & Enablers</h4>
              </div>
              <p className="text-xs text-center text-stone-800 mb-3 italic">Design, implement, and support program delivery</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-white text-stone-900 text-xs px-3 py-1 rounded-full font-medium">NGOs</span>
                <span className="bg-white text-stone-900 text-xs px-3 py-1 rounded-full font-medium">School Admins</span>
                <span className="bg-white text-stone-900 text-xs px-3 py-1 rounded-full font-medium">Academics</span>
                <span className="bg-white text-stone-900 text-xs px-3 py-1 rounded-full font-medium">EdTech</span>
                <span className="bg-white text-stone-900 text-xs px-3 py-1 rounded-full font-medium">Teacher Unions</span>
                <span className="bg-white text-stone-900 text-xs px-3 py-1 rounded-full font-medium">Leaders</span>
                <span className="bg-white text-stone-900 text-xs px-3 py-1 rounded-full font-medium">Media</span>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div className="flex justify-center my-3">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-stone-400"></div>
                <div className="text-stone-600 text-xs bg-stone-100 px-2 py-1 rounded">Program Implementation</div>
                <div className="w-0.5 h-8 bg-stone-400"></div>
              </div>
            </div>
          </div>

          {/* Tier 3 - Bottom */}
          <div className="mb-4">
            <div className="bg-rose-200 border-2 border-rose-400 rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-center mb-2">
                <Heart size={24} className="text-rose-900 mr-2" />
                <h4 className="font-bold text-rose-900">TIER 3: Beneficiaries & Feedback Providers</h4>
              </div>
              <p className="text-xs text-center text-rose-800 mb-3 italic">Receive services, implement programs, provide critical feedback</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-white text-rose-900 text-xs px-3 py-1 rounded-full font-medium">Students</span>
                <span className="bg-white text-rose-900 text-xs px-3 py-1 rounded-full font-medium">Teachers</span>
                <span className="bg-white text-rose-900 text-xs px-3 py-1 rounded-full font-medium">Parents</span>
                <span className="bg-white text-rose-900 text-xs px-3 py-1 rounded-full font-medium">Community Groups</span>
                <span className="bg-white text-rose-900 text-xs px-3 py-1 rounded-full font-medium">M&E Agencies</span>
              </div>
            </div>
          </div>

          {/* Feedback Loop Arrow */}
          <div className="flex justify-center mt-4">
            <div className="bg-stone-100 border-2 border-dashed border-stone-400 rounded-lg p-3 max-w-md">
              <div className="flex items-center justify-center text-stone-700 text-sm font-semibold mb-1">
                <span className="mr-2">↑</span> Feedback Loop <span className="ml-2">↑</span>
              </div>
              <p className="text-xs text-center text-stone-600">
                Continuous feedback flows from Tier 3 → Tier 2 → Tier 1 for program improvement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Stakeholder Cards */}
      <div className="border-t-2 border-stone-300 pt-6">
        <h3 className="text-2xl font-bold text-stone-800 mb-4 text-center">Detailed Stakeholder Breakdown</h3>
        
        {Object.entries(stakeholders).map(([tier, data]) => (
          <div key={tier} className={`${data.color} border-2 rounded-lg p-6 shadow-md mb-4`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-stone-800">{data.name}</h3>
                <p className="text-sm text-stone-600 italic">{data.description}</p>
              </div>
              <button
                onClick={() => setExpandedSection(expandedSection === tier ? null : tier)}
                className="text-stone-700 hover:text-stone-900"
              >
                {expandedSection === tier ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </button>
            </div>

            {expandedSection === tier && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {data.members.map((member, idx) => (
                  <div key={idx} className="bg-white rounded p-4 shadow-sm border border-stone-200">
                    <h4 className="font-bold text-stone-800 mb-1">{member.name}</h4>
                    <p className="text-sm text-stone-600 mb-2">{member.role}</p>
                    <p className="text-xs text-stone-500 italic">Examples: {member.examples}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderHierarchy = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-stone-800 mb-2">Ecosystem Hierarchy Diagram</h2>
        <p className="text-stone-600">Flow of influence and implementation</p>
      </div>

      <div className="relative">
        {/* Tier 1 */}
        <div className="flex justify-center mb-8">
          <div className="bg-amber-300 border-2 border-amber-400 rounded-lg p-6 w-full max-w-2xl shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Building2 size={28} className="text-amber-900" />
              <h3 className="text-xl font-bold text-amber-900">TIER 1: Influencers & Funders</h3>
            </div>
            <p className="text-center text-sm mb-4 text-amber-900">Shape strategy, provide resources, set compliance</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white bg-opacity-60 rounded p-2 text-amber-900 font-medium">CSR Corporations</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-amber-900 font-medium">Government Agencies</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-amber-900 font-medium">Policy Makers</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-amber-900 font-medium">Board Members</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <div className="text-6xl text-stone-400">↓</div>
        </div>

        {/* Tier 2 */}
        <div className="flex justify-center mb-8">
          <div className="bg-stone-300 border-2 border-stone-400 rounded-lg p-6 w-full max-w-2xl shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Cog size={28} className="text-stone-900" />
              <h3 className="text-xl font-bold text-stone-900">TIER 2: Designers & Enablers</h3>
            </div>
            <p className="text-center text-sm mb-4 text-stone-900">Design, implement, support delivery</p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-white bg-opacity-60 rounded p-2 text-stone-900 font-medium">NGOs/Nonprofits</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-stone-900 font-medium">School Admins</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-stone-900 font-medium">Academic Experts</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-stone-900 font-medium">EdTech Providers</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-stone-900 font-medium">Teacher Unions</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-stone-900 font-medium">Community Leaders</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <div className="text-6xl text-stone-400">↓</div>
        </div>

        {/* Tier 3 */}
        <div className="flex justify-center">
          <div className="bg-rose-300 border-2 border-rose-400 rounded-lg p-6 w-full max-w-2xl shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Heart size={28} className="text-rose-900" />
              <h3 className="text-xl font-bold text-rose-900">TIER 3: Beneficiaries & Feedback</h3>
            </div>
            <p className="text-center text-sm mb-4 text-rose-900">Receive services, provide critical feedback</p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-white bg-opacity-60 rounded p-2 text-rose-900 font-medium">Students</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-rose-900 font-medium">Teachers</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-rose-900 font-medium">Parents</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-rose-900 font-medium">Community Groups</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-rose-900 font-medium">M&E Agencies</div>
              <div className="bg-white bg-opacity-60 rounded p-2 text-rose-900 font-medium">Health Workers</div>
            </div>
          </div>
        </div>

        {/* Feedback Loop */}
        <div className="mt-8 flex justify-center">
          <div className="bg-stone-50 border-2 border-dashed border-stone-400 rounded-lg p-4 max-w-xl">
            <p className="text-center text-sm text-stone-700">
              <strong>Feedback Loop:</strong> Continuous feedback from Tier 3 flows back to Tier 1 & 2 
              through M&E agencies, ensuring program improvement and accountability
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderImplementation = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-stone-800 mb-2">Implementation Timeline Models</h2>
        <p className="text-stone-600">Comparing timing approaches for CSR remediation programs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Combined Before & After School */}
        <div className="bg-gradient-to-br from-cyan-50 to-amber-50 border-2 border-amber-300 rounded-lg p-5 shadow-md">
          <h3 className="text-lg font-bold text-amber-900 mb-3">Before & After-School Programs</h3>
          
          <div className="mb-4 bg-cyan-100 border border-cyan-300 rounded p-3">
            <p className="text-xs font-bold text-cyan-900 mb-1">Before-School (6:30-8:00 AM)</p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-green-700 text-xs">✓ Advantages:</p>
                <ul className="list-disc ml-5 text-stone-700 text-xs">
                  <li>Minimal disruption to regular curriculum</li>
                  <li>Fresh student energy and attention</li>
                  <li>Efficient infrastructure use</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 text-xs">✗ Challenges:</p>
                <ul className="list-disc ml-5 text-stone-700 text-xs">
                  <li>Transportation and safety concerns</li>
                  <li>Parental resistance to early hours</li>
                  <li>Limited intervention time</li>
                </ul>
              </div>
              <div className="bg-white p-2 rounded border border-cyan-400 mt-2">
                <p className="font-semibold text-cyan-900 text-xs">Best For:</p>
                <p className="text-xs text-stone-700">Urban areas with good transport, motivated students, quick reinforcement</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 border border-amber-300 rounded p-3">
            <p className="text-xs font-bold text-amber-900 mb-1">After-School (3:00-5:00 PM) ⭐ Recommended</p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-green-700 text-xs">✓ Advantages:</p>
                <ul className="list-disc ml-5 text-stone-700 text-xs">
                  <li>Dedicated time for focused remediation</li>
                  <li>Flexibility in program design</li>
                  <li>Popular and proven CSR model</li>
                  <li>Can attract specialized instructors</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 text-xs">✗ Challenges:</p>
                <ul className="list-disc ml-5 text-stone-700 text-xs">
                  <li>Attendance drops (household/farm work)</li>
                  <li>Student fatigue after full school day</li>
                  <li>Additional infrastructure needed</li>
                </ul>
              </div>
              <div className="bg-white p-2 rounded border border-amber-400 mt-2">
                <p className="font-semibold text-amber-900 text-xs">Best For:</p>
                <p className="text-xs text-stone-700">Severe learning gaps, tech-driven programs, volunteer-led initiatives</p>
              </div>
            </div>
          </div>
        </div>

        {/* During School */}
        <div className="bg-stone-50 border-2 border-stone-300 rounded-lg p-5 shadow-md">
          <h3 className="text-lg font-bold text-stone-900 mb-3">During-School (Integrated)</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-green-700">✓ Advantages:</p>
              <ul className="list-disc ml-5 text-stone-700">
                <li>Guaranteed attendance with no extra travel</li>
                <li>Seamless integration with regular curriculum</li>
                <li>Maximum reach and equity for all students</li>
                <li>Teacher familiarity with student needs</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-700">✗ Challenges:</p>
              <ul className="list-disc ml-5 text-stone-700">
                <li>Requires curriculum coordination with school</li>
                <li>May reduce time for regular syllabus completion</li>
                <li>Needs government approval and policy alignment</li>
                <li>Resource allocation conflicts possible</li>
              </ul>
            </div>
            <div className="bg-stone-100 p-3 rounded border border-stone-300 mt-3">
              <p className="font-semibold text-stone-900">Best For:</p>
              <p className="text-xs text-stone-700">Government-partnered programs, schools with flexible timetables, comprehensive remediation needs requiring sustained intervention</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-stone-200 to-cyan-200 border-2 border-stone-300 rounded-lg p-6 mt-6 shadow-md">
        <h3 className="text-xl font-bold text-stone-900 mb-4">Program Design Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white bg-opacity-70 rounded p-3 border border-stone-300">
            <p className="font-bold mb-1 text-stone-900">1. Needs Assessment</p>
            <p className="text-xs text-stone-700">Baseline testing, community consultations, stakeholder mapping</p>
          </div>
          <div className="bg-white bg-opacity-70 rounded p-3 border border-stone-300">
            <p className="font-bold mb-1 text-stone-900">2. Curriculum Development</p>
            <p className="text-xs text-stone-700">Competency-based content, local language support, hybrid approaches</p>
          </div>
          <div className="bg-white bg-opacity-70 rounded p-3 border border-stone-300">
            <p className="font-bold mb-1 text-stone-900">3. Teacher Training</p>
            <p className="text-xs text-stone-700">Remediation pedagogy, continuous development, fair compensation</p>
          </div>
          <div className="bg-white bg-opacity-70 rounded p-3 border border-stone-300">
            <p className="font-bold mb-1 text-stone-900">4. Technology Integration</p>
            <p className="text-xs text-stone-700">EdTech platforms, digital assessment, low-tech alternatives</p>
          </div>
          <div className="bg-white bg-opacity-70 rounded p-3 border border-stone-300">
            <p className="font-bold mb-1 text-stone-900">5. Community Engagement</p>
            <p className="text-xs text-stone-700">Parent orientation, local leader partnerships, volunteer support</p>
          </div>
          <div className="bg-white bg-opacity-70 rounded p-3 border border-stone-300">
            <p className="font-bold mb-1 text-stone-900">6. M&E Framework</p>
            <p className="text-xs text-stone-700">Regular assessments, third-party evaluations, transparent reporting</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="bg-white border-2 border-stone-300 rounded-lg shadow-md mb-6 p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'overview', label: 'Framework Overview', icon: GraduationCap },
              { id: 'stakeholders', label: 'Stakeholder Map', icon: Users },
              { id: 'hierarchy', label: 'Ecosystem Hierarchy', icon: TrendingUp },
              { id: 'implementation', label: 'Implementation Models', icon: Cog }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setSelectedView(id);
                  setExpandedSection(null);
                  setSelectedStakeholder(null);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedView === id
                    ? 'bg-stone-600 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border-2 border-stone-300 rounded-lg shadow-md p-6">
          {selectedView === 'overview' && renderOverview()}
          {selectedView === 'stakeholders' && renderStakeholderMap()}
          {selectedView === 'hierarchy' && renderHierarchy()}
          {selectedView === 'implementation' && renderImplementation()}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-stone-600 text-sm bg-stone-100 border border-stone-300 rounded-lg p-4">
          <p className="font-semibold text-stone-800">Key Insight:</p>
          <p>CSR remediation can effectively serve as school remediation when designed with rigor, 
          context-appropriate timing, meaningful stakeholder engagement, and sustained corporate commitment.</p>
        </div>
      </div>
    </div>
  );
};

export default CSRDashboard;
