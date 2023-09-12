<script>
  import { writable } from 'svelte/store';

  let y = 0;
  let isTop = writable(false);

  function handleScroll() {
    y > 100 ? isTop.set(true) : isTop.set(false);
  }
</script>

<svelte:window on:scroll={handleScroll} bind:scrollY={y} />

<header class:isTop={$isTop}>
  <div class="w-full pb-0 flex justify-between items-center h-full">
    <slot />
  </div>
</header>

<style>
  header {
    @apply fixed z-50 border-gray-300/10 border-b;
    @apply flex justify-center items-center w-full h-20 px-9;
    @apply transition-all duration-100 inset-y-0 top-0;
  }
  .isTop {
    @apply backdrop-blur-lg backdrop-contrast-125 bg-night/60;
  }
</style>
