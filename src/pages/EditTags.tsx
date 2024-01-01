import { Dispatch, FormEvent } from "react"
import { useTagContext } from "../context/TagContext"
import { Tag, TagAction } from "../context/TagProvider"
import { Link } from "react-router-dom"

const EditTags = () => {
  const { tags, dispatch } = useTagContext() as {
    tags: Tag[]
    dispatch: Dispatch<TagAction>
  }

  function updateTag(id: string, e: FormEvent<HTMLInputElement>): void {
    dispatch({
      type: "update",
      payload: {
        id,
        label: e.currentTarget.value,
      },
    })
  }

  function deleteTag(id: string): void {
    dispatch({
      type: "delete",
      payload: id,
    })
  }

  return (
    <div>
      <div>
        <div>
          <h1>Edit Tags</h1>
          <Link to="/">
            <button>&times;</button>
          </Link>
        </div>
        <div>
          {tags.map((tag) => (
            <li key={tag.id}>
              <input
                type="text"
                defaultValue={tag.label}
                onChange={(e) => updateTag(tag.id, e)}
              />
              <button onClick={() => deleteTag(tag.id)}>&times;</button>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EditTags
