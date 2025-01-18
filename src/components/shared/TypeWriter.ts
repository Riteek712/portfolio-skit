import { onDestroy } from "svelte";
import { writable } from "svelte/store";

export function typeWriter(text: string, speed = 100) {
    const idx = writable(0);
    const chars = text.split("");

    const interval = setInterval(() => {
      idx.update((n) => (n < chars.length ? n + 1 : n));
    }, speed);

    onDestroy(() => clearInterval(interval));

    return idx;
  }