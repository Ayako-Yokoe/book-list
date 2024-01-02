import { BookContextType } from "../context/BookProvider"
import { useBookContext } from "../context/BookContext"

const HeaderCards = () => {
  const { books }: BookContextType = useBookContext() || {
    books: [],
    dispatch: () => {},
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-14">
      <div className="card bg-green">
        <p className="pb-2.5 md:text-2xl lg:text-3xl">Books in my list:</p>
        <p className="text-xl md:text-3xl lg:text-4xl font-semibold">
          {books.length}
        </p>
      </div>
      <div className="card bg-blue">
        <p className="pb-2.5 md:text-2xl lg:text-3xl">Next book to read:</p>
        <p className="text-xl md:text-3xl lg:text-4xl font-semibold">
          {books.length > 0 ? books[0].title : "Add a Book"}
        </p>
      </div>
    </div>
  )
}

export default HeaderCards
