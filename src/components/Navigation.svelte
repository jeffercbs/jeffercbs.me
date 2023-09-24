<script lang="ts">
  import { ROUTES } from '@/consts';
  import { Menu } from '@/icons';
  import { writable } from 'svelte/store';

  let isOpen = writable(false);
  let menu: HTMLElement;

  function toggleMenu(newState: boolean) {
    isOpen.set(newState);

    if ($isOpen) menu.classList.remove('hidden');
    else menu.classList.add('hidden');
  }
</script>

<svelte:window on:resize={() => toggleMenu(false)} />

<button class="flex gap-3 lg:hidden" on:click={() => toggleMenu(!$isOpen)}>
  <Menu />
  <span> Menu</span>
</button>

<nav
  bind:this={menu}
  class="menu-container lg:pl-6 lg:flex hidden"
  class:open={$isOpen}
>
  <ul class="menu">
    {#each ROUTES as { href, disabled, name }}
      <li class="px-2">
        <a
          {href}
          class="opacity-90 hover:opacity-100"
          class:disabled
          aria-label={name}
          aria-disabled={disabled}
        >
          <span>{name}</span>
        </a>
      </li>
    {/each}
  </ul>
  <slot />
</nav>

<style>
  a {
    @apply p-2 text-base ease-in-out relative capitalize rounded-lg;
  }
  .disabled {
    @apply opacity-50 pointer-events-none;
  }
  .menu-container {
    @apply w-full justify-between items-center;
  }
  .menu {
    @apply flex justify-center items-center;
  }
  .open {
    @apply w-screen h-screen absolute inset-x-0 top-12 bottom-0;
    @apply flex flex-col justify-center items-center gap-6;
    @apply bg-black;
  }
  .open ul {
    @apply flex-col gap-8 pb-8;
  }
  .open ul li a {
    @apply text-2xl;
  }
</style>
