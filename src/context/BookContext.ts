import { createContext, useContext, Dispatch } from "react"
import { Book, BookAction } from "./BookProvider"

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
