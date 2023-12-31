import { useMemo, useState } from "react"
import { useBookContext, BookContextType } from "../context/BookContext"
import { Book } from "../context/BookProvider"
import { Tag } from "../context/TagProvider"
import CreatableReactSelect from "react-select/creatable"
import { ActionMeta, MultiValue } from "react-select"
import { useTagContext, TagContextType } from "../context/TagContext"
import { Link } from "react-router-dom"

type SelectValue = { label: string; value: string }

const BookList = () => {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const { books }: BookContextType = useBookContext() || {
    books: [],
    dispatch: () => {},
  }
  const { tags }: TagContextType = useTagContext() || {
    tags: [],
    dispatch: () => {},
  }

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      return (
        (searchKeyword === "" ||
          book.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          book.author.toLowerCase().includes(searchKeyword.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            book.tags.some((bookTag) => bookTag.id === tag.id)
          ))
      )
    })
  }, [searchKeyword, selectedTags, books])

  return (
    <div>
      {/* search */}
      <form>
        {/* search by keywords */}
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        {/* search by tags */}
        <CreatableReactSelect
          value={selectedTags.map((tag) => {
            return { label: tag.label, value: tag.id }
          })}
          options={tags.map((tag) => {
            return { label: tag.label, value: tag.id }
          })}
          onChange={(
            newTags: MultiValue<SelectValue>,
            actionMeta: ActionMeta<SelectValue>
          ): void => {
            if (newTags) {
              setSelectedTags(
                newTags.map((tag) => {
                  return { label: tag.label, id: tag.value }
                })
              )
            }
          }}
          isMulti
        />
      </form>

      <h3>Your Book List</h3>
      <div>
        {filteredBooks.map((book: Book) => (
          <Link key={book.id} to={`/${book.id}`}>
            <div>
              <h1>{book.title}</h1>
              <p>{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BookList
