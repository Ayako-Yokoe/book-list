import { useBookContext } from "../context/BookContext"
import { Book } from "../context/BookProvider"

const BookList = () => {
  const { books } = useBookContext()

  console.log("books", books)

  return (
    <div>
      <h3>Your Book List</h3>
      <div>
        {books.map((book: Book) => (
          <h1>{book.title}</h1>
        ))}
      </div>
    </div>
  )
}

export default BookList
