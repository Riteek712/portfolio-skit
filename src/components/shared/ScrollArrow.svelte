<script lang="ts">
  export let color = "text-violet-400";
  export let size = "w-16 h-16";
</script>

<div class="{color} {size} flex items-center justify-center animate-pendulum">
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

<style>
  @keyframes pendulum {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    75% { transform: rotate(-15deg); }
    100% { transform: rotate(0deg); }
  }

  .animate-pendulum {
    animation: pendulum 2s ease-in-out infinite;
  }
</style>