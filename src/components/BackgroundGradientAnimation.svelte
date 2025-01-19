<script lang="ts">
    import { onMount } from "svelte";
    import { writable, type Writable } from "svelte/store";
  
    export let gradientBackgroundStart: string = "rgb(108, 0, 162)";
    export let gradientBackgroundEnd: string = "rgb(0, 17, 82)";
    export let firstColor: string = "18, 113, 255";
    export let secondColor: string = "221, 74, 255";
    export let thirdColor: string = "100, 220, 255";
    export let fourthColor: string = "200, 50, 50";
    export let fifthColor: string = "180, 180, 50";
    export let pointerColor: string = "140, 100, 255";
    export let size: string = "80%";
    export let blendingValue: string = "hard-light";
    export let interactive: boolean = true;
    export let containerClassName: string = "";
    export let className: string = "";
  
    const curX: Writable<number> = writable(0);
    const curY: Writable<number> = writable(0);
    const tgX: Writable<number> = writable(0);
    const tgY: Writable<number> = writable(0);
    const isSafari: Writable<boolean> = writable(false);
  
    let interactiveRef: HTMLDivElement | null = null;
  
    const move = () => {
      let nextX = 0;
      let nextY = 0;

      curX.update((curXVal) => {
        let tgXVal = 0;
        tgX.subscribe((val) => {
          tgXVal = val;
        })();

        nextX = curXVal + (tgXVal - curXVal) / 20;
        return nextX;
      });

      curY.update((curYVal) => {
        let tgYVal = 0;
        tgY.subscribe((val) => {
          tgYVal = val;
        })();

        nextY = curYVal + (tgYVal - curYVal) / 20;
        return nextY;
      });

      if (interactiveRef) {
        interactiveRef.style.transform = `translate(${Math.round(nextX)}px, ${Math.round(nextY)}px)`;
      }
    };
  
    const handleMouseMove = (event: MouseEvent) => {
      if (interactiveRef) {
        const rect = interactiveRef.getBoundingClientRect();
        tgX.set(event.clientX - rect.left);
        tgY.set(event.clientY - rect.top);
      }
    };
  
    onMount(() => {
      document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
      document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
      document.body.style.setProperty("--first-color", firstColor);
      document.body.style.setProperty("--second-color", secondColor);
      document.body.style.setProperty("--third-color", thirdColor);
      document.body.style.setProperty("--fourth-color", fourthColor);
      document.body.style.setProperty("--fifth-color", fifthColor);
      document.body.style.setProperty("--pointer-color", pointerColor);
      document.body.style.setProperty("--size", size);
      document.body.style.setProperty("--blending-value", blendingValue);
  
      isSafari.set(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  
      const interval = setInterval(move, 16); // Approx ~60fps
      return () => clearInterval(interval);
    });
</script>
  
<div
  class={`min-h-screen w-full relative bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] ${containerClassName}`}
>
  <svg class="hidden">
    <defs>
      <filter id="blurMe">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
  <div class={`relative z-10 ${className}`}>
    <slot />
  </div>
  <div
    class={`fixed inset-0 gradients-container w-full h-full blur-lg ${
      $isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
    }`}
  >
    <div
      class={`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center] animate-first opacity-100`}
    ></div>
    <div
      class={`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)] animate-second opacity-100`}
    ></div>
    <div
      class={`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)] animate-third opacity-100`}
    ></div>
    <div
      class={`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70`}
    ></div>
    <div
      class={`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100`}
    ></div>
    {#if interactive}
      <div
        bind:this={interactiveRef}
        on:mousemove={handleMouseMove}
        role="presentation"
        class={`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70`}
      ></div>
    {/if}
  </div>
</div>