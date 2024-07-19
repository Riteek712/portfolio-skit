<script lang="ts">
  import Step from "./Step.svelte";
  function openLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/riteek-rakesh-459299208/",
      "_blank"
    );
  }
  let steps = [
        {
            name: "E-commerse store API",
            icon: "fa-solid fa-cart-shopping",
            description:
                "This is a full-fledged E-commerce API developed using the Nest.js framework and powered by a PostgreSQL database. The project aims to provide a robust and scalable backend solution for building eCommerce applications, complete with features for product management, user authentication, cart management, order processing, and more.",
        },
        {
            name: "NFT Marketplace",
            icon: "fa-solid fa-list-check",
            description:
                "This is an NFT (Non-Fungible Token) marketplace built on Ethereum's Sepolia testnet. The marketplace allows users to mint, buy, and sell NFTs securely using blockchain technology. It is built using Hardhat for Ethereum development, ethers.js for interacting with the Ethereum blockchain, React.js for the frontend, and Pinata IPFS for d-Storage.",
        },
        {
            name: "Chat app",
            icon: "fa-solid fa-diagram-project",
            description:
                "Users can join specific chat rooms to chat with each others. Integrated Socket.io library to facilitate real-time bidirectional communication between clients and server, allowing for instant message delivery and updates.",
        },
    ];

    let benefits = [
        {
            metric: "10x",
            name: "a self taught developer",
            description:
                "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
        },
        {
            name: "a product design & UX finatic",
            description:
                "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
        },
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];
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
        class="animate-bounce-y object-cover z-[2] max-h-[70vh]"
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
        I'm a <span class="text-violet-400">software engineer</span> specializing in creating scalable REST APIs, project leadership, database optimization, UX enhancement, and innovative solutions. I bring years of hands-on experience in full stack project development and can adapt to new technologies swiftly.
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

  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center align-middle">
        <h6 class="text-large sm:text-xl md:text-2xl">
            I have created tutorials on NestJS which has 2000+ views
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-4xl">
            Curious to <span class="Courier+Prime text-violet-400">see</span> my work?
        </h3>
        <div class="pt-6 flex flex-row gap-2 flex-wrap">
          <iframe class="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/eZMrNXa2nCo?si=uOyMCr0dWwW6sXA3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe class="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/x_4fQPKXDyI?si=rd7i5UKc-ZSEORW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
    </div>

    <a
        href="https://youtu.be/eZMrNXa2nCo?si=rjIEeUT4sZFAXFO4"
        target="_blank"
        class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
        <i class="fa-regular fa-circle-play" />
        <p>Watch the video</p>
    </a>
    <h1 class="mx-auto text-3xl underline decoration-double underline-offset-8">My <strong
      class="text-violet-400"
      >Projects</strong></h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        <Step step={steps[0]}>
            <p>
                This is a full-fledged E-commerce API developed using the <strong
                class="text-violet-400"
                >Nest.js</strong> framework and powered by a <strong
                class="text-violet-400"
                >PostgreSQL</strong> database. The project aims to provide a robust and scalable backend solution for building eCommerce applications, complete with features for product management, user authentication, cart management, order processing, and more.
            </p>
        </Step>
        <Step step={steps[1]}>
            <p>
              
                This is an NFT (Non-Fungible Token) marketplace built on <strong
                class="text-violet-400">Ethereum</strong>'s Sepolia testnet. The marketplace allows users to mint, buy, and sell NFTs securely using blockchain technology. It is built using <strong
                class="text-violet-400">Hardhat</strong> for Ethereum development, <strong
                class="text-violet-400">ethers.js</strong> for interacting with the Ethereum blockchain, <strong
                class="text-violet-400">React.js</strong> for the frontend, and integrated with <strong
                class="text-violet-400">Pinata IPFS</strong> for d-Storage.
            </p>
        </Step>
        <Step step={steps[2]}>
            <p>
                Users can join specific <strong class="text-violet-400">chat rooms</strong> to chat with each others built with the help of <strong class="text-violet-400">Node.js & Express.js</strong>. Integrated <strong class="text-violet-400">Socket.io</strong> library to facilitate real-time bidirectional communication between clients and server, allowing for instant message delivery and updates.
            </p>
        </Step>
    </div>
</section>
</main>
