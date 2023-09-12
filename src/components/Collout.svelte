<script lang="ts">
  export let link: boolean = false;
  export let href: string = '';
  export let icon: HTMLElement;

  import { Link as LinkIcon } from '../icons';
  const { host } = new URL(href);
</script>

{#if link}
  <a
    {href}
    target="_blank"
    aria-label={host}
    rel="noopener noreferrer"
    class="collout"
  >
    <span class="capitalize text-lg font-medium">
      <slot />
    </span>
    <LinkIcon />
  </a>
{:else}
  <div class="collout 0">
    <span class="capitalize text-lg font-medium">
      <slot />
    </span>
    {#if icon}
      {icon}
    {:else}
      <span>💡</span>
    {/if}
  </div>
{/if}

<style>
  .collout {
    @apply mb-4 border rounded flex items-center justify-between px-3 py-4 h-[62px] w-full;
    @apply text-white border-neutral-700 bg-neutral-800;
  }
  a {
    @apply flex gap-2 no-underline;
  }
</style>
