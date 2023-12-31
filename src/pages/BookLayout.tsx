import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { useBookContext, BookContextType } from "../context/BookContext"
import { Book, BookAction } from "../context/BookProvider"
import { Dispatch } from "react"

export function BookLayout() {
  const { id } = useParams()
  const { books }: BookContextType = useBookContext() || {
    books: [],
    dispatch: () => {},
  }

  const book = books.filter((book) => book.id === id)[0]

  if (!book) return <Navigate to="/" replace />

  return <Outlet context={book} />
}

export function useBook() {
  return useOutletContext<Book & { dispatch: Dispatch<BookAction> }>()
}
