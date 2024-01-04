import { createContext, useContext, Dispatch } from "react"
import { Book } from "./BookProvider"

export const CREATE_BOOK = "CREATE_BOOK"
export const UPDATE_BOOK = "UPDATE_BOOK"
export const DELETE_BOOK = "DELETE_BOOK"
export const RESTORE_BOOKS = "RESTORE_BOOKS"

export type BookAction =
  | { type: typeof CREATE_BOOK; payload: Book }
  | { type: typeof UPDATE_BOOK; payload: Book }
  | { type: typeof DELETE_BOOK; payload: string }
  | { type: typeof RESTORE_BOOKS; payload: Book[] }

export interface BookContextType {
  books: Book[]
  dispatch: Dispatch<BookAction>
}

const BookContext = createContext<BookContextType | null>({
  books: [],
  dispatch: () => {},
})

export const useBookContext = () => useContext(BookContext)

export default BookContext
