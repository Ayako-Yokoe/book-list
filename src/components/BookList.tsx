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
    <>
      <form className="bg-brown grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-14 px-4 md:px-10 lg:px-16 pb-6 md:pb-10 lg:pb-16">
        <div className="flex bg-white rounded px-2 py-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Keyword"
            className="text-gray-900 md:text-xl outline-none"
          />
        </div>
        <CreatableReactSelect
          value={selectedTags.map((tag) => ({
            label: tag.label,
            value: tag.id,
          }))}
          options={tags.map((tag) => ({ label: tag.label, value: tag.id }))}
          onChange={(
            newTags: MultiValue<SelectValue>,
            actionMeta: ActionMeta<SelectValue>
          ): void => {
            if (newTags) {
              setSelectedTags(
                newTags.map((tag) => ({ label: tag.label, id: tag.value }))
              )
            }
          }}
          isMulti
          className="text-gray-900 md:text-xl"
        />
      </form>
      <div className="relative">
        <img
          src="/images/light-bulb.png"
          alt="light-bulb"
          className="absolute -top-5 left-5 w-20 h-24 md:w-28 md:h-36 lg:w-48 lg:h-56"
        />
      </div>
      <div className="text-center m-8 md:m-12 lg:m-32">
        <h3 className="mb-6 md:text-2xl lg:text-4xl">Your Book List</h3>
        <ul className="space-y-2.5 md:space-y-4">
          {filteredBooks.map((book: Book) => (
            <Link key={book.id} to={`/${book.id}`}>
              <li className="flex justify-between items-center px-4 py-2.5 shadow-md rounded mb-4 md:px-4 md:py-4">
                <div className="flex items-center">
                  <img
                    src="/images/book.png"
                    alt="book"
                    className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  />
                  <p className="ml-2 md:text-2xl lg:text-3xl">{book.title}</p>
                </div>
                <p className="text-sm md:text-xl lg:text-2xl">{book.author}</p>
              </li>
              {filteredBooks.length > 1 && (
                <div className="border-dotted border mb-4"></div>
              )}
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BookList
