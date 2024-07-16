<script lang="ts">
    export let y: number;
    let tabs = [
      { name: 'Skills', link: '#Skills' },
      { name: 'Projects', link: '#projects' },
      { name: 'About me', link: '#aboutme' },
      // { name: 'Github', link: 'https://github.com/Riteek712' },
    ];
  </script>
  
  <header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid" + (y > 0 ? " py-4 bg-slate-950" : " py-6 bg-transparent border-transparent")}>
    <h2 class="font-medium">
      <b class="font-bold " style="font-family: 'Courier Prime', monospace;">Riteek</b> Rakesh
    </h2>
  
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
  