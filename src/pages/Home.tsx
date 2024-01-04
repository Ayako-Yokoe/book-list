import { Link } from "react-router-dom"
import BookList from "../components/BookList"
import HeaderCards from "../components/HeaderCards"

const Home = () => {
  return (
    <main>
      <div className="bg-brown p-4 md:p-10 lg:p-16">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl">My Book List</h1>
          <img
            src="/images/reading-book.png"
            alt=""
            className="w-28 h-16 md:w-60 md:h-28 lg:w-64 lg:h-40 object-cover"
          />
        </div>
        <HeaderCards />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-2 xl:gap-14 mt-10 lg:mt-16">
          <Link to="/new" className="bg-indigo-primary button-home">
            Add New Book
          </Link>
          <Link to="/tags" className="bg-indigo-secondary button-home">
            Edit Tags
          </Link>
        </div>
      </div>
      <BookList />
    </main>
  )
}

export default Home
