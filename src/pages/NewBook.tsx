import BookForm from "../components/BookForm";

const NewBook = () => {
    return (
        <div>
            <h3>New Book</h3>
            <BookForm title="" author="" memo="" tags={[]} />
        </div>
    );
};

export default NewBook;
