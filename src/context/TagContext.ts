import { createContext, useContext, Dispatch } from "react"
import { Tag, TagAction } from "./TagProvider"

export interface TagContextType {
  tags: Tag[]
  dispatch: Dispatch<TagAction>
}

const TagContext = createContext<TagContextType | null>({
  tags: [],
  dispatch: () => {},
})

export const useTagContext = () => useContext(TagContext)

export default TagContext
