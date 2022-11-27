import Bookshelves from "./bookshelves";
import { Link } from "react-router-dom";

const Container = ({books, changeShelf}) => {

    return (
        <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Bookshelves books={books}  changeShelf={changeShelf}/>
              </div>
              <div className="open-search">
                <Link to="/search" >Add a book</Link>

              </div>
            </div>
          
        </div>
      );
    
}

export default Container;