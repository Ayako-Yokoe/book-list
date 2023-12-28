import { Dispatch, ReactNode } from "react";
import TagContext from "./TagContext";
import { useLocalStorageReducer } from "../storage/useLocalStorage";

export type Tag = {
    id: string;
    label: string;
};

export type TagAction =
    | { type: "create"; payload: Tag }
    | { type: "delete"; payload: string }
    | { type: "restore"; payload: Tag[] };

const initialState: Tag[] = [];

function reducer(state: Tag[], action: TagAction): Tag[] {
    switch (action.type) {
        case "create":
            return [
                ...state,
                { id: action.payload.id, label: action.payload.label },
            ];
        case "delete":
            return state.filter((data) => data.id !== action.payload);
        case "restore":
            return action.payload;
        default:
            return state;
    }
}

export interface TagContextType {
    tags: Tag[];
    dispatch: Dispatch<TagAction>;
}

interface TagProviderProps {
    children: ReactNode;
}

const TagProvider = ({ children }: TagProviderProps) => {
    const [tags, dispatch] = useLocalStorageReducer(
        "TAGS",
        reducer,
        initialState
    );

    return (
        <TagContext.Provider value={{ tags, dispatch }}>
            {children}
        </TagContext.Provider>
    );
};

export default TagProvider;
