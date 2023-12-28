import BookList from "../components/BookList"
import HeaderCards from "../components/HeaderCards"

const Home = () => {
  return (
    <div>
      <h1>My Book List</h1>
      <HeaderCards />
      <button>Add New Book</button>
      <button>Edit Tags</button>
      <form>
        <input />
        <div>title search</div>
      </form>
      <BookList />
    </div>
  )
}

export default Home
