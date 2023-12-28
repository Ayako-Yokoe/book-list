import { createContext, useContext } from "react";
import { BookContextType } from "./BookProvider";

const BookContext = createContext<BookContextType | null>({
    books: [],
    dispatch: () => {},
});

export const useBookContext = () => useContext(BookContext);

export default BookContext;
