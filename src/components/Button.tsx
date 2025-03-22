// src/components/Upvote.tsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

interface ButtonProps {
    onClick?: () => void;
    selected?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ selected, onClick, icon, children }) => {
    return (
        <StyledButton
            className="button"
            onClick={onClick}
            style={{
                backgroundColor: selected ? '#E5EBFD' : '#F4F6F8',
            }}
        >
            <StyledContainer>
                {icon}
                {children}
            </StyledContainer>
        </StyledButton>
    );
};

export default Button;
