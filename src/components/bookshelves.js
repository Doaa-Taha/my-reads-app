import Bookshelf from "./bookshelf";


const Bookshelves = ({ books, changeShelf}) => {
    return(
        <div>
            <Bookshelf shelftitle="Currently Reading" books={books} shelfName="currentlyReading" changeShelf={changeShelf}/>
            <Bookshelf shelftitle="Want to Read" books={books} shelfName="wantToRead" changeShelf={changeShelf}/>
            <Bookshelf shelftitle="Read" books={books} shelfName="read" changeShelf={changeShelf}/>
        </div>
    )
}

export default Bookshelves;