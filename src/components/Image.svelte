<script>
  export let author = 'https://jeffercbs.me';
  export let src = '';
  export let alt = '';

  import { writable } from 'svelte/store';
  import { getImage } from '@/scripts/getImages';

  let isOpen = writable(false);

  const toggleZoom = () => {
    isOpen.update((n) => !n);
  };
</script>

<svelte:body on:keydown={(e) => e.key == 'Escape' && $isOpen && toggleZoom()} />
<svelte:window on:scroll={$isOpen ? toggleZoom : null} />

<button on:click={toggleZoom}>
  <figure class={$isOpen ? 'open dark:bg-black/90 bg-white/90' : ''}>
    <div class={$isOpen ? 'cursor-zoom-out' : 'cursor-zoom-in'}>
      <img
        src={getImage(src)}
        {alt}
        width={500}
        height={100}
        sizes="(max-width: 800px) 100vw, 800px"
        loading="lazy"
        class="w-full max-h-screen object-contain"
      />
    </div>
    {#if author.length > 0}
      <figcaption class="text-center">
        <small>photo by {author}</small>
      </figcaption>
    {/if}
  </figure>
</button>

<style>
  .open {
    @apply grid place-content-center fixed inset-0 z-50 m-0;
  }
</style>
