import { Dispatch } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useBook } from "./BookLayout"
import { BookAction, DELETE_BOOK, useBookContext } from "../context/BookContext"

const ShowBook = () => {
  const { id, title, author, memo, tags } = useBook()
  const { dispatch } = useBookContext() as {
    dispatch: Dispatch<BookAction>
  }
  const navigate = useNavigate()

  const handleDelete = () => {
    dispatch({ type: DELETE_BOOK, payload: id })
    navigate("/")
  }

  return (
    <div className="p-5 mt-10 md:p-20 xl:px-56 xl:py-28">
      <div className="grid grid-cols-3">
        <Link
          to=".."
          className="bg-indigo-secondary rounded text-white text-center py-2 md:py-4 md:text-xl cursor-pointer"
        >
          Back
        </Link>
      </div>
      <div className="bg-orange rounded-lg box-shadow mt-8 xl:mt-9 px-10 py-9 md:px-12 md:py-10 space-y-4 min-h-80 md:min-h-[540px] lg:min-h-[590px]">
        <h3 className="text-xl md:text-3xl lg:text-4xl">{title}</h3>
        {tags.length > 0 && (
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="bg-green rounded border border-black mr-1.5"
              >
                <span className="text-xs md:text-sm lg:text-base px-3.5 py-2 lg:px-4.5 lg:py-3">
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        )}
        <p className="text-sm md:text-xl lg:text-2xl">{author}</p>
        <p className="text-sm md:text-xl lg:text-2xl">{memo}</p>
      </div>
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-20 my-8 md:my-28">
        <Link to={`/${id}/edit`} className="primary-button">
          Edit
        </Link>
        <button onClick={handleDelete} className="secondary-button">
          <span className="text-gray-700">Delete</span>
        </button>
      </div>
    </div>
  )
}

export default ShowBook

// checked
