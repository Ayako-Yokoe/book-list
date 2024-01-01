import { Link } from "react-router-dom"
import BookList from "../components/BookList"
import HeaderCards from "../components/HeaderCards"

const Home = () => {
  return (
    <div>
      <h1>My Book List</h1>
      <HeaderCards />
      <Link to="/new">
        <button>Add New Book</button>
      </Link>
      <Link to="/tags">
        <button>Edit Tags</button>
      </Link>
      <BookList />
    </div>
  )
}

export default Home
