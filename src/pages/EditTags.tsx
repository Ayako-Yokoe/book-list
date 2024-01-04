import { Dispatch, FormEvent } from "react"
import { Link } from "react-router-dom"
import {
  useTagContext,
  TagAction,
  UPDATE_TAG,
  DELETE_TAG,
} from "../context/TagContext"
import { Tag } from "../context/TagProvider"

const EditTags = () => {
  const { tags, dispatch } = useTagContext() as {
    tags: Tag[]
    dispatch: Dispatch<TagAction>
  }

  function updateTag(id: string, e: FormEvent<HTMLInputElement>): void {
    dispatch({
      type: UPDATE_TAG,
      payload: {
        id,
        label: e.currentTarget.value,
      },
    })
  }

  function deleteTag(id: string): void {
    dispatch({
      type: DELETE_TAG,
      payload: id,
    })
  }

  return (
    <div className="bg-green h-screen flex justify-center">
      <div className="bg-white w-[300px] md:w-[600px] lg:w-[800px] mx-auto h-fit mb-6 mt-20 md:mt-24 lg:mt-32 rounded shadow-lg">
        <div className="flex justify-between px-6 py-4 md:px-14 md:py-12 lg:px-16 lg:py-14">
          <h1 className="md:text-4xl">Edit Tags</h1>
          <Link to="/">
            <span className="text-2xl md:text-4xl">&times;</span>
          </Link>
        </div>
        <hr />
        <div className="px-6 py-4 md:px-14 md:py-12 lg:px-16 lg:py-14 space-y-4">
          {tags.map((tag) => (
            <li key={tag.id} className="list-none flex justify-between">
              <input
                type="text"
                defaultValue={tag.label}
                onChange={(e) => updateTag(tag.id, e)}
                className="border border-gray-700 rounded px-2 mr-2 w-full md:text-2xl"
              />
              <button
                onClick={() => deleteTag(tag.id)}
                className="border-2 border-red-400 rounded cursor-pointer w-10 h-10"
              >
                <span className="text-red-400 md:text-2xl">&times;</span>
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EditTags
