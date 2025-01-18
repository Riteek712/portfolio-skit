<script lang="ts">
    import { onMount } from 'svelte';
  
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
  
    onMount(setupImageTiltEffect);
  </script>
  
  <div id="tilt" class="rounded-full relative shadow-2xl grid place-items-center">
    <img
      src="/assets/profile-pic (4).png"
      alt="Riteek Rakesh"
      class="object-cover z-[2] max-h-[70vh] hidden md:block animate-bounce-y"
    />
  </div>