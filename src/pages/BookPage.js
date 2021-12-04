import '../App.sass';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooksAction, selectBooksAction, addResultsAction } from '../store/bookReducer';
import Search from '../components/search';
import { Routes, Route, Link} from 'react-router-dom';

const BookPage = (props) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const books = state.books
    const number_search = books.books.length
    // const item = books.books[0]
    console.log(props.dataBook)





    return (
        <div>
        <div>
        <div className="header row justify-content-center ">
        <Search/>
      </div>
      
      
      </div>

      <div className="row justify-content-center">
      {
        
        number_search > 0 ?
        books.books[number_search - 1].block
        :
        " "
   
      }
      <Routes>
<Route path="/BookPage" element={<BookPage/>} />
</Routes>
      </div>
     
     </div>
       );
}
   
export {BookPage}
