import React from 'react'
import "./MainCard.css"
import { NavLink } from 'react-router-dom';

const MainCard = ({data,media_type}) => {
 
  const id = data.id;
  const title=data.original_name || data.original_title ;
  const image=`https://image.tmdb.org/t/p/w300/${data.poster_path}`
  media_type =  data.media_type || media_type
  const release_date =  data.release_date || data.first_air_date;
  const vote_average = parseInt(data.vote_average);
  const original_language = data.original_language || ''
 

  
  return (
    <>

    
      < NavLink to={`/details/${id}/${media_type}`} className="navlink">
      
      <div className="card-container" key={id}>
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="card-info">
          <div className="release">
          <span className='release-date'>Release Date</span>
          
          <span className='date'>{release_date}</span>
          </div>
        
        <p id='movie-name'>{title}</p>
          </div> 
         
        </div>
      
      </NavLink>
       

     
  
    </>
  )
}

export default MainCard