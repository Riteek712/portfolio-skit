<script lang="ts">
    export let y: number;
    let tabs = [
      { name: 'WorkEX', link: '#WorkEX' },
      { name: 'Projects', link: '#projects' },
      // { name: 'About me', link: '#aboutme' },
      // { name: 'Github', link: 'https://github.com/Riteek712' },
    ];

    function openCV() {
    window.open(
      "https://drive.google.com/file/d/1GbKDcsct3VaIgsn7dxkwW1lQWCzV1_Y2/view?usp=sharing",
      "_blank"
    );
  }
  </script>
  
  <header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid" + (y > 0 ? " py-4 bg-slate-950" : " py-6 bg-transparent border-transparent")}>
    <button on:click={openCV} id="cv-button" class="font-bold">
      <b class="hover:underline underline-offset-8 " style="font-family: 'Rock Salt', cursive;">CV</b>
    </button>
  
    <div class="sm:flex items-center gap-10 hidden">
      {#each tabs as tab, index}
        <a href={tab.link} class="duration-200 hover:text-violet-400">
          <p>{tab.name}</p>
        </a>
      {/each}
    </div>
  
    <a href="https://github.com/Riteek712" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
      <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
      <h4 class="relative z-9">Checkout my Github!</h4>
    </a>
  </header>
  