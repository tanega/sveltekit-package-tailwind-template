<script>
	import { createEventDispatcher } from 'svelte';

	/** @type {string?} */
	let clazz = 'bg-slate-300 p-2';

	export { clazz as class };

	const dispatch = createEventDispatcher();
	/**
	 *
	 * @param {Event} event
	 */
	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button data-testid="button" type="button" class={`${clazz || ''}`} on:click={onClick}>
	<slot />
</button>
