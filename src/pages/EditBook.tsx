import BookForm from "../components/BookForm"
import { useBook } from "./BookLayout"

const EditBook = () => {
  const book = useBook()

  return (
    <div className="p-5 md:p-20 xl:px-56 xl:py-28">
      <h3 className="md:text-4xl mb-4 md:mb-8 xl:mb-9">Edit Book</h3>
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
