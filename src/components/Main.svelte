<script lang="ts">
    import { onMount } from "svelte";
    import Hero from './Hero/Hero.svelte';
    import TechSkillsCarousel from './TechSkills.svelte';
    import WorkExperience from './Experience/WorkExperience.svelte';
    import ProjectSection from './Projects/ProjectSection.svelte';
    import { setupIntersectionObserver } from '../utils/intersectionObserver';
  
    const skills = [
      
      { name: 'Go', icon: '/assets/skills/golang.png' },
    //   { name: 'Go', icon: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png' },
      { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg' },
      { name: 'JavaScript', icon: '/assets/skills/js.png' }
      ,
      { name: 'Java', icon: '/assets/skills/java2.png' },
      { name: 'Python', icon: '/assets/skills/python.png' },
      
      { name: 'Node.js', icon: 'https://nodejs.org/static/images/logo.svg' },
      { name: 'NestJS', icon: 'https://nestjs.com/img/logo-small.svg' },
      { name: 'Next.js', icon: 'https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png' },
      { name: 'Svelte', icon: 'https://svelte.dev/svelte-logo.svg' },
      { name: 'React', icon: '/assets/skills/react.png' },
      { name: 'Express', icon: '/assets/skills/express.png' },
      { name: 'MongoDB', icon: '/assets/skills/mongodb.png' },
      { name: 'PostgreSQL', icon: '/assets/skills/psql.png' },
      { name: 'Docker', icon: '/assets/skills/docker.png' },
      { name: 'Kubernates', icon: '/assets/skills/k8.png' },
      { name: 'AWS', icon: '/assets/skills/aws.png' }
    ];
  
    onMount(() => {
      const observer = setupIntersectionObserver();
      return () => observer.disconnect();
    });
  </script>
  
  <main class="flex flex-col flex-1 p-4">
    <Hero />
    
    <h1 id="skills" class="mx-auto text-center font-semibold text-4xl sm:text-5xl md:text-6xl tracking-wide underline-offset-8 hover:underline decoration-double mb-12">
        <span class="text-violet-400">tech</span> <span class="text-[#FFAD60]">:</span> <span class="text-orchid">stack</span>
    </h1>
    <TechSkillsCarousel {skills} direction="left" speed={30} />
    <TechSkillsCarousel {skills} direction="right" speed={30} />
    
    <section class="py-20 lg:py-32 flex flex-col items-center gap-24">
      <h3 class="font-semibold align-middle text-3xl sm:text-4xl md:text-4xl">
        Curious to <span class="Courier+Prime text-violet-400">see</span> my work?
      </h3>
  
      <WorkExperience />
      <ProjectSection />
  
      <h3 class="text-large sm:text-xl md:text-2xl">
        Checkout my github for my other projects!!!
      </h3>
    </section>
  </main>