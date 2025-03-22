import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'
import { describe, it, expect, vi } from 'vitest'

describe('Button component', () => {
	it('renders Button component', () => {
		render(<Button>Click me</Button>)
		const buttonElement = screen.getByText(/click me/i)
		expect(buttonElement).toBeInTheDocument()
	})

	it('calls onClick handler when clicked', () => {
		const handleClick = vi.fn()
		render(<Button onClick={handleClick}>Click me</Button>)
		const buttonElement = screen.getByText(/click me/i)
		fireEvent.click(buttonElement)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
