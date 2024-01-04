import { Dispatch, ReactNode } from "react"
import TagContext, {
  CREATE_TAG,
  DELETE_TAG,
  RESTORE_TAGS,
  TagAction,
  UPDATE_TAG,
} from "./TagContext"
import { useLocalStorageReducer } from "../storage/useLocalStorage"

export type Tag = {
  id: string
  label: string
}

const initialState: Tag[] = []

function reducer(state: Tag[], action: TagAction): Tag[] {
  switch (action.type) {
    case CREATE_TAG:
      return [...state, { id: action.payload.id, label: action.payload.label }]
    case UPDATE_TAG:
      return state.map((data) => {
        if (data.id === action.payload.id) {
          return {
            ...data,
            label: action.payload.label,
          }
        } else {
          return data
        }
      })
    case DELETE_TAG:
      return state.filter((data) => data.id !== action.payload)
    case RESTORE_TAGS:
      return action.payload
    default:
      return state
  }
}

export interface TagContextType {
  tags: Tag[]
  dispatch: Dispatch<TagAction>
}

interface TagProviderProps {
  children: ReactNode
}

const TagProvider = ({ children }: TagProviderProps) => {
  const [tags, dispatch] = useLocalStorageReducer("TAGS", reducer, initialState)

  return (
    <TagContext.Provider value={{ tags, dispatch }}>
      {children}
    </TagContext.Provider>
  )
}

export default TagProvider
