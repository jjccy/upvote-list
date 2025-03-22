import { render, screen, fireEvent } from '@testing-library/react';
import Upvote from '../components/Upvote';
import { describe, it, expect, vi } from 'vitest';

describe('Upvote Component', () => {
    it('renders Upvote component', () => {
        render(<Upvote selected={false} onClick={() => { }} />);
        const upvoteIcon = screen.getByRole('button');
        expect(upvoteIcon).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Upvote selected={false} onClick={handleClick} />);
        const upvoteIcon = screen.getByRole('button');
        fireEvent.click(upvoteIcon);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('displays the correct color when selected', () => {
        render(<Upvote selected={true} onClick={() => { }} />);
        const upvoteIcon = screen.getByRole('button').querySelector('svg path');
        expect(upvoteIcon).toHaveAttribute('stroke', '#253CF2');
    });

    it('displays the correct color when not selected', () => {
        render(<Upvote selected={false} onClick={() => { }} />);
        const upvoteIcon = screen.getByRole('button').querySelector('svg path');
        expect(upvoteIcon).toHaveAttribute('stroke', '#343A40');
    });
});
