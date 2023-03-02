import React,{useEffect, useState} from 'react'
import './Search.css'
import MainCards from '../home/MainCard'
import axios from 'axios'
import Pagination from '../pagination/Pagination';

const Search = () => {

  const [pageno, setPageno] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
 const [media_type,setMedia_type]=useState("tv")
 const [tempSearch,setTempSearch]=useState("crime")
 const [searchValue,setSearchValue]=useState("crime")
 const [searchData,setSearchData]=useState()
 const API_KEY = process.env.REACT_APP_API_KEY
const getsearchedData=async(searchValue)=>{
  setSearchValue(tempSearch)
  
  searchValue= searchValue|| tempSearch
  const {data} = await axios.get(`https://api.themoviedb.org/3/search/${media_type}?api_key=dd3d51e83b36ee13b4656e6b88659503&language=en-US&query=${searchValue}&page=${pageno}&include_adult=false`)

  

  setSearchData(data.results);
  setTotalPages(data.total_pages);
  console.log("pageno in search page",pageno)
  console.log(data)
}

useEffect(()=>{
  getsearchedData()
},[searchValue,media_type,pageno])


  return (
    <>
    <div className="search-container">
      <div className="search-top-heading">
        <h1>Search Movies / TV Series</h1>
        <h2>For You</h2>
        <h3>Type movie or tv show name to find it</h3>
      </div>
      <div className="radio">
      <input type="radio" value="tv" name="search" checked={media_type=="tv"} onChange={(e)=>setMedia_type(e.target.value)}/> Tv
        <input type="radio" value="movie" name="search" id='raido-movie' checked={media_type=="movie"} onChange={(e)=>setMedia_type(e.target.value)}/> Movie
      
      </div>
      
      <div className="search">
        <input type="text" placeholder='search here' onChange={(e)=>setTempSearch(e.target.value)}/>
        <button onClick={()=>getsearchedData(tempSearch)}>Find</button>
      </div>
      
     <div className="search-card">
     {
      searchData?searchData.map((Element)=>{
        return (<MainCards data={Element} key={Element.id} media_type={media_type}/>)
      })
       
      :"no data found"
     }
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

export default Search