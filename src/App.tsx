import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import NewBook from "./pages/NewBook"
import EditBook from "./pages/EditBook"
import BookProvider from "./context/BookProvider"
import TagProvider from "./context/TagProvider"
import { BookLayout } from "./pages/BookLayout"
import ShowBook from "./pages/ShowBook"

// export type Book = {
//     id: string;
// } & BookData;

// export type BookData = {
//     title: string;
//     author: string;
//     memo?: string;
//     tags: Tag[];
// };

// export type Tag = {
//     id: string;
//     label: string;
// };

function App() {
  return (
    <>
      <BookProvider>
        <TagProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewBook />} />
            <Route path="/:id" element={<BookLayout />}>
              <Route index element={<ShowBook />} />
              <Route path="edit" element={<EditBook />} />
            </Route>
          </Routes>
        </TagProvider>
      </BookProvider>
    </>
  )
}

export default App
