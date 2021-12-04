import './App.sass';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooksAction, selectBooksAction, addResultsAction } from './store/bookReducer';
import Search from './components/search';
import { Routes, Route, Link } from 'react-router-dom';
import { BookPage } from './pages/BookPage';

const API_KEY = "AIzaSyAZo2xCu7RKI6DJgDeeFTnpaVrTTba1RiI";



function New_app() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const books = state.books
    const number_search = books.books.length

    let maxResults = books.maxResults
    console.log(maxResults)

    const gettingBooks = async (e, props) => {
        e.preventDefault();

        let search = e.target.elements.search.value
        console.log(search)

        if (search) {
            const api_url = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&maxResults=${maxResults}&key=${API_KEY}`);
            const data = await api_url.json();

            console.log(data.items)

            console.log(data.items[0].volumeInfo.authors[0])
            let new_array = []
            let new_arr = []




            new_arr = data.items.map(function (search) {
                if (search.volumeInfo.categories === undefined) {

                    return (
                        {
                            title: search.volumeInfo.title,
                            authors: search.volumeInfo.authors,
                            image: search.volumeInfo.imageLinks.thumbnail,
                            categories: ""
                        }
                    )
                }

                return (

                    {
                        title: search.volumeInfo.title,
                        authors: search.volumeInfo.authors,
                        image: search.volumeInfo.imageLinks.thumbnail,
                        categories: search.volumeInfo.categories
                    }


                )
            })

            console.log(new_arr)
            console.log(data)
            console.log(number_search)


            const block = new_arr.map((item) => {
                return (
                    <div className="row book_block   col-4 col-md-4 col-lg-3 col-xl-2 justify-content-center">

                        <img className=" col-12 col-xl-11 top-20px book_block_img" src={item.image} />


                        <div>
                            <div>
                                {item.categories}
                                <div>
                                    {item.title}
                                </div>
                            </div>
                            {item.authors}
                        </div>

                    </div>
                )
            })


            const customer = {
                block,
                id: Date.now(),
                maxResults: maxResults,
            }
            dispatch(addBooksAction(customer))
            console.log(books)

            const addBooks = (books) => {
                dispatch(addBooksAction(books))
            }

        }

    }





    return (
        <div>
            <div>
                <div className="header row justify-content-center ">
                    <Search searchMethod={gettingBooks} />
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
                    <Route path="/BookPage/*" element={<BookPage />} />
                </Routes>
            </div>

        </div>
    );



}




export default New_app;
