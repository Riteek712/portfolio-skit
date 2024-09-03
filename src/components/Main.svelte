<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import Step from "./Step.svelte";
  function openLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/riteek-rakesh-459299208/",
      "_blank"
    );
  }

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

  // Intersection Observer for fade-in/fade-out
  function setupIntersectionObserver() {
    const sections = document.querySelectorAll<HTMLElement>(".fade-section");
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else {
          entry.target.classList.add("fade-out");
          entry.target.classList.remove("fade-in");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  function setupGlobalTiltEffect() {
    const image = document.querySelector("#tilt") as HTMLElement | null;

    if (image) {
      window.addEventListener("mousemove", (event: MouseEvent) => {
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        const offsetX = (event.clientX - middleX) / middleX;
        const offsetY = (middleY - event.clientY) / middleY;

        image.style.transform = `perspective(1000px) rotateY(${offsetX * 14}deg) rotateX(${offsetY * 14}deg) scale3d(1, 1, 1)`;
      });

      window.addEventListener("mouseleave", () => {
        image.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
      });
    }
  }

  // Image tilt effect
  function setupImageTiltEffect() {
    const image = document.querySelector("#tilt") as HTMLElement | null;

    if (image) {
      image.addEventListener("mousemove", (event: MouseEvent) => {
        const { top, bottom, left, right } = image.getBoundingClientRect();

        const middleX = (right - left) / 2;
        const middleY = (bottom - top) / 2;

        const clientX = event.clientX;
        const clientY = event.clientY;

        const offsetX = (clientX - left - middleX) / middleX;
        const offsetY = (middleY - (clientY - top)) / middleY;

        image.style.transform = `perspective(1000px) rotateY(${offsetX * 8}deg) rotateX(${offsetY * 8}deg) scale3d(1, 1, 1)`;
      });
    }
  }

  // Initialize effects when the component mounts
  onMount(() => {
    setupGlobalTiltEffect();
    setupIntersectionObserver();
    setupImageTiltEffect();
  });
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="fade-section grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
  <div
    id="tilt"
    class="rounded-full relative shadow-2xl grid place-items-center"
>
    <img
        src="/assets/profile-pic (4).png"
        alt="Riteek Rakesh"
        class="object-cover z-[2] max-h-[70vh] hidden md:block animate-bounce-y"
    />
</div>

    <div
      id="intro"
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h1
        class="text-violet-200 font-semibold text-4xl sm:text-5xl md:text-6xl"
      >
        Hi! I'm <span class="text-violet-500">Riteek</span>
        Rakesh,
        <br />Full Stack
        <span class="text-violet-500">Developer</span>
      </h1>
      <p class=" text-[#bcbaf7] text-base sm:text-lg md:text-xl">
        I'm a 22 year old <span class="text-[#ffffff] font-semibold"
          >software engineer</span
        >, delivering Code that scales, projects that lead, and solutions that innovate.
      </p>
      <button
        id="linkedinButton"
        on:click={openLinkedIn}
        class="ease-in-out duration-300 hover:bg-violet-900 hover:text-violet-100 blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>

        <h4 class="relative z-9">My LinkedIn &rarr;</h4>
      </button>
    </div>
  </section>

  <section class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center align-middle">
      <h6 class="text-large sm:text-xl md:text-2xl">
        I have created tutorials on NestJS which has 2000+ views
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-4xl">
        Curious to <span class="Courier+Prime text-violet-400">see</span> my work?
      </h3>
      <div class="pt-6 flex flex-row gap-2 flex-wrap">
        <iframe
          class="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eZMrNXa2nCo?si=uOyMCr0dWwW6sXA3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          class="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x_4fQPKXDyI?si=rd7i5UKc-ZSEORW8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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

    <div id="WorkEX" class="flex flex-col items-center gap-16 w-full">
      <h1
        class="text-violet-200 font-semibold text-4xl sm:text-5xl md:text-6xl  underline decoration-double underline-offset-8 font-righteous tracking-widest"
      >
        My <span class="text-violet-500">Work</span>
        journey!
      </h1>
      <div class="w-4/5">
        <Step
          company="Timechain Labs"
          role="Software Developer"
          icon="fa fa-code"
          description="06/2023 - Present, Remote"
        >
          <ul class="list-disc list-inside text-justify gap-6">
            <li>
              Led & contributed to the development of backend REST APIs across
              multiple projects using Nest.js, Node.js, Express.JS, GoLang, Gin,
              gorm, Typescript, Prisma ORM, PostgreSQL, & AWS ensuring efficient
              and scalable solutions.
            </li>
            <br />
            <li>
              Integrated PhonePe Payment gateway for seamless transactions.
            </li>
            <br />
            <li>
              Built a wrapper for better management of STAS-20 tokens. Implemented detailed event logging for transactions and actions taken within the wrapper, improving transparency and traceability.

            </li>
            <br />
            <li>
              Implemented Google OAuth-based authentication for secure and streamlined user login processes.
            </li>
          </ul>
        </Step>
        <Step
          company="Timechain Labs"
          role="Software Developer Intern"
          icon="fa fa-code"
          description="10/2023 - 06/2024, Remote"
        >
          <ul class="list-disc list-inside text-justify gap-6">
            <li>
              Worked in support as a backend developer, building and maintaining APIs. Assisted in the integration of AWS KMS & use of asymmetric keys for digital signing & encryption-decryption of sensitive data
            </li>
            <br />
            <li>
              Constructed and updated more than 40 API endpoints, implementation ranging from transactional Database querris, pagination, authorization, CRUD endpoints, analytics endpoints, etc.
            </li>
            <br />
            <li>
              Streamlined backend API deployments using Docker containers onAWS EC2, achieving faster deployments, improved resource utilization, increased scalability.
            </li>
          </ul>
        </Step>
        <Step
          company="Timechain Summer of Code 2023"
          role="Project Lead: Ultraforms"
          icon="fa fa-code"
          description="05/2023 - 09/2023, Remote"
        >
          <ul class="list-disc list-inside text-justify">
            <li>
              Led a team of 6 members for Ultraform project. Designed user-friendly wireframes and composed backend API. Utilized MongoDB, JavaScript, Node.js, Nest.js, and Swagger
            </li>
            <br />
            <li>
              Designed user-friendly wireframes and composed backend API, tested
              with industry-standard tools, and documented using Swagger.
              Utilized MongoDB, JavaScript, Node.js, Nest.js, and Swagger.
            </li>
            <br />
            <li>
              I was recognized as a top contributor to the program , leading to an invitation to work closely with the organization's main team.
            </li>
          </ul>
        </Step>
      </div>
    </div>

    <div class="project-section flex flex-col items-center">
      <h1
        id="projects"
        class="mx-auto font-semibold text-4xl sm:text-5xl md:text-6xl underline decoration-double underline-offset-8 font-righteous tracking-widest"
      >
        My <strong class="text-violet-400">Projects</strong>
      </h1>

      <div class="flex flex-row flex-wrap">
        <Card
          classname=""
          href="https://github.com/Riteek712/chat-app-in-Node.js"
          iconname="fa-solid fa-tags"
          title="NFT Marketplace"
          description="This is an NFT (Non-Fungible Token) marketplace built on Sepolia testnet. The marketplace allows users to mint, buy, and sell NFTs securely using blockchain technology. It is built using Hardhat for Ethereum development,ethers.js for interacting with the Ethereum blockchain, React.js for the frontend, and integrated with Pinata IPFS for d-Storage"
          tags={[
            "JavaScript",
            "Solidity",
            "React",
            "Tailwind CSS",
            "Hardhat",
            "Pinata IPFS",
          ]}
        />
        <Card
          classname=""
          href="https://github.com/Riteek712/chat-app-in-Node.js"
          iconname="fa-solid fa-cart-shopping"
          title="E-commerse store API"
          description="This is a full-fledged E-commerce API developed using the Nest.js framework and powered by a PostgreSQL database. The project aims to provide a robust and scalable backend solution for building eCommerce applications, complete with features for product management, user authentication, cart management, order processing, and more."
          tags={["TypeScript", "Node.js", "PostgreSQL", "NestJS", "Jwt Auth"]}
        />
        <Card
          classname=""
          href="https://github.com/Riteek712/LiveDocs"
          iconname="fa-solid fa-file"
          title="Live-Docs"
          description="An improved Google Docs that manages millions of collaborators in real-time, used Clerk for authentication and Liveblocks for the collaborative text editor. Still in development"
          tags={[
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Clerk-Auth",
            "Liveblocks",
            "React.js",
          ]}
        />
        <Card
          classname="w-"
          href="https://github.com/Riteek712/schoolManagementSystemMERN"
          iconname="fa-solid fa-diagram-project"
          title="School Management System"
          description="This repository contains the codebase for a School Management MERN (MongoDB, Express.js, React.js, Node.js) stack application. This application serves as a template for building full-stack web applications using the MERN stack."
          tags={[
            "JavaScript",
            "Node.js",
            "React.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
          ]}
        />
        <Card
          classname=""
          href="https://github.com/Riteek712/chat-app-in-Node.js"
          iconname="fa-solid fa-diagram-project"
          title="Online Chat room"
          description="Users can join specific to chat with each others built with the help of Node.js & Express.js. Integrated library to facilitate real-time bidirectional communication between clients and server, allowing for instant message delivery and updates."
          tags={["JavaScript", "Node.js", "Socket.io"]}
        />
      </div>
    </div>
  </section>
  <!-- <div>
    <img
    src={"/assets/345cbb1a2761b6036d5f50f00f534fa9.png"}
    alt="Riteek Rakesh"
    
  />
  </div> -->

</main>

<style>
  .project-section h1 {
    align-content: center;
    /* letter-spacing: 10px; */
    font-weight: 900;
    text-decoration: underline double whitesmoke;
    margin-bottom: 2em;
  }
</style>
