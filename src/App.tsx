// src/App.tsx
import React from 'react';
import Home from './pages/Home';
import { UpvoteProvider } from './context/UpvoteContext';

const App: React.FC = () => {
    return (
        <UpvoteProvider>
            <Home />
        </UpvoteProvider>
    );
};

export default App;
