import HeaderCards from "../components/HeaderCards";

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
            <h3>You Book List</h3>
            <div>list</div>
        </div>
    );
};

export default Home;
