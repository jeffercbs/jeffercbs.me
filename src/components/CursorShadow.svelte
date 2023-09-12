<script>
  let x = 0;
  let y = 0;
</script>

<svelte:window
  on:mousemove={({ clientX, clientY }) => {
    x = clientX;
    y = clientY;
  }}
/>

{#if x !== 0 && y !== 0}
  <div
    class="b max-[800px]:hidden max-[900px]:opacity-0"
    style="background: radial-gradient(600px at {x}px {y}px, rgb(216,144,29,0.058), transparent 80%)"
  />
{/if}

<style>
  .b {
    @apply pointer-events-none fixed top-0 left-0 inset-0 z-30 transition duration-300;
  }
</style>
