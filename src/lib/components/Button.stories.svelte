<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		class: { control: 'text' }
	}}
/>

<Template let:args>
	<Button {...args} on:click={handleClick}>
		You clicked: {count}
	</Button>
</Template>

<Story name="Rounded" args={{ class: 'bg-teal-500 p-5' }} />

<Story name="Square" />

<!-- Dynamic snippet should be disabled for this story -->
<Story name="Button No Args">
	<Button>Label</Button>
</Story>
