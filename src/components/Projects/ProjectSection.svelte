<script lang="ts">
    import Card from '../Card.svelte';
  </script>
  
  <div class="fade-section project-section flex flex-col items-center w-full">
    <h1 id="projects" class="mx-auto text-center font-semibold text-4xl sm:text-5xl md:text-6xl tracking-wide underline-offset-8 hover:underline decoration-double">
      <span class="text-violet-400">project</span> <span class="text-[#FFAD60]">:</span> <span class="text-orchid">forge</span>
    </h1>
  
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full p-a">
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
        href="https://github.com/Riteek712/Ecommerce-API"
        iconname="fa-solid fa-cart-shopping"
        title="E-commerce Store API"
        description="This is a full-fledged E-commerce API developed using the Nest.js framework and powered by a PostgreSQL database..."
        tags={["TypeScript", "Node.js", "PostgreSQL", "NestJS", "Jwt Auth", "ORMs"]}
      />
      
      <Card
          classname=""
          href="https://github.com/Riteek712/NFT-Marketplace"
          iconname="fa-solid fa-tags"
          title="NFT Marketplace"
          description="This is an NFT (Non-Fungible Token) marketplace built on Sepolia testnet. The marketplace allows users to mint, buy, and sell NFTs securely using blockchain technology. It is built using Hardhat for contract management and includes a user-friendly interface."
          tags={["Solidity", "React.js", "Web3", "Hardhat", "Sepolia", "NFTs"]}
        />
        <Card
          classname=""
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
          iconname="fa-solid fa-comments-o"
          title="Online Chat Room"
          description="Users can join specific chat rooms to communicate with each other built with the help of Node.js & Express.js. Integrated library to facilitate real-time bidirectional communication between clients and server, allowing for instant message delivery and updates."
          tags={["JavaScript", "Node.js", "Socket.io"]}
        />
        <Card
          classname=""
          href="https://github.com/Riteek712/url-shortner-FastAPI"
          iconname="fa-solid fa-link"
          title="Url shortner API"
          description="This project implements a simple URL shortener service using FastAPI. The service allows users to shorten URLs, create custom slugs, and set expiration dates for the shortened URLs. It also provides analytics for tracking the number of clicks on the shortened URLs."
          tags={["Python3", "FastAPI", "Swagger.io", "PostgreSQL", "Redis"]}
        />
    </div>
  </div>
  
  <style>
    .project-section h1 {
      align-content: center;
      margin-bottom: 1em;
    }
  </style>