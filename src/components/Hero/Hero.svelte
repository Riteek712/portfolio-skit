<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { derived, writable } from 'svelte/store';
  import ProfileImage from './ProfileImage.svelte';
  import { Github } from 'lucide-svelte';
  import { fetchGithubStats, type GithubStats } from '$lib/services/github';
  import GitHubCalendar from 'react-github-calendar';
  import AnimatedTooltip from '../shared/AnimatedTooltip.svelte';

  // Enhanced typewriter with cursor effect
  function typeWriter(text: string, speed = 100) {
      const idx = writable(0);
      const chars = text.split("");
      
      const interval = setInterval(() => {
          idx.update((n) => (n < chars.length ? n + 1 : n));
      }, speed);
      
      onDestroy(() => clearInterval(interval));
      return idx;
  }

  const nameIdx = typeWriter("Hi! I'm Riteek Rakesh, Full Stack Developer", 100);
  const typingText = derived(nameIdx, ($nameIdx) =>
      "Hi! I'm Riteek Rakesh, Full Stack Developer".slice(0, $nameIdx)
  );

  // GitHub stats store
  const githubStats = writable<GithubStats | null>(null);
  const loading = writable(true);
  const error = writable<string | null>(null);

  // Thought of the Day
  const thoughtOfTheDay = writable("“The best way to predict the future is to invent it.” - Alan Kay");

  const currentBook = {
      title: "Tuesdays with Morrie",
      author: "Mitch Albom",
      progress: "72%"
  };

  // Animate numbers
  function animateValue(element: HTMLElement, start: number, end: number, duration: number) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          element.textContent = Math.floor(progress * (end - start) + start).toString();
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }

  onMount(async () => {
      try {
          loading.set(true);
          error.set(null);
          const stats = await fetchGithubStats();
          githubStats.set(stats);
      } catch (e) {
          error.set('Failed to load GitHub stats');
          console.error(e);
      } finally {
          loading.set(false);
      }
  });
</script>

<section
  id="introPage"
  class="fade-section min-h-screen flex flex-col  items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 py-12"
>
  <!-- Left section -->
   <div class="flex flex-col lg:flex-row items-center justify-center">
    <div class="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
      <!-- Typing text -->
      <div class="space-y-6 animate-fadeIn">
          <h1 class="heading text-violet-200 font-semibold text-4xl sm:text-5xl relative">
              <span class="inline-block bg-violet-400 text-white py-1 px-2 rounded-md">{$typingText} <span class="cursor animate-blink">|</span></span>
              
          </h1>

          <!-- Description -->
          <p class="text-[#bcbaf7] text-base sm:text-lg md:text-xl leading-relaxed animate-slideUp">
            A 22-year-old <span class="text-[#ffffff] font-semibold">Software Developer</span> with a passion for <span class="text-[#ffffff] font-semibold">Go</span>, <span class="text-[#ffffff] font-semibold">JavaScript, Java</span>, and building intuitive, scalable solutions.
          </p>

          <p class="noto-sans-jp text-red-500 text-4xl sm:text-5xl text-center"><span><AnimatedTooltip tooltipText="Nice to have you here!" >こちらこそよろしくお願いします！</AnimatedTooltip></span></p>
          

          <!-- Thought of the Day -->
          
      </div>
  </div>

  <!-- Right section (Profile Image) -->
  <div class="w-full lg:w-1/2 order-1 lg:order-2 animate-fadeIn [animation-delay:300ms]">
      <ProfileImage />
      
  </div>
   </div>
  
<div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 pt-4 animate-slideUp [animation-delay:200ms]">
    
    <div class="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all">
        <h3 class="text-white font-medium">Currently Reading</h3>
        <p class="text-xl font-semibold text-white mt-2">{currentBook.title}</p>
        <p class="text-sm text-violet-200 mt-1">by {currentBook.author}</p>
        <div class="mt-2 w-full bg-white/10 rounded-full h-2">
            <div class="bg-violet-400 h-2 rounded-full" style="width: {currentBook.progress}"></div>
        </div>
    </div>
    
    <div class="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all">
        <h3 class="text-white font-medium">Thought of the Day</h3>
        <p class="text-lg text-white mt-2">{$thoughtOfTheDay}</p>
    </div>
</div>

  
</section>

<style>
  .heading {
      font-size: clamp(2rem, 5vw, 4rem);
      line-height: 1.2;
      word-break: break-word;
      text-align: left;
      max-width: 100%;
  }

  .cursor {
      display: inline-block;
      margin-left: 2px;
      opacity: 1;
  }

  .loading-spinner {
      width: 30px;
      height: 30px;
      border: 3px solid #ffffff20;
      border-top: 3px solid #ffffff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto;
  }

  /* Animations */
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }

  @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
  }

  @keyframes slideUp {
      from {
          opacity: 0;
          transform: translateY(20px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
  }

  :global(.animate-fadeIn) {
      animation: fadeIn 1s ease-out forwards;
  }

  :global(.animate-slideUp) {
      animation: slideUp 1s ease-out forwards;
  }

  :global(.animate-blink) {
      animation: blink 1s step-end infinite;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
      .heading {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
      }
  }
</style>
