<script lang="ts">
  import AnimatedTooltip from '../shared/AnimatedTooltip.svelte';
  import { onMount } from 'svelte';

  // State for expanded sections
  let expandedSections = {
    generativeStudio: false,
    timechainLabs: false,
    projectLead: false
  };

  let timelineContainer: HTMLElement;
  let parallaxElements: HTMLElement[] = [];

  function toggleSection(section: keyof typeof expandedSections) {
    expandedSections[section] = !expandedSections[section];
    expandedSections = expandedSections; // Trigger reactivity
  }

  function handleScroll() {
    if (!timelineContainer) return;
    
    const rect = timelineContainer.getBoundingClientRect();
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Calculate parallax effect for timeline line
    const timelineLine = timelineContainer.querySelector('.timeline-line') as HTMLElement;
    if (timelineLine) {
      const lineOffset = (scrollY - rect.top) * 0.3;
      timelineLine.style.transform = `translateY(${lineOffset}px)`;
    }
    
    // Calculate parallax effect for experience items
    parallaxElements.forEach((element, index) => {
      const elementRect = element.getBoundingClientRect();
      const elementCenter = elementRect.top + elementRect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      const parallaxOffset = distanceFromCenter * 0.1;
      
      // Add depth effect based on scroll position
      const depth = Math.max(0, 1 - Math.abs(distanceFromCenter) / windowHeight);
      element.style.transform = `translateY(${parallaxOffset}px) scale(${0.95 + depth * 0.05})`;
      element.style.opacity = `${0.7 + depth * 0.3}`;
    });
  }

  onMount(() => {
    // Get all experience items for parallax effect
    parallaxElements = Array.from(timelineContainer?.querySelectorAll('.experience-item') || []) as HTMLElement[];
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set positions
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div id="WorkEX" class="fade-section flex flex-col items-center gap-8 sm:gap-12 md:gap-16 w-full min-h-screen py-12 sm:py-16 md:py-20 relative overflow-hidden">
  <!-- Background parallax elements -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-20 left-10 w-32 h-32 bg-violet-400/10 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute top-40 right-20 w-24 h-24 bg-orchid/10 rounded-full blur-lg animate-pulse delay-1000"></div>
    <div class="absolute bottom-40 left-20 w-40 h-40 bg-[#FFAD60]/10 rounded-full blur-xl animate-pulse delay-2000"></div>
  </div>

  <div class="relative z-10">
    <AnimatedTooltip tooltipText="My Developer Journey">
      <h1 class="text-violet-200 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline-offset-8 tracking-wide mb-3 sm:mb-4 md:mb-5 hover:underline decoration-double">
        <span class="text-violet-400">dev</span> <span class="text-[#FFAD60]">:</span> <span class="text-orchid">trail</span>
      </h1>
    </AnimatedTooltip>
  </div>

  <div class="w-full max-w-6xl px-3 sm:px-4 relative z-10" bind:this={timelineContainer}>
    <!-- Timeline Container -->
    <div class="relative">
      <!-- Timeline Line with parallax -->
      <div class="timeline-line"></div>
      
                    <!-- Experience Items -->
        <div class="space-y-8 sm:space-y-10 md:space-y-12">
                    <!-- Generative Studio - Full-stack Developer (Current Position) -->
          <div class="experience-item relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 transition-all duration-700 ease-out group">
            <!-- Timeline Dot with parallax -->
            <div class="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-violet-400 rounded-full border-4 border-black shadow-lg z-10 animate-pulse"></div>
            
            <!-- Content Card -->
            <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
              <div class="group-hover:scale-105 transition-transform duration-300">
                <div class="bg-black/60 backdrop-blur-sm border border-violet-400/30 rounded-2xl p-4 sm:p-6 hover:border-violet-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group">
                  <div class="flex items-center justify-between">
                    <div class="text-left">
                      <h3 class="text-violet-400 font-bold text-lg sm:text-xl group-hover:text-white transition-colors duration-300">Full-stack Developer</h3>
                      <p class="text-[#FFAD60] font-semibold text-base sm:text-lg">Generative Studio</p>
                      <p class="text-gray-300 text-xs sm:text-sm">May 2025 - Present, Remote</p>
                    </div>
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-400 to-orchid rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i class="fa fa-code text-white text-lg sm:text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Details -->
            <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div class="bg-black/40 backdrop-blur-sm border border-orchid/30 rounded-2xl p-4 sm:p-6 hover:border-orchid/60 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
                <ul class="space-y-3 sm:space-y-4 text-gray-200 text-sm sm:text-base">
                  <li class="flex items-start gap-3">
                    <span class="text-violet-400 mt-1">•</span>
                    <span><strong>Frontend Development:</strong> Developing dynamic web applications using SvelteKit, TypeScript, and Shadcn-Svelte with focus on responsiveness and high performance.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-orchid mt-1">•</span>
                    <span><strong>Backend Services:</strong> Building robust backend services with Python (FastAPI), designing scalable APIs, and integrating AI-powered features.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-[#FFAD60] mt-1">•</span>
                    <span><strong>AI Integration:</strong> Actively transitioning into backend + AI engineering role, focusing on scalable system design and AI integration workflows.</span>
                  </li>
                  {#if expandedSections.generativeStudio}
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-violet-400 mt-1">•</span>
                      <span><strong>Modern Tech Stack:</strong> Working with cutting-edge technologies including AI Agents, FastAPI, and modern frontend frameworks.</span>
                    </li>
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-orchid mt-1">•</span>
                      <span><strong>Performance Optimization:</strong> Implementing high-performance solutions with focus on scalability and user experience.</span>
                    </li>
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-[#FFAD60] mt-1">•</span>
                      <span><strong>Backend-First Strategy:</strong> Developing backend-first development strategies for modern web applications.</span>
                    </li>
                  {/if}
                </ul>
                <button 
                  on:click={() => toggleSection('generativeStudio')} 
                  class="mt-6 text-violet-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  {expandedSections.generativeStudio ? 'Show Less' : 'Show More'}
                  <i class="fa fa-chevron-{expandedSections.generativeStudio ? 'up' : 'down'} transition-transform duration-300 group-hover:scale-110"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Timechain Labs - Software Developer -->
          <div class="experience-item relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 transition-all duration-700 ease-out group">
            <!-- Timeline Dot with parallax -->
            <div class="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-orchid rounded-full border-4 border-black shadow-lg z-10 animate-pulse delay-500"></div>
            
            <!-- Content Card -->
            <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
              <div class="group-hover:scale-105 transition-transform duration-300">
                <div class="bg-black/60 backdrop-blur-sm border border-orchid/30 rounded-2xl p-6 hover:border-orchid/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(218,112,214,0.3)] group">
                  <div class="flex items-center justify-between">
                    <div class="text-left">
                      <h3 class="text-orchid font-bold text-xl group-hover:text-white transition-colors duration-300">Software Developer</h3>
                      <p class="text-[#FFAD60] font-semibold text-lg">Timechain Labs</p>
                      <p class="text-gray-300 text-sm">Jul 2024 - Apr 2025, Remote</p>
                    </div>
                    <div class="w-12 h-12 bg-gradient-to-br from-orchid to-[#FFAD60] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i class="fa fa-code text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Details -->
            <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div class="bg-black/40 backdrop-blur-sm border border-orchid/30 rounded-2xl p-6 hover:border-orchid/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orchid/20">
                <ul class="space-y-4 text-gray-200">
                  <li class="flex items-start gap-3">
                    <span class="text-violet-400 mt-1">•</span>
                    <span><strong>Full-Stack Development:</strong> Developed and maintained web applications using modern technologies including React, Node.js, and MongoDB.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-orchid mt-1">•</span>
                    <span><strong>API Development:</strong> Built RESTful APIs and implemented authentication systems using JWT tokens and secure practices.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-[#FFAD60] mt-1">•</span>
                    <span><strong>Database Management:</strong> Designed and optimized database schemas, implemented data validation and error handling.</span>
                  </li>
                  {#if expandedSections.timechainLabs}
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-violet-400 mt-1">•</span>
                      <span><strong>Performance Optimization:</strong> Improved application performance through code optimization and database query tuning.</span>
                    </li>
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-orchid mt-1">•</span>
                      <span><strong>Testing & Deployment:</strong> Implemented comprehensive testing strategies and CI/CD pipelines for reliable deployments.</span>
                    </li>
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-[#FFAD60] mt-1">•</span>
                      <span><strong>Team Collaboration:</strong> Worked closely with cross-functional teams to deliver high-quality software solutions.</span>
                    </li>
                  {/if}
                </ul>
                <button 
                  on:click={() => toggleSection('timechainLabs')} 
                  class="mt-6 text-orchid hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  {expandedSections.timechainLabs ? 'Show Less' : 'Show More'}
                  <i class="fa fa-chevron-{expandedSections.timechainLabs ? 'up' : 'down'} transition-transform duration-300 group-hover:scale-110"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Project Lead Experience -->
          <div class="experience-item relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 transition-all duration-700 ease-out group">
            <!-- Timeline Dot with parallax -->
            <div class="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-[#FFAD60] rounded-full border-4 border-black shadow-lg z-10 animate-pulse delay-1000"></div>
            
            <!-- Content Card -->
            <div class="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
              <div class="group-hover:scale-105 transition-transform duration-300">
                <div class="bg-black/60 backdrop-blur-sm border border-[#FFAD60]/30 rounded-2xl p-6 hover:border-[#FFAD60]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,173,96,0.3)] group">
                  <div class="flex items-center justify-between">
                    <div class="text-left">
                      <h3 class="text-[#FFAD60] font-bold text-xl group-hover:text-white transition-colors duration-300">Project Lead</h3>
                      <p class="text-violet-400 font-semibold text-lg">Freelance Projects</p>
                      <p class="text-gray-300 text-sm">2023 - 2024</p>
                    </div>
                    <div class="w-12 h-12 bg-gradient-to-br from-[#FFAD60] to-violet-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i class="fa fa-code text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Details -->
            <div class="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div class="bg-black/40 backdrop-blur-sm border border-orchid/30 rounded-2xl p-6 hover:border-orchid/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFAD60]/20">
                <ul class="space-y-4 text-gray-200">
                  <li class="flex items-start gap-3">
                    <span class="text-violet-400 mt-1">•</span>
                    <span><strong>Project Management:</strong> Led development teams and managed project timelines, ensuring successful delivery of client requirements.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-orchid mt-1">•</span>
                    <span><strong>Technical Leadership:</strong> Provided technical guidance and mentorship to team members, fostering collaborative development.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-[#FFAD60] mt-1">•</span>
                    <span><strong>Client Communication:</strong> Maintained strong relationships with clients through regular updates and transparent communication.</span>
                  </li>
                  {#if expandedSections.projectLead}
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-violet-400 mt-1">•</span>
                      <span><strong>Architecture Design:</strong> Designed scalable system architectures and made key technical decisions for project success.</span>
                    </li>
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-orchid mt-1">•</span>
                      <span><strong>Quality Assurance:</strong> Implemented quality control processes and ensured code standards across all deliverables.</span>
                    </li>
                    <li class="flex items-start gap-3 animate-fade-in">
                      <span class="text-[#FFAD60] mt-1">•</span>
                      <span><strong>Problem Solving:</strong> Resolved complex technical challenges and provided innovative solutions to meet project goals.</span>
                    </li>
                  {/if}
                </ul>
                <button 
                  on:click={() => toggleSection('projectLead')} 
                  class="mt-6 text-[#FFAD60] hover:text-white transition-colors duration-300 flex items-center gap-2 group"
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
           .timeline-line {
      position: absolute;
      left: 1.5rem;
      top: 0;
      height: 100%;
      width: 3px;
      background: linear-gradient(to bottom, #a855f7, #da70d6, #ffad60);
      opacity: 0.8;
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
      transition: transform 0.1s ease-out;
    }
  
  @media (min-width: 640px) {
    .timeline-line {
      left: 2rem;
      width: 4px;
      top: 0;
      height: 100%;
    }
  }
  
  @media (min-width: 768px) {
    .timeline-line {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  .experience-item {
    will-change: transform, opacity;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Parallax background elements */
  .animate-pulse {
    animation: pulse 3s ease-in-out infinite;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
  
  .delay-2000 {
    animation-delay: 2s;
  }
</style>