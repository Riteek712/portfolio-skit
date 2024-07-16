<script lang="ts">
  function openLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/riteek-rakesh-459299208/",
      "_blank"
    );
  }
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"/assets/profile-pic (4).png"}
        alt="Riteek Rakesh"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>

    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h1 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Hi! I'm <span class="Rubik Mono One text-violet-400">Riteek</span>
        Rakesh,
        <br />Full Stack
        <span class="Rubik Mono One text-violet-400">Developer</span>
      </h1>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400"> favorite tech</span> includes JavaScript
        / TypeScript (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js +
        NestJS, Go & PostgreSQL or MongoDB!
      </p>
      <button
                id="linkedinButton"
                on:click={openLinkedIn}
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                ></div>
                
                <h4 class="relative z-9">
                    Get in touch &rarr;
                </h4>
            </button>
    </div>
  </section>
</main>
