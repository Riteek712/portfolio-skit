<script lang="ts">
  import AnimatedTooltip from '../shared/AnimatedTooltip.svelte';

  // State for expanded sections
  let expandedSections = {
    developer: false,
    intern: false,
    projectLead: false
  };

  function toggleSection(section: keyof typeof expandedSections) {
    expandedSections[section] = !expandedSections[section];
    expandedSections = expandedSections; // Trigger reactivity
  }
</script>

<div id="WorkEX" class="fade-section flex flex-col items-center gap-16 w-full min-h-screen py-20">
  <AnimatedTooltip tooltipText="My Developer Journey">
    <h1 class="text-violet-200 font-semibold text-4xl sm:text-5xl md:text-6xl underline-offset-8 tracking-wide mb-5 hover:underline decoration-double">
      <span class="text-violet-400">dev</span> <span class="text-[#FFAD60]">:</span> <span class="text-orchid">trail</span>
    </h1>
  </AnimatedTooltip>
  
  <div class="w-full max-w-6xl px-4">
    <!-- Timeline Container -->
    <div class="relative min-h-screen">
      <!-- Timeline Line -->
      <div class="timeline-line"></div>
      
      <!-- Experience Items -->
      <div class="space-y-12">
        <!-- Timechain Labs - Software Developer -->
        <div class="experience-item relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ease-out">
          <!-- Timeline Dot -->
          <div class="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-violet-400 rounded-full border-4 border-black shadow-lg z-10"></div>
          
          <!-- Content Card -->
          <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
            <div class="bg-black/60 backdrop-blur-sm border border-violet-400/30 rounded-2xl p-6 hover:border-violet-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-violet-400 to-orchid rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="fa fa-code text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-violet-400 font-bold text-xl group-hover:text-white transition-colors duration-300">Software Developer</h3>
                  <p class="text-[#FFAD60] font-semibold text-lg">Timechain Labs</p>
                  <p class="text-gray-300 text-sm">06/2024 - Present, Remote</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Details -->
          <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8">
            <div class="bg-black/40 backdrop-blur-sm border border-orchid/30 rounded-2xl p-6 hover:border-orchid/60 transition-all duration-300">
              <ul class="space-y-4 text-gray-200">
                <!-- Always visible points -->
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Full-Stack Development:</strong> Led backend REST APIs and UI workflows using Go, TypeScript, and AWS across multiple projects.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Product Management:</strong> Bridged technical and business teams, achieving 30% increase in team efficiency and on-time project delivery.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>System Integration:</strong> Implemented CRM and Payment Gateway systems used by 15+ team members across departments.</span>
                </li>
                
                <!-- Expandable points -->
                {#if expandedSections.developer}
                  <li class="flex items-start gap-3 animate-fade-in">
                    <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Cross-functional Leadership:</strong> Collaborated with teams to define product requirements, prioritize features, and drive roadmaps.</span>
                  </li>
                  <li class="flex items-start gap-3 animate-fade-in">
                    <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Blockchain Development:</strong> Built STAS-20 token wrapper with detailed event logging for improved transparency and traceability.</span>
                  </li>
                  <li class="flex items-start gap-3 animate-fade-in">
                    <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Security Implementation:</strong> Integrated Google OAuth authentication for secure and streamlined user login processes.</span>
                  </li>
                {/if}
              </ul>
              
              <!-- Show More/Less Button -->
              <button 
                on:click={() => toggleSection('developer')}
                class="mt-4 px-4 py-2 bg-gradient-to-r from-violet-400 to-orchid text-white rounded-lg hover:from-violet-500 hover:to-orchid transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                {expandedSections.developer ? 'Show Less' : 'Show More'}
                <i class="fa fa-chevron-{expandedSections.developer ? 'up' : 'down'} transition-transform duration-300 group-hover:scale-110"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Timechain Labs - Software Developer Intern -->
        <div class="experience-item relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ease-out">
          <!-- Timeline Dot -->
          <div class="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-orchid rounded-full border-4 border-black shadow-lg z-10"></div>
          
          <!-- Content Card -->
          <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
            <div class="bg-black/60 backdrop-blur-sm border border-orchid/30 rounded-2xl p-6 hover:border-orchid/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(218,112,214,0.3)] group">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-orchid to-[#FFAD60] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="fa fa-code text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-orchid font-bold text-xl group-hover:text-white transition-colors duration-300">Software Developer Intern</h3>
                  <p class="text-[#FFAD60] font-semibold text-lg">Timechain Labs</p>
                  <p class="text-gray-300 text-sm">10/2023 - 06/2024, Remote</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Details -->
          <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8">
            <div class="bg-black/40 backdrop-blur-sm border border-violet-400/30 rounded-2xl p-6 hover:border-violet-400/60 transition-all duration-300">
              <ul class="space-y-4 text-gray-200">
                <!-- Always visible points -->
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Backend Development:</strong> Built and maintained APIs with AWS KMS integration for asymmetric key encryption/decryption.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>API Development:</strong> Constructed 40+ endpoints including CRUD operations, pagination, authorization, and analytics.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>DevOps & Deployment:</strong> Streamlined deployments using Docker containers on AWS EC2 for improved scalability.</span>
                </li>
                
                <!-- Expandable points -->
                {#if expandedSections.intern}
                  <li class="flex items-start gap-3 animate-fade-in">
                    <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Database Management:</strong> Implemented transactional queries, pagination, and authorization systems.</span>
                  </li>
                  <li class="flex items-start gap-3 animate-fade-in">
                    <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Performance Optimization:</strong> Achieved faster deployments and improved resource utilization through containerization.</span>
                  </li>
                {/if}
              </ul>
              
              <!-- Show More/Less Button -->
              <button 
                on:click={() => toggleSection('intern')}
                class="mt-4 px-4 py-2 bg-gradient-to-r from-orchid to-[#FFAD60] text-white rounded-lg hover:from-orchid hover:to-[#FFAD60] transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                {expandedSections.intern ? 'Show Less' : 'Show More'}
                <i class="fa fa-chevron-{expandedSections.intern ? 'up' : 'down'} transition-transform duration-300 group-hover:scale-110"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Timechain Summer of Code 2023 -->
        <div class="experience-item relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ease-out">
          <!-- Timeline Dot -->
          <div class="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-[#FFAD60] rounded-full border-4 border-black shadow-lg z-10"></div>
          
          <!-- Content Card -->
          <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
            <div class="bg-black/60 backdrop-blur-sm border border-[#FFAD60]/30 rounded-2xl p-6 hover:border-[#FFAD60]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,173,96,0.3)] group">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-[#FFAD60] to-violet-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="fa fa-code text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-[#FFAD60] font-bold text-xl group-hover:text-white transition-colors duration-300">Project Lead: Ultraforms</h3>
                  <p class="text-orchid font-semibold text-lg">Timechain Summer of Code 2023</p>
                  <p class="text-gray-300 text-sm">05/2023 - 09/2023, Remote</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Details -->
          <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8">
            <div class="bg-black/40 backdrop-blur-sm border border-orchid/30 rounded-2xl p-6 hover:border-orchid/60 transition-all duration-300">
              <ul class="space-y-4 text-gray-200">
                <!-- Always visible points -->
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Team Leadership:</strong> Led a 6-member team for Ultraforms project with full-stack development using MongoDB, Node.js, and Nest.js.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Full-Stack Development:</strong> Designed user-friendly wireframes and composed backend APIs with Swagger documentation.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Recognition:</strong> Recognized as top contributor, leading to invitation to work with the organization's main team.</span>
                </li>
                
                <!-- Expandable points -->
                {#if expandedSections.projectLead}
                  <li class="flex items-start gap-3 animate-fade-in">
                    <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Technical Architecture:</strong> Implemented industry-standard testing tools and comprehensive API documentation.</span>
                  </li>
                  <li class="flex items-start gap-3 animate-fade-in">
                    <div class="w-2 h-2 bg-[#FFAD60] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Project Management:</strong> Coordinated development phases, code reviews, and team collaboration effectively.</span>
                  </li>
                {/if}
              </ul>
              
              <!-- Show More/Less Button -->
              <button 
                on:click={() => toggleSection('projectLead')}
                class="mt-4 px-4 py-2 bg-gradient-to-r from-[#FFAD60] to-violet-400 text-white rounded-lg hover:from-[#FFAD60] hover:to-violet-500 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                {expandedSections.projectLead ? 'Show Less' : 'Show More'}
                <i class="fa fa-chevron-{expandedSections.projectLead ? 'up' : 'down'} transition-transform duration-300 group-hover:scale-110"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @media (max-width: 768px) {
    .experience-item:nth-child(even) .md\\:text-right {
      text-align: left;
    }
  }

  /* Timeline line styling */
  .timeline-line {
    position: absolute;
    left: 2rem;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, #a855f7, #da70d6, #ffad60);
    opacity: 0.6;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
  }

  @media (min-width: 768px) {
    .timeline-line {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /* Animation for expanding content */
  .animate-fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>