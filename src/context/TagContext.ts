import { createContext, useContext, Dispatch } from "react"
import { Tag } from "./TagProvider"

export const CREATE_TAG = "CREATE_TAG"
export const UPDATE_TAG = "UPDATE_TAG"
export const DELETE_TAG = "DELETE_TAG"
export const RESTORE_TAGS = "RESTORE_TAGS"

export type TagAction =
  | { type: typeof CREATE_TAG; payload: Tag }
  | { type: typeof UPDATE_TAG; payload: Tag }
  | { type: typeof DELETE_TAG; payload: string }
  | { type: typeof RESTORE_TAGS; payload: Tag[] }

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
