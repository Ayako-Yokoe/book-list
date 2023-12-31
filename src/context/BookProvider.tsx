import { Dispatch, ReactNode } from "react"
import { v4 as uuidv4 } from "uuid"
import BookContext from "./BookContext"
import { useLocalStorageReducer } from "../storage/useLocalStorage"

export type Book = {
  id: string
} & BookData

export type BookData = {
  title: string
  author: string
  memo?: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

export type BookAction =
  | { type: "create"; payload: Book }
  | { type: "update"; payload: Book }
  | { type: "delete"; payload: string }
  | { type: "restore"; payload: Book[] }

const initialState: Book[] = []

function reducer(state: Book[], action: BookAction): Book[] {
  switch (action.type) {
    case "create":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
          memo: action.payload.memo,
          tags: action.payload.tags,
        },
      ]
    case "update":
      return state.map((data) => {
        if (data.id === action.payload.id) {
          return {
            ...data,
            title: action.payload.title,
            author: action.payload.author,
            memo: action.payload.memo,
            tags: action.payload.tags,
          }
        } else {
          return data
        }
      })
    case "delete":
      return state.filter((data) => data.id !== action.payload)
    case "restore":
      return action.payload
    default:
      return state
  }
}

export interface BookContextType {
  books: Book[]
  dispatch: Dispatch<BookAction>
}

interface BookProviderProps {
  children: ReactNode
}

const BookProvider = ({ children }: BookProviderProps) => {
  const [books, dispatch] = useLocalStorageReducer(
    "BOOKS",
    reducer,
    initialState
  )

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider
