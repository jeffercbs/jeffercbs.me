<script lang="ts">
  import { getTagClass } from './Tag.styles';
  export let tag = '';

  let clx = getTagClass(tag);
</script>

<span class={clx}>
  {tag}
</span>

<style>
  span {
    @apply text-xs font-semibold px-4 py-2 rounded-full max-h-8;
  }
</style>
