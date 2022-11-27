import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import * as BooksAPI from "../utils/BooksAPI";
import Container from "./container";
import Searchpage from './searchpage';



const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [finalResult, setFinalResult] = useState([]);

  useEffect(() => {
    (async function() {
      const res = await BooksAPI.getAll();
      setBooks(res);
    })();      
  }, [books]);

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const clearQuery = (query) => {
    setQuery("");
  }

  useEffect(() => {
    let mounted = true;
      if(query.length > 0){
        BooksAPI.search(query)
        .then( data => {
          if(data.error){
            setSearchResults([]);   
          }else{
            if(mounted){   
              setSearchResults(data)     
            } 
          }
        })           
      }    
    return () => {
      mounted = false;
      setSearchResults([]);
  
    };     
  },[query]);

  
  const updateShelf =  (book, shelf) => {
    
    ( async function (){
      try {
        await BooksAPI.update(book, shelf);
      } catch (error) {
        throw new Error(error);
      }
    })();
    let updatedBk = books.filter( b => b.id === book.id);
    if  (updatedBk ){  
      updatedBk.shelf = shelf ;
      const allBooksExceptUpdated = books.filter( b =>  b.id !== book.id);
      setBooks([...allBooksExceptUpdated, ...updatedBk]);
      return books;
    }
     
    }

    
      useEffect(() => {
          let mounted = true;
            if (searchResults.length > 0){
              const updated = searchResults.map((book)=>{
                books.forEach(bk => {
                  if(book.id === bk.id){
                    book.shelf = bk.shelf;
                  }
                });
                return  book;
              })  
              if( mounted ){
                setFinalResult(updated)
              }
            }
      
          return () => {
            mounted = false;
            setFinalResult([]);
          };     
        }, [searchResults, books]);

  return (
    <Routes>
      <Route
        exact path="/search"
        element={
            <Searchpage results={finalResult} changeShelf={updateShelf} query={query} 
            updateQuery={updateQuery}  clearQuery={clearQuery} />
        }
      />
      <Route 
        exact path="/" 
        element={
          <Container books={books} changeShelf={updateShelf} />}  
      />
    </Routes>
  )
}

export default App;
