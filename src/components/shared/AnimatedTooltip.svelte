<script lang="ts">
    import { spring } from "svelte/motion";
    import { writable, type Writable } from "svelte/store";
  
    export let tooltipText: string = "";
  
    let hovered: Writable<boolean> = writable(false);
    let x: Writable<number> = writable(0);
  
    const springConfig = { stiffness: 100, damping: 5 };
  
    let rotate = spring(0, springConfig);
    let translateX = spring(0, springConfig);
  
    const handleMouseMove = (event: MouseEvent): void => {
      const boundingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const offsetX = event.clientX - boundingRect.left;
      const halfWidth = boundingRect.width / 2;
      x.set(offsetX - halfWidth);
    };
  
    $: x.subscribe((value: number) => {
      rotate.set((value / 100) * 45);
      translateX.set((value / 100) * 50);
    });
  </script>
  
  <style>
    .tooltip {
      position: absolute;
      top: -4rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: black;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      white-space: nowrap;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    .tooltip.show {
      opacity: 1;
    }
    .tooltip-content {
      position: relative;
      z-index: 30;
      text-align: center;
    }
    .gradient-line {
      position: absolute;
      height: 1px;
      bottom: 0;
      background: linear-gradient(to right, transparent, skyblue, transparent);
    }
  </style>
  
  <div
    class="relative group"
    role="tooltip"
    aria-label={tooltipText}
    on:mouseenter={() => hovered.set(true)}
    on:mouseleave={() => hovered.set(false)}
    on:mousemove={handleMouseMove}
  >
    {#if $hovered}
      <div
        class="tooltip show"
        style="transform: translateX({$translateX}px) rotate({$rotate}deg);"
      >
        <div class="gradient-line" style="width: 20%; left: 40%;"></div>
        <div class="tooltip-content">
          <div class="font-bold text-white text-base">{tooltipText}</div>
        </div>
      </div>
    {/if}
    <slot></slot>
  </div>
  