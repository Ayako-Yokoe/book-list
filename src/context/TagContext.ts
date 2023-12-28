import { createContext, useContext } from "react";
import { TagContextType } from "./TagProvider";

const TagContext = createContext<TagContextType | null>({
    tags: [],
    dispatch: () => {},
});

export const useTagContext = () => useContext(TagContext);

export default TagContext;
