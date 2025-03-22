// src/components/Upvote.tsx
import React from 'react';
import Button from './Button';



interface UpvoteProps {
    selected: boolean;
    onClick: () => void;
}

interface UpvoteIconProps {
    selected: boolean;
}

const UpvoteIcon: React.FC<UpvoteIconProps> = ({ selected }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ transform: 'rotate(0deg)' }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 10L8 6L12 10"
                stroke={selected ? '#253CF2' : '#343A40'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const Upvote: React.FC<UpvoteProps> = ({ selected, onClick }) => {
    return (
        <Button selected={selected} onClick={onClick} icon={<UpvoteIcon selected={selected} />} />
    );
};

export default Upvote;
