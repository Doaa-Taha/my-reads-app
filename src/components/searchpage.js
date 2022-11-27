import { Link } from "react-router-dom";
import Book from './book';



const Searchpage = ({ changeShelf,  query, updateQuery, clearQuery, results}) => {

  const showingBooks =  results.filter((b) =>
      b.title.toLowerCase().includes(query.toLowerCase())
  );

      
  const noResult  = (
    <div>
      <p>No results available for your query</p>
      <p>Try somethinge else</p>
    </div>
  )    

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" onClick={clearQuery}>
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {query && showingBooks.length === 0 
              ? noResult
              : showingBooks.map( b => (
                    <Book 
                      key={b.id}
                      title={b.title} 
                      authors={b.authors } 
                      book={b} 
                      changeShelf={changeShelf}
                    /> ))
              }
            </ol>
          </div>
        </div>
    ) 
}

export default Searchpage;