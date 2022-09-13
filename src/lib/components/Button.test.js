import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import Button from '$lib/components/Button.svelte';

test('shows buttonds when rendered', () => {
	render(Button);
	const button = screen.getByTestId('button');
	expect(button).toBeInTheDocument();
});
