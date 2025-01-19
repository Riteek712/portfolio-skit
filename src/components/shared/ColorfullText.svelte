<script>
    import { onMount } from 'svelte';
    export let text = ''; // Accept this as a prop in the parent component
    
    const colors = [
      "rgb(131, 179, 32)",
      "rgb(47, 195, 106)",
      "rgb(42, 169, 210)",
      "rgb(4, 112, 202)",
      "rgb(107, 10, 255)",
      "rgb(183, 0, 218)",
      "rgb(218, 0, 171)",
      "rgb(230, 64, 92)",
      "rgb(232, 98, 63)",
      "rgb(249, 129, 47)",
    ];
    
    let currentColors = colors;
    let count = 0;
  
    onMount(() => {
      const interval = setInterval(() => {
        currentColors = [...colors].sort(() => Math.random() - 0.5);
        count += 1;
      }, 5000);
  
      return () => clearInterval(interval);
    });
  </script>
  
  <style>
    .animated-char {
      display: inline-block;
      font-family: sans-serif;
      letter-spacing: -0.5px;
      animation: bounce 0.5s infinite;
    }
  
    @keyframes bounce {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      50% {
        transform: translateY(-3px) scale(1.01);
        opacity: 0.8;
        filter: blur(5px);
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
        filter: blur(0);
      }
    }
  </style>
  
  <div>
    {#each text.split('') as char, index}
      <span
        class="animated-char"
        style="color: {currentColors[index % currentColors.length]}; animation-delay: {index * 0.05}s"
      >
        {char}
      </span>
    {/each}
  </div>
  