<script lang="ts">
    import { onDestroy } from 'svelte';
    import { derived, writable } from 'svelte/store';
    import ProfileImage from './ProfileImage.svelte';
  
    function typeWriter(text: string, speed = 100) {
      const idx = writable(0);
      const chars = text.split("");
  
      const interval = setInterval(() => {
        idx.update((n) => (n < chars.length ? n + 1 : n));
      }, speed);
  
      onDestroy(() => clearInterval(interval));
      return idx;
    }
  
    const nameIdx = typeWriter("Hi! I'm Riteek Rakesh.", 100);
    const typingText = derived(nameIdx, ($nameIdx) =>
      "Hi! I'm Riteek Rakesh, Full Stack Developer".slice(0, $nameIdx)
    );
  </script>
  
  <section
    id="introPage"
    class="fade-section grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <ProfileImage />
  
    <div
      id="intro"
      class="flex flex-col lg:justify-center text-left lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h1 class="heading text-violet-200 font-semibold">
        {$typingText}
      </h1>
  
      <p class="text-[#bcbaf7] text-base sm:text-lg md:text-xl">
        A 22 year old <span class="text-[#ffffff] font-semibold">Software Developer</span>,
        API wizardry meets UI artistry—powered by <span class="text-[#ffffff] font-semibold">Go, JavaScript</span>, 
        and a passion for exceptional user experiences.
      </p>
    </div>
  </section>
  
  <style>
    .heading {
      font-size: 2rem;
      line-height: 1;
      word-break: break-word;
      text-align: left;
      max-width: 100%;
    }
    #intro h1 {
    font-size: 5rem;
  }
  
    @media (max-width: 600px) {
      .heading {
        font-size: 1.5rem;
      }
    }
  </style>