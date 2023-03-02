import React, { useState, useEffect } from 'react'
import './FilterLeftBar.css'
import axios from 'axios'
import {BsFillXCircleFill } from "react-icons/bs";

const API_KEY = process.env.REACT_APP_API_KEY

const FilterLeftbar = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  mediaType
}) => {
  const GetDataList = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${API_KEY}&language=en-US`,
    )
    setGenres(response.data.genres)
  }
  useEffect(() => {
    GetDataList()
  }, [])

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(genres.filter((g)=>{ return g.id !== genre.id}));
    // return setPage(1)
  }

  const handleRemove = (genre)=>{
    setSelectedGenres(
        selectedGenres.filter((g)=>{ 
            return g.id !== genre.id
        })
    )
    //console.log('oldSelectedGenres', selectedGenres)
    setGenres([...genres,genre]);
    // return setPage(1)
}

  return (
    <>
      {selectedGenres &&
        selectedGenres.map((item) => {
          return (
            <div className="selected-item" key={item.id}>
                <ul
                  onClick={() => {
                    return handleRemove(item)
                  }}
                >
                  <li>{item.name}</li>
                  <i><BsFillXCircleFill /></i>
                </ul>
                
              </div>
          )
        })}
      {genres && genres.length > 0
        ? genres.map((item) => {
            return (
              <div className="filter-container" key={item.id}>
                <ul
                  onClick={() => {
                    return handleAdd(item)
                  }}
                >
                  <li>{item.name}</li>
                </ul>
              </div>
            )
          })
        : 'Lading content...'}
    </>
  )
}

export default FilterLeftbar
