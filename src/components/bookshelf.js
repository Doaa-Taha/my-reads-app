import Book from "./book";
//import { useState } from 'react';

const Bookshelf = ({shelfName, books, shelftitle, changeShelf}) => {

  
  
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelftitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          
          {books.filter( b => b.shelf === shelfName).map( book => (
            <Book key={book.id} 
                  title={book.title} 
                  authors={book.authors} 
                  book={book} 
                  changeShelf={changeShelf}
            />
          ))}
          
          
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf;