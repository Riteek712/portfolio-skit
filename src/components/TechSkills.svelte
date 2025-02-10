<script lang="ts">
  import { onMount } from 'svelte';
  import { spring, type Spring } from 'svelte/motion';
  import AnimatedTooltip from './shared/AnimatedTooltip.svelte';

  interface Skill {
    name: string;
    icon: string;
  }

  interface SpringOpts {
    stiffness?: number;
    damping?: number;
    precision?: number;
    hard?: boolean;
  }

  export let direction: 'left' | 'right' = 'left';
  export let speed: number ; // seconds for one complete rotation
  export let skills: Skill[] = []; // Now accepting skills as a prop

  let container: HTMLDivElement;
  let itemWidth: number = 0;
  let position: Spring<number> = spring(0);

  $: duplicatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills];

  onMount(() => {
    const firstChild = container?.firstElementChild as HTMLDivElement;
    itemWidth = firstChild?.offsetWidth || 0;
    const totalWidth: number = itemWidth * skills.length;

    let animating = true;

    const animate = (): void => {
      if (!animating) return;

      const distance = direction === 'left' ? -totalWidth : totalWidth;
      const currentTime = Date.now();
      const endTime = currentTime + speed * 1000;

      const updatePosition = () => {
        if (!animating) return;

        const now = Date.now();
        const progress = (now - currentTime) / (speed * 1000);

        if (progress >= 1) {
          position.set(-totalWidth, { hard: true } as SpringOpts);
          requestAnimationFrame(() => animate());
        } else {
          const newPosition = -totalWidth + (distance * progress);
          position.set(newPosition, { hard: false } as SpringOpts);
          requestAnimationFrame(updatePosition);
        }
      };

      requestAnimationFrame(updatePosition);
    };

    position.set(-totalWidth, { hard: true } as SpringOpts);
    animate();

    return () => {
      animating = false;
    };
  });
</script>

<div class="carousel-container overflow-hidden w-full">
  <div
    bind:this={container}
    class="flex items-center gap-12 py-6"
    style="transform: translateX({$position}px); transition: transform linear;"
  >
    {#each duplicatedSkills as skill}
      
        <div class="flex flex-col items-center min-w-[120px] md:min-w-[160px]">
          <img
            data-hover-tooltip={skill.name}
          data-tooltip-position="top"
            src={skill.icon}
            alt={skill.name}
            class="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain hover:scale-110 transition-transform duration-300"
          />
          <span class="mt-2 text-sm md:text-base font-medium">{skill.name}</span>
        </div>
   
      
    {/each}
  </div>
</div>

<style>
  
  .carousel-container {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 5%,
      black 95%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 5%,
      black 95%,
      transparent
    );
  }

  /* Responsive styles */
  @media (max-width: 640px) {
    .carousel-container {
      padding: 0 8px;
    }
    .carousel-container div img {
      width: 80px;
      height: 80px;
    }
  }
</style>
