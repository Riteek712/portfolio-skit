<script lang="ts">
  export let starColor: string = "#ffffff";
  export let containerClassName: string = "";
</script>

<div
  class={`relative min-h-screen w-full overflow-hidden flex items-center justify-center rounded-xl dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)] ${containerClassName}`}
>
  <!-- Star field layers -->
  <div
    class="absolute inset-0 pointer-events-none"
    style={`--star-color: ${starColor};`}
  >
    <div class="stars-layer stars-layer--1"></div>
    <div class="stars-layer stars-layer--2"></div>
    <div class="stars-layer stars-layer--3"></div>
  </div>

  <!-- Page content -->
  <div class="relative z-10 w-full">
    <slot />
  </div>
</div>

<style>
  .stars-layer {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, var(--star-color) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.35;
    animation: move-stars 40s linear infinite;
    will-change: transform;
  }

  .stars-layer--2 {
    background-size: 60px 60px;
    opacity: 0.25;
    animation-duration: 70s;
  }

  .stars-layer--3 {
    background-size: 90px 90px;
    opacity: 0.2;
    animation-duration: 110s;
  }

  @keyframes move-stars {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-200px, -200px, 0);
    }
  }
</style>

