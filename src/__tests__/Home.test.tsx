import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';
import { UpvoteProvider } from '../context/UpvoteContext';
import { describe, it, expect, vi } from 'vitest';

describe('Home Component', () => {
    it('renders Home component', () => {
        render(
            <UpvoteProvider>
                <Home />
            </UpvoteProvider>
        );
        const heading = screen.getByText(/Upvote List Demo/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders upvote lists correctly', () => {
        render(
            <UpvoteProvider>
                <Home />
            </UpvoteProvider>
        );
        const upvoteLists = screen.getAllByRole('button');
        expect(upvoteLists.length).toBeGreaterThan(0);
    });

    it('calls createNewList handler when create button is clicked', () => {
        render(
            <UpvoteProvider>
                <Home />
            </UpvoteProvider>
        );
        const createButton = screen.getByText(/Create a new Upvote List/i);
        fireEvent.click(createButton);
        const upvoteLists = screen.getAllByRole('button');
        expect(upvoteLists.length).toBeGreaterThan(1);
    });
});
