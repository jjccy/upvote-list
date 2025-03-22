import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
    it('renders App component', () => {
        render(<App />);
        const heading = screen.getByText(/Upvote List Demo/i);
        expect(heading).toBeInTheDocument();
    });
});
