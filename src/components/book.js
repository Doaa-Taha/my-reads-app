import Shelfchanger from "./shelfchanger";

const Book = ({title, authors, book, changeShelf}) => {

    const thumbnailurl  = book.imageLinks.thumbnail  ||  "https://dummyimage.com/128x193/000/fbff00&text=No+Cover" || "./No_Cover.jpg";

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url(${thumbnailurl})`,
                        }} 
                    ></div>
                    <Shelfchanger 
                        onChangeShelf={changeShelf}
                        book={book} />
                        
                </div>
                <div className="book-title">{title}</div>
            <div className="book-authors">{ authors ?  authors.map( author => (<p key={author}>{author}</p>)): "unknown author"}</div>
            </div>
        </li>
    )

}

export default Book;