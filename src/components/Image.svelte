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
  <figure style="z-index: 100;" class={$isOpen ? 'open bg-black/90' : ''}>
    <div class={$isOpen ? 'cursor-zoom-out' : 'cursor-zoom-in'}>
      <img
        src={getImage(src)}
        {alt}
        width={500}
        height={100}
        loading="lazy"
        class="w-full max-h-screen object-cover"
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
    @apply grid place-content-center fixed inset-0 m-0;
  }
</style>
