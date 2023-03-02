import React, { useState, useEffect } from 'react'
import './movies.css'
import FilterLeftbar from '../filter/FilterLeftBar'
import MovieCard from './movieCard'
import axios from 'axios'
import Pagination from '../pagination/Pagination';
import { useParams } from 'react-router-dom'

const Movies = () => {
  const [onlyMovies, setOnlyMovies] = useState({})
  const [pageno, setPageno] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY
  const {mediaType}=useParams()
  const useGenres = (selectedGenres) => {
    if (selectedGenres < 1) return ''
    const GenreIds = selectedGenres.map((g) => {
      return g.id
    })
    return GenreIds.reduce((acc, curr) => {
      return acc + ',' + curr
    })
  }

  const genreforURL = useGenres(selectedGenres)

  const onlymoviesUrl = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${API_KEY}&language=en-US&page=${pageno}&with_genres=${genreforURL}`

  const getOnlyMovieData = async (url) => {
    const response = await axios.get(url)
    const data = response.data.results
    setPageno(response.data.page)
    setTotalPages(response.data.total_pages)
    

    if (data.length > 0) {
      setOnlyMovies(data)
      console.log(response)
    }
  }

  useEffect(() => {
    getOnlyMovieData(onlymoviesUrl)
  }, [onlymoviesUrl])

  return (
    <>
      <div className="movie-container">
        <div className="movie-heading">
          <h1>Top Trending Movies</h1>
          <h3>FOR YOU</h3>
        </div>
        <div className="movie-main-container">
          <div className="filter-card">
            <h1 className="filter-by">Filter By:-</h1>
            <div className="filter">
           
              <FilterLeftbar genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}  setGenres={setGenres} mediaType={mediaType}/>
         
            </div>
          </div>

          <div className="movie-card">
            {onlyMovies && onlyMovies.length > 0
              ? onlyMovies.map((element) => {
                  return <MovieCard data={element} key={element.id} />
                })
              : 'loading'}
          </div>
        </div>
        <div className="pagination">
       {
        totalPages>20?<Pagination  totalPages={totalPages} setPageno={setPageno} pageno={pageno}/>:''
       }
       </div>
      </div>
    </>
  )
}

export default Movies
