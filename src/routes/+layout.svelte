<script lang="ts">
    import "../app.css"
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import { writable } from "svelte/store";

  let y: number;
  let innerHeight = 0;
  let innerWidth = 0;

//   let outerDiv = "relative flex flex-col max-w[1400px] mx-auto w-full text-sm sm:text-base min-h-screen" + (y > 0? "opacity-full pointer-events-auto":"pointer-events-none opacity-0")

  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  writable({
      title:
        "Riteek Rakesh's Portfolio Website",
      description:
        "Software Developer specializing in scalable APIs, intuitive UIs, and innovative solutions like payment gateways, CRM, email services and token management. Proficient in Go, JavaScript/TypeScript, and AWS, with a sharp focus on efficiency, optimization, and delivering exceptional user experiences.",
      ogImage: "https://www.riteekrakesh.tech/assets/profile-pic%20(4).png",
    });
  
</script>
<svelte:head>
  <meta name="title" content="Riteek Rakesh's Portfolio Website" />
  <meta name="description" content="Software Developer specializing in scalable APIs, intuitive UIs, and innovative solutions like payment gateways, CRM, email services and token management. Proficient in Go, JavaScript/TypeScript, and AWS, with a sharp focus on efficiency, optimization, and delivering exceptional user experiences." />


  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://riteekrakesh.tech/" />
  <meta property="og:title" content="Riteek Rakesh's Portfolio Website" />
  <meta property="og:description" content="Software Developer specializing in scalable APIs, intuitive UIs, and innovative solutions like payment gateways, CRM, email services and token management. Proficient in Go, JavaScript/TypeScript, and AWS, with a sharp focus on efficiency, optimization, and delivering exceptional user experiences." />
  <meta property="og:image" content="https://www.riteekrakesh.tech/assets/profile-pic%20(4).png" />
</svelte:head>
<div class="relative flex flex-col max-w[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class="fixed bottom-0 w-full duration-200 flex p-10 z-[10]">
        <button on:click={goTop} class="ml-auto rounded-full bg-slate-900 tx-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"/>
        </button>
    </div>
    <Header {y}/>
    <slot/>
    <Footer/>
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>