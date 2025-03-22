// src/pages/Home.tsx
import UpvoteList from '../components/UpvoteList';
import { useUpvoteContext } from '../context/UpvoteContext';
import styled from 'styled-components';

const UpvoteListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Home = () => {
    const { upvoteGroups, createNewList } = useUpvoteContext();

    return (
        <div style={{ margin: '24px' }}>
            <h1>Upvote List Demo</h1>

            <UpvoteListContainer>
                {upvoteGroups.map((group) => (
                    <UpvoteList key={group.id} groupId={group.id} upvotes={group.upvotes}/>
                ))}
            </UpvoteListContainer>


            <button
                onClick={createNewList}
                style={{
                    marginTop: '24px',
                    backgroundColor: '#e5ebfd',
                    border: 'none',
                    padding: '8px 16px',
                    cursor: 'pointer',
                }}
            >
                Create a new Upvote List
            </button>
        </div>

    );
};

export default Home;
