import React from 'react'
import "./movieCard.css"
import { NavLink, useParams } from 'react-router-dom';
// import cardImage from '../public/images/card-image.jpg'

const MovieCard = ({data}) => {
  const id = data.id;
  const title=data.original_name || data.original_title ;
  const image=`https://image.tmdb.org/t/p/w300/${data.poster_path}`
  const media_type =  data.media_type 
  const release_date =  data.release_date || data.first_air_date;
  const vote_average = parseInt(data.vote_average);
  const original_language = data.original_language || ''
  const {mediaType}=useParams()
  return (
    <>
    <NavLink to={`/details/${id}/${mediaType}`} className="navlink">
    <div className="movie-card-container">
    <div className="movie-card-image">
    <img src={image} alt="" />
    </div>
    <div className="movie-card-info">
      <div className="movie-release">
      <span className='movie-release-date'>Release Date</span>
      <span className='movie-date'>{release_date}</span>
      </div>
    
    <p id='movie-movie-name'>{title}</p>
      </div> 
     
    </div>
    </NavLink>
    </>
  )
}

export default MovieCard