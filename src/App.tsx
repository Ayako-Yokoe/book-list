import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import Edit from "./pages/Edit";
import BookProvider from "./context/BookProvider";
import TagProvider from "./context/TagProvider";

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
                        <Route path="/edit" element={<Edit />} />
                    </Routes>
                </TagProvider>
            </BookProvider>
        </>
    );
}

export default App;
