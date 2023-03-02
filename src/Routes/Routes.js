import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../home/Home';
import Movies from '../movies/Movies';
import Series from '../series/Series';
import Search from '../search/Search';
import SingleMovie from '../singleMovie/SingleMovie';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Routeconfig = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/:mediaType" element={<Movies/>}/>
        <Route path="/series/:mediaType" element={<Series/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/details/:id/:mediaType" element={<SingleMovie/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Routeconfig
