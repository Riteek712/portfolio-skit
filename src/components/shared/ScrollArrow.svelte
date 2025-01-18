<script lang="ts">
    export let color = "text-violet-400";
    export let size = "w-16 h-16"; 
  </script>
  
  <div class="fixed bottom-8 w-full flex justify-center">
    <div class="animate-bounce {color} {size} flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7 7 7-7"
        />
      </svg>
    </div>
  </div>
  
  <style>
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  
    .animate-bounce {
      animation: float 2s ease-in-out infinite;
    }
  </style>
  