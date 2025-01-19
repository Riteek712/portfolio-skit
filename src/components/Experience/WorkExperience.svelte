<script lang="ts">
  import AnimatedTooltip from '../shared/AnimatedTooltip.svelte';
import Step from '../Step.svelte';
</script>

<div id="WorkEX" class="fade-section flex flex-col items-center gap-16 w-full">
  <AnimatedTooltip tooltipText="My Developer Journey">
    <h1 class="text-violet-200 font-semibold text-4xl sm:text-5xl md:text-6xl underline-offset-8 tracking-wide mb-5 hover:underline decoration-double">
      <span class="text-violet-400">dev</span> <span class="text-[#FFAD60]">:</span> <span class="text-orchid">trail</span>
    </h1>
  </AnimatedTooltip>
  
  
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
        <br />
            <li>
              Collaborated with cross-functional teams to define product requirements, prioritize features, and drive product roadmaps for client projects.
            </li>
            <br />
            <li>
              Integrated a CRM system into the company project, automating lead tracking and sales management, resulting in sales team productivity and reduced manual data entry efforts.
            </li>
            <br />
            <li>
              Executed the integration of the Payment gateway, allowing for real-time transaction tracking; the tool is now utilized by over 15 team members across the finance and customer support departments.
            </li>
            <br />
            <li>
              Built a wrapper for better management of STAS-20 tokens.
              Implemented detailed event logging for transactions and actions
              taken within the wrapper, improving transparency and traceability.
            </li>
            <br />
            <li>
              Implemented Google OAuth-based authentication for secure and
              streamlined user login processes.
            </li>
      </ul>
    </Step>
    
    <Step
      company="Timechain Labs"
      role="Software Developer Intern"
      icon="fa fa-code"
      description="10/2023 - 06/2024, Remote"
    >
    <ul class="list-disc list-inside text-justify gap-6">
        <li>
          Worked in support as a backend developer, building and maintaining
          APIs. Assisted in the integration of AWS KMS & use of asymmetric
          keys for digital signing & encryption-decryption of sensitive data
        </li>
        <br />
        <li>
          Constructed and updated more than 40 API endpoints, implementation
          ranging from transactional Database querris, pagination,
          authorization, CRUD endpoints, analytics endpoints, etc.
        </li>
        <br />
        <li>
          Streamlined backend API deployments using Docker containers onAWS
          EC2, achieving faster deployments, improved resource utilization,
          increased scalability.
        </li>
      </ul>
    </Step>
    
    <Step
      company="Timechain Summer of Code 2023"
      role="Project Lead: Ultraforms"
      icon="fa fa-code"
      description="05/2023 - 09/2023, Remote"
    >
    <ul class="list-disc list-inside text-justify">
        <li>
          Led a team of 6 members for Ultraform project. Designed
          user-friendly wireframes and composed backend API. Utilized
          MongoDB, JavaScript, Node.js, Nest.js, and Swagger
        </li>
        <br />
        <li>
          Designed user-friendly wireframes and composed backend API, tested
          with industry-standard tools, and documented using Swagger.
          Utilized MongoDB, JavaScript, Node.js, Nest.js, and Swagger.
        </li>
        <br />
        <li>
          I was recognized as a top contributor to the program , leading to
          an invitation to work closely with the organization's main team.
        </li>
      </ul>
    </Step>
  </div>
</div>