import './App.sass';
import Search from './components/search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import New_app from './New_app';
import { Routes, Route, Link} from 'react-router-dom';
import { BookPage } from './pages/BookPage';

const API_KEY = "AIzaSyAZo2xCu7RKI6DJgDeeFTnpaVrTTba1RiI";



const App = () => {

    return (
      <div>
        
      <Routes>
      <Route path="/BookPage" exact element={<BookPage/>} />
      <Route path="/" element={<New_app/>}/>
      </Routes>
      </div>
    );
  }







export default App;
