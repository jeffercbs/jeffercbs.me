<script>
  import { onDestroy, onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let headings = [];
  const activeId = writable();

  onMount(() => {
    const headingElementsRef = {};

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.set(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -30% 0px',
    });

    const headingElements = document.querySelectorAll('h2, h3');

    headingElements.forEach((element) => {
      headingElementsRef[element.id] = element;
      observer.observe(element);
    });

    onDestroy(() => {
      observer.disconnect();
    });
  });

  const scrollToHeading = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('data-attr-id');
    if (targetId) {
      const targetElement = document.querySelector(`#${targetId}`);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };
</script>

<nav aria-label="Table of Contents" class="toc">
  <ul>
    {#each headings as header}
      {#if header.depth < 4}
        <li
          class="link--level{header.depth}"
          class:link--active={header.slug === $activeId}
        >
          <a
            href="#{header.slug}"
            data-attr-id={header.slug}
            on:click={scrollToHeading}
          >
            {header.text}
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style>
  .toc {
    @apply border;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.03)
    );
    border-image-source: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.6) 100%
    );
    border-image-slice: 1;
  }
  a {
    @apply text-gray-400;
  }
  ul {
    @apply flex-col;
    @apply py-2;
  }
  li {
    @apply text-sm;
    @apply py-2 px-4;
    @apply border-l-4 border-transparent;
  }
  .link--active {
    @apply border-amber-600;
    @apply border-l-4;
  }
  .link--level3 {
    @apply pl-8;
  }
</style>
