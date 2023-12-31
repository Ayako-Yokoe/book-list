import { Dispatch, FormEvent, useRef, useState } from "react"
import CreatableReactSelect from "react-select/creatable"
import { v4 as uuidv4 } from "uuid"
import { Link, useNavigate } from "react-router-dom"
import { useBookContext } from "../context/BookContext"
import { Book, BookData, Tag } from "../context/BookProvider"
import { useTagContext } from "../context/TagContext"
import { BookAction } from "../context/BookProvider"
import { TagAction } from "../context/TagProvider"

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
      type: "create",
      payload: newTag,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const actionType: "create" | "update" =
      mode === "edit" ? "update" : "create"

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
      <div>
        <div>
          <label>Title</label>
          <input type="text" ref={titleRef} defaultValue={title} required />
        </div>
        <div>
          <label>Tag</label>
          <CreatableReactSelect
            onCreateOption={(label) => {
              const newTag = { id: uuidv4(), label }
              onAddTag(newTag)
              setSelectedTags((prev) => [...prev, newTag])
            }}
            value={selectedTags?.map((tag) => {
              return { label: tag.label, value: tag.id }
            })}
            options={availableTags.map((tag) => {
              return { label: tag.label, value: tag.id }
            })}
            onChange={(tags) => {
              setSelectedTags(
                tags.map((tag) => {
                  return { label: tag.label, id: tag.value }
                })
              )
            }}
            isMulti
          />
        </div>
        <div>
          <label>Author</label>
          <input type="text" ref={authorRef} defaultValue={author} required />
        </div>
        <div>
          <label>Memo</label>
          <textarea rows={10} ref={memoRef} defaultValue={memo}></textarea>
        </div>
      </div>
      <div>
        <button type="submit">Save</button>
        <Link to="..">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default BookForm
