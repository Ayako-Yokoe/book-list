import BookForm from "../components/BookForm"
import { useBook } from "./BookLayout"

const EditBook = () => {
  const book = useBook()

  return (
    <div>
      <h1>Edit Book</h1>
      <BookForm
        id={book.id}
        title={book.title}
        author={book.author}
        memo={book.memo}
        tags={book.tags}
        mode="edit"
      />
    </div>
  )
}

export default EditBook
