import { Dispatch, FormEvent, useRef, useState } from "react"
import CreatableReactSelect from "react-select/creatable"
import { v4 as uuidv4 } from "uuid"
import { Link, useNavigate } from "react-router-dom"
import {
  BookAction,
  CREATE_BOOK,
  UPDATE_BOOK,
  useBookContext,
} from "../context/BookContext"
import { Book, Tag } from "../context/BookProvider"
import { useTagContext, TagAction, CREATE_TAG } from "../context/TagContext"

const BookForm = ({
  id: bookId = "",
  title = "",
  author = "",
  memo = "",
  tags = [],
  mode = "create",
}: Book & { mode?: "create" | "edit" }) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const authorRef = useRef<HTMLInputElement>(null)
  const memoRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
  const navigate = useNavigate()

  const { dispatch: bookDispatch } = useBookContext() as {
    dispatch: Dispatch<BookAction>
  }

  const { tags: availableTags, dispatch: tagDispatch } = useTagContext() as {
    tags: Tag[]
    dispatch: Dispatch<TagAction>
  }

  function onAddTag(newTag: Tag): void {
    tagDispatch({
      type: CREATE_TAG,
      payload: newTag,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const actionType: "CREATE_BOOK" | "UPDATE_BOOK" =
      mode === "edit" ? UPDATE_BOOK : CREATE_BOOK

    bookDispatch({
      type: actionType,
      payload: {
        id: mode === "edit" ? bookId : uuidv4(),
        title: titleRef.current!.value,
        author: authorRef.current!.value,
        memo: memoRef.current?.value,
        tags: selectedTags,
      },
    })

    navigate("..")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-5 py-3.5 md:px-14 md:py-16 bg-blue rounded-lg box-shadow space-y-2.5">
        <div className="flex flex-col">
          <label className="md:text-xl">Title</label>
          <input
            type="text"
            ref={titleRef}
            defaultValue={title}
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label className="md:text-xl">Tag</label>
          <CreatableReactSelect
            onCreateOption={(label) => {
              const newTag = { id: uuidv4(), label }
              onAddTag(newTag)
              setSelectedTags((prev) => [...prev, newTag])
            }}
            value={selectedTags?.map((tag) => ({
              label: tag.label,
              value: tag.id,
            }))}
            options={availableTags.map((tag) => ({
              label: tag.label,
              value: tag.id,
            }))}
            onChange={(tags) => {
              setSelectedTags(
                tags.map((tag) => ({ label: tag.label, id: tag.value }))
              )
            }}
            isMulti
          />
        </div>
        <div className="flex flex-col">
          <label className="md:text-xl">Author</label>
          <input
            type="text"
            ref={authorRef}
            defaultValue={author}
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label className="md:text-xl">Memo</label>
          <textarea
            rows={10}
            ref={memoRef}
            defaultValue={memo}
            className="input-field"
          ></textarea>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-20 my-8 md:my-28">
        <button type="submit" className="primary-button">
          Save
        </button>
        <Link to=".." className="secondary-button">
          <span className="text-gray-700">Cancel</span>
        </Link>
      </div>
    </form>
  )
}

export default BookForm
