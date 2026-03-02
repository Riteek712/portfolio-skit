<script lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faGithub, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  export let y: number;

  const socialLinks = [
    { icon: faGithub, link: "https://github.com/Riteek712", label: "GitHub" },
    { icon: faLinkedinIn, link: "https://www.linkedin.com/in/riteek-rakesh-459299208", label: "LinkedIn" },
    { icon: faXTwitter, link: "https://x.com/RiteekRakesh", label: "Twitter" },
    { icon: faEnvelope, link: "mailto:riteek7.12@gmail.com", label: "Email" }
  ];

  let tabs = [
    { name: 'Work', link: '#WorkEX' },
    { name: 'Projects', link: '#projects' },
  ];

  let isMenuOpen = false;

  function openLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/riteek-rakesh-459299208",
      "_blank"
    );
  }
</script>

<style>
  .social-icon {
    margin: 0 10px;
    font-size: 24px;
    color: #000;
    transition: color 0.3s;
  }

  .social-icon:hover {
    color: #0073e6; /* Change color on hover */
  }

  .social-icons {
    display: flex;
    align-items: center;
  }
</style>

<header
  class={`sticky top-0 z-[101] border-b border-solid duration-200 px-4 sm:px-6 ${
    y > 0 ? "py-3 bg-slate-950/90 border-slate-800 backdrop-blur" : "py-5 bg-transparent border-transparent"
  }`}
>
  <nav class="max-w-5xl mx-auto flex items-center justify-between gap-4">
    <!-- Brand -->
    <a href="#introPage" class="flex items-center gap-3 group">
      <span
        class="h-9 w-9 rounded-full bg-violet-500/10 border border-violet-400/40 grid place-items-center text-violet-300 text-sm font-semibold group-hover:bg-violet-500/20 group-hover:border-violet-300/60 transition-colors"
      >
        RR
      </span>
      <div class="hidden sm:flex flex-col leading-tight">
        <span class="font-semibold text-sm tracking-wide text-slate-100">
          Riteek Rakesh
        </span>
        <span class="text-[11px] text-slate-400">
          Software Developer
        </span>
      </div>
    </a>

    <!-- Desktop navigation -->
    <div class="hidden md:flex items-center gap-8">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="relative text-sm text-slate-300 hover:text-violet-300 transition-colors"
        >
          {tab.name}
          <span
            class="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </a>
      {/each}
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-3 sm:gap-4">
      <button
        type="button"
        on:click={openLinkedIn}
        class="hidden sm:inline-flex items-center gap-2 rounded-full border border-violet-500/70 bg-violet-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-violet-200 hover:bg-violet-500/30 hover:border-violet-300 transition-colors"
      >
        <span>LinkedIn</span>
      </button>

      <div class="hidden sm:flex social-icons items-center gap-3">
        {#each socialLinks as { icon, link, label }}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            data-hover-tooltip={label}
            data-tooltip-position="bottom"
          >
            <FontAwesomeIcon icon={icon} class="social-icon fa-lg" />
          </a>
        {/each}
      </div>

      <!-- Mobile menu toggle -->
      <button
        type="button"
        class="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800/90 transition-colors"
        on:click={() => (isMenuOpen = !isMenuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
      >
        <span class="sr-only">Toggle navigation</span>
        <div class="space-y-1.5">
          <span class={`block h-0.5 w-4 rounded-full bg-slate-200 transition-transform ${isMenuOpen ? "translate-y-1 rotate-45" : ""}`} />
          <span class={`block h-0.5 w-4 rounded-full bg-slate-400 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
          <span class={`block h-0.5 w-4 rounded-full bg-slate-200 transition-transform ${isMenuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
        </div>
      </button>
    </div>
  </nav>

  {#if isMenuOpen}
    <div class="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur px-4 pt-3 pb-4 mt-3">
      <div class="flex flex-col gap-3">
        {#each tabs as tab}
          <a
            href={tab.link}
            class="text-sm text-slate-200 hover:text-violet-300 py-1.5"
            on:click={() => (isMenuOpen = false)}
          >
            {tab.name}
          </a>
        {/each}
      </div>

      <div class="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          on:click={() => {
            openLinkedIn();
            isMenuOpen = false;
          }}
          class="inline-flex items-center gap-2 rounded-full border border-violet-500/70 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-200 hover:bg-violet-500/30 hover:border-violet-300 transition-colors"
        >
          <span>LinkedIn</span>
        </button>

        <div class="flex social-icons items-center gap-2">
          {#each socialLinks as { icon, link, label }}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-hover-tooltip={label}
              data-tooltip-position="bottom"
            >
              <FontAwesomeIcon icon={icon} class="social-icon fa-lg" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</header>
