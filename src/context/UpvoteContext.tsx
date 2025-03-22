// src/context/UpvoteContext.tsx
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';
import { v4 as uuid } from 'uuid';

/**
 * Represents one list of upvotes:
 *   - id: a unique identifier for the list
 *   - upvotes: an array of booleans for each upvote's selected state
 */

export interface UpvoteItem {
    id: string;
    selected: boolean;
}

export interface UpvoteGroup {
    id: string;
    upvotes: UpvoteItem[];
}

/**
 * The shape of our context value
 */
interface UpvoteContextValue {
    upvoteGroups: UpvoteGroup[];
    toggleUpvote: (groupId: string, upvoteId: string) => void;
    addUpvote: (groupId: string) => void;
    createNewList: () => string; // For adding new lists if needed
}

/**
 * Create and export the actual context
 */
const UpvoteContext = createContext<UpvoteContextValue>({} as UpvoteContextValue);

export const UpvoteProvider = ({ children }: { children: ReactNode }) => {
    const [upvoteGroups, setUpvoteGroups] = useState<UpvoteGroup[]>(() => {
        const storedData = localStorage.getItem('upvoteGroups');
        if (storedData) {
            return JSON.parse(storedData);
        } else {
            return [
                { id: uuid(), upvotes: [{ id: uuid(), selected: false }] },
                { id: uuid(), upvotes: [{ id: uuid(), selected: false }] },
                { id: uuid(), upvotes: [{ id: uuid(), selected: false }] },
            ];
        }
    }); // read form localStorage if exists


    /**
     * Whenever upvoteGroups changes, write it to localStorage.
     */
    useEffect(() => {
        localStorage.setItem('upvoteGroups', JSON.stringify(upvoteGroups));
    }, [upvoteGroups]);

    /**
     * Toggle a single upvote within a list.
     * The requirement is that if one upvote in a list is toggled, 
     * it affects *that upvote only* within the same list.
     */
    const toggleUpvote = (groupId: string, upvoteId: string) => {
        setUpvoteGroups((prev) =>
            prev.map((g) => {
                if (g.id !== groupId) return g;
                // Flip only the boolean for the specified upvote id
                const newUpvotes = g.upvotes.map((upvote) =>
                    upvote.id === upvoteId
                        ? { ...upvote, selected: !upvote.selected }
                        : upvote
                );
                return { ...g, upvotes: newUpvotes };
            })
        );
    };

    /**
     * Add one new upvote to a given list.
     * The newly added upvote should share the same "state" model as the other upvotes in that list.
     */
    const addUpvote = (groupId: string) => {
        setUpvoteGroups((prev) =>
            prev.map((g) => {
                if (g.id !== groupId) return g;
                return { ...g, upvotes: [...g.upvotes, { id: uuid(), selected: false }] };
            })
        );
    };

    /**
     * (Optional) Create a completely new list 
     * and return the ID so a page can do something with it if needed.
     */
    const createNewList = () => {
        const newId = uuid(); // quick unique ID
        setUpvoteGroups((prev) => [
            ...prev,
            { id: newId, upvotes: [{ id: uuid(), selected: false }] },
        ]);
        return newId;
    };

    const value = {
        upvoteGroups,
        toggleUpvote,
        addUpvote,
        createNewList,
    };

    return (
        <UpvoteContext.Provider value={value}>{children}</UpvoteContext.Provider>
    );
};

export const useUpvoteContext = () => useContext(UpvoteContext);
