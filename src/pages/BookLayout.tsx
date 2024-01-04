import { Dispatch } from "react"
import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import {
  useBookContext,
  BookAction,
  BookContextType,
} from "../context/BookContext"
import { Book } from "../context/BookProvider"

export function BookLayout() {
  const { id } = useParams<{ id?: string }>()
  const { books }: BookContextType = useBookContext() || {
    books: [],
    dispatch: () => {},
  }

  const book = books.find((b) => b.id === id)

  if (!book) return <Navigate to="/" replace />

  return <Outlet context={book} />
}

export function useBook() {
  return useOutletContext<Book & { dispatch: Dispatch<BookAction> }>()
}
