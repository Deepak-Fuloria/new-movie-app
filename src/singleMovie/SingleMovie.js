import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageURL from '../public/images/card-image.jpg'
import './singleMovie.css'
import axios from 'axios'

const SingleMovie = () => {
  const { id,mediaType } = useParams()
  const [content, setContent] = useState({})
  const [video, setVideo] = useState()
  
  const API_KEY = process.env.REACT_APP_API_KEY
  

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`,
      )
      setContent(data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchVideo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
      )
      setVideo(data.results[0]?.key)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
    fetchVideo()
  }, [])

  //  const renderDataHtml = ()=>{
  const Image = `https://image.tmdb.org/t/p/w300${content.poster_path}`
  const tagline = content.tagline || ''
  const vote_average = parseInt(content.vote_average)
  const original_language = content.original_language || ''
  const adult = !content.adult ? '10+' : '18+'
  const origin_country =
    content.origin_country && content.origin_country[0]
      ? content.origin_country[0]
      : content.production_countries &&
        content.production_countries[0] &&
        content.production_countries[0].name
      ? content.production_countries[0].name
      : ''
  const overview = content.overview
  const first_air_date = content.release_date
  const budget = content.budget || ''
  const genres =
    content.genres && content.genres.length > 0
      ? content.genres.map((item) => <span key={item.id}>{item.name}</span>)
      : ''

  return (
    <>
    <div className="singleMovie-container">
    {content ? (
        <div >
          <h1>{tagline}</h1>
          <div className="wrapper">
          <div className="card card--details">
            <div className="card__cover">
              <img src={Image} alt="myimage" />
            </div>
            <div className="card__content">
              <div className="card__wrap">
                <span className="card__rate"> {vote_average}</span>

                <ul className="card__list">
                  <li>{original_language}</li>
                  <li>{adult}</li>
                </ul>
              </div>
              <ul className="card__meta">
                <li>
                  <span>Genre:</span>
                  <span className="linkTag">{genres}</span>
                </li>
                <li>
                  <span>Type:</span>
                  <span className="linkTag">{mediaType}</span>
                </li>

                <li>
                  <span>Release year:</span>{' '}
                  <span className="linkTag">{first_air_date}</span>
                </li>

                <li>
                  <span>Budget:- </span>
                  <span className="linkTag"> {budget}</span>
                </li>

                <li>
                  <span>Country:</span>{' '}
                  <span className="linkTag">{origin_country}</span>{' '}
                </li>
              </ul>
              <div className="description_readmore_wrapper">{overview}</div>
             
            </div>
          </div>
          <div className='frameSec'>
                       
                       <iframe width="450" height="280" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   </div>
          </div>
          
        </div>
      ) : (
        ''
      )}


    </div>
      
    </>
  )
}
export default SingleMovie