import { Dispatch } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useBook } from "./BookLayout"
import { useBookContext } from "../context/BookContext"
import { BookAction } from "../context/BookProvider"

const ShowBook = () => {
  const { id, title, author, memo, tags } = useBook()
  const { dispatch } = useBookContext() as {
    dispatch: Dispatch<BookAction>
  }
  const navigate = useNavigate()

  const handleDelete = () => {
    dispatch({ type: "delete", payload: id })
    navigate("/")
  }

  return (
    <div>
      <Link to="..">
        <button>Back</button>
      </Link>
      <div>
        <h1>{title}</h1>
        {tags.length > 0 && (
          <div>
            {tags.map((tag) => (
              <div key={tag.id}>{tag.label}</div>
            ))}
          </div>
        )}
        <p>{author}</p>
        <p>{memo}</p>
      </div>
      <div>
        <Link to={`/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default ShowBook
