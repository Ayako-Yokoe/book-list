import { BookContextType } from "../context/BookProvider"
import { useBookContext } from "../context/BookContext"

const HeaderCards = () => {
  const { books }: BookContextType = useBookContext() || {
    books: [],
    dispatch: () => {},
  }

  return (
    <div>
      <p>
        Number of books in my list:
        {books.length}
      </p>
      <p>
        Next book to read: {books.length > 0 ? books[0].title : "Add a Book"}
      </p>
    </div>
  )
}

export default HeaderCards
