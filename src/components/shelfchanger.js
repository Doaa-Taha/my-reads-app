//import { useState } from "react";
const Shelfchanger = ({ onChangeShelf, book}) => {

    const handleChange = (e) => {
        e.preventDefault();
        if(onChangeShelf){  
            onChangeShelf(book, e.target.value);}       
    }
    return(
        <div className="book-shelf-changer">
            <select 
                defaultValue={book.shelf ? book.shelf : "none"}
                onChange={handleChange}>
                <option value="move to" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
      )
}

export default Shelfchanger;