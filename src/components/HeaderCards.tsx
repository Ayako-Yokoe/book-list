const HeaderCards = () => {
    return (
        <div>
            <p>
                Number of books in my list:
                {/* {books.length}  */}
            </p>
            <p>
                Next book to read:{" "}
                {/* {books.length > 0 ? books[0].title : "Add a Book"} */}
            </p>
        </div>
    );
};

export default HeaderCards;
