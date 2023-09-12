<script>
    export let href = ""
    export let className = ""
    export let external = false

    const url = new URL(href, "https://jeffercbs.me")
</script>

{#if external}
	<a {href} target="_blank" aria-label={url.host} rel="noopener noreferrer" class={className}>
		<slot />
	</a>
{:else}
	<a {href} aria-label={url.host} class={className}>
		<slot />
	</a>
{/if}

<style>
	a {
		@apply flex gap-2;
	}
</style>