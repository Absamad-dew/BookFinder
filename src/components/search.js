import React from "react";

const Search = (props) => {

    
    return (
        <form onSubmit={props.searchMethod} className="container col-9">
           <div className="row justify-content-center ">
           <h1 className="col-12  search_title">Book Finder</h1>
           </div>
           <div className="row">
               <input className="col-9" name="search" placeholder="Введите название книги"/>
               <button className="col-3" >Искать</button>
           </div>
           <div className="row ">
               <div className="cat col-6  ">
                    <strong>Categories</strong>
                    <select className="col-4">
                   <option value="all">all</option>
               </select>
               </div>

               <div className="sort col-6">
                    <strong>Sorting by</strong>
                    <select className="col-4">
                   <option value="relevance">relevance</option>
               </select>
               </div>

           </div>
        </form>
    );
};

export default Search;