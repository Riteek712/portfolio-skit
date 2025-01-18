// components/Experience/WorkExperience.svelte
<script lang="ts">
  import Step from '../Step.svelte';
</script>

<div id="WorkEX" class="fade-section flex flex-col items-center gap-16 w-full">
  <h1 class="text-violet-200 font-semibold text-4xl sm:text-5xl md:text-6xl underline-offset-8 tracking-wide mb-5 hover:underline decoration-double">
    <span class="text-violet-400">dev</span> <span class="text-[#FFAD60]">:</span> <span class="text-orchid">trail</span>
  </h1>
  
  <div class="w-4.5/5 sm:w-4/5">
    <Step
      company="Timechain Labs"
      role="Software Developer"
      icon="fa fa-code"
      description="06/2024 - Present, Remote"
    >
      <ul class="list-disc list-inside text-justify gap-6">
        <li>Led & contributed to developing backend REST APIs and UI workflows across multiple projects using Go, TypeScript/Javascript frameworks, & AWS ensuring efficient and scalable solutions.</li>
        <br />
        <li>Acted as a bridge between technical and business teams, taking on product management responsibilities to define and prioritize features, resulting in a 30% increase in team efficiency and delivering projects on time.</li>
        <!-- Add other list items -->
      </ul>
    </Step>
    
    <Step
      company="Timechain Labs"
      role="Software Developer Intern"
      icon="fa fa-code"
      description="10/2023 - 06/2024, Remote"
    >
      <!-- Add content -->
    </Step>
    
    <Step
      company="Timechain Summer of Code 2023"
      role="Project Lead: Ultraforms"
      icon="fa fa-code"
      description="05/2023 - 09/2023, Remote"
    >
      <!-- Add content -->
    </Step>
  </div>
</div>