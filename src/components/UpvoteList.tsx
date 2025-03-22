// src/components/UpvoteList.tsx
import React from 'react';
import styled from 'styled-components';
import { useUpvoteContext, UpvoteItem } from '../context/UpvoteContext';
import Upvote from './Upvote';
import Button from './Button';


const StyledListContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
    gap: 8px;
    padding: 8px;
    border-radius: 16px;
    border: 2px solid #f4f6f8;
`;




interface UpvoteListProps {
    groupId: string;
    upvotes?: UpvoteItem[];
    // Possibly other props if needed
}

const UpvoteList: React.FC<UpvoteListProps> = ({ groupId, upvotes }) => {
    const { toggleUpvote, addUpvote } = useUpvoteContext();

    if (!upvotes || upvotes.length === 0) {
        return <div>No upvote group </div>;
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <StyledListContainer>
                {upvotes?.map((upvoteItem) => (
                    <Upvote
                        key={upvoteItem.id}
                        selected={upvoteItem.selected}
                        onClick={() => toggleUpvote(groupId, upvoteItem.id)}
                    />
                ))}
            </StyledListContainer>

            <Button
                onClick={() => addUpvote(groupId)}
                icon="+"
            />
        </div>
    );
};

export default UpvoteList;
