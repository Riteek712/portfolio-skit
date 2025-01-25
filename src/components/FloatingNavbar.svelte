<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
  
    export let navItems: Array<{
      name: string;
      link: string;
      icon?: any;
    }> = [];
  
    let scrollYProgress = 0;
    let visible = false;
    let prevScrollPos = 0;
  
    onMount(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        scrollYProgress = currentScrollPos / (document.documentElement.scrollHeight - window.innerHeight);
  
        if (scrollYProgress < 0.05) {
          visible = false;
        } else {
          visible = currentScrollPos < prevScrollPos;
        }
  
        prevScrollPos = currentScrollPos;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });
  </script>
  
  {#if visible}
    <div 
      transition:fly={{ y: -100, duration: 200 }}
      class="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4"
    >
      {#each navItems as navItem, idx}
        <a 
          href={navItem.link}
          class="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          <span class="block sm:hidden">{@html navItem.icon || ''}</span>
          <span class="hidden sm:block text-sm">{navItem.name}</span>
        </a>
      {/each}
      
      <button 
        class="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
      >
        <span>Login</span>
        <span 
          class="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"
        />
      </button>
    </div>
  {/if}