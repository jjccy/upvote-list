import { render, screen } from '@testing-library/react';
import UpvoteList from '../components/UpvoteList';
import { UpvoteProvider } from '../context/UpvoteContext';
import { describe, it, expect } from 'vitest';

describe('UpvoteList Component', () => {
    it('renders UpvoteList component', () => {
        render(
            <UpvoteProvider>
                <UpvoteList groupId="test-group" upvotes={[]} />
            </UpvoteProvider>
        );
        const listContainer = screen.getByText(/No upvote group/i);
        expect(listContainer).toBeInTheDocument();
    });
});
