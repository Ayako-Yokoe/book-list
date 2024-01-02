import BookForm from "../components/BookForm"

const NewBook = () => {
  return (
    <div className="p-5 md:p-20 xl:px-56 xl:py-28">
      <h3 className="md:text-4xl mb-2.5 md:mb-8 xl:mb-9">New Book</h3>
      <BookForm id="" title="" author="" memo="" tags={[]} />
    </div>
  )
}

export default NewBook
