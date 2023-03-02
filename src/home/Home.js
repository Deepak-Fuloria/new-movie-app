import React,{useEffect,useState} from 'react'
import "./home.css"
import MainCard from './MainCard'
import axios from 'axios';
import Pagination from '../pagination/Pagination';

 
 const api_key=process.env.REACT_APP_API_KEY

const Home = () => {

  const [pageno, setPageno] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [movieData,setMovieData]=useState([]);
 
  const url=`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${pageno}`
  const getTrendingData=async(url)=>{
    const response=await axios.get(url);
    const data= await response.data;
  
   if(data.results.length>0){
    setMovieData(data.results)
    setPageno(data.page)
    setTotalPages(data.total_pages)
    console.log(response) 
   }
      
  }

useEffect(()=>{

getTrendingData(url)

},[url])



  return (
    <>
      <div className="home-container">
        <div className="heading">
          <h1 className='main-heading'>Top Trending</h1>
          <h3 className='heading-info'>Tv and Movie For You</h3>
        </div>
       <div className="main-card">
        {
         
          movieData.map((element,index)=>{ return<MainCard data={element} key={index}/>})
        
        }
          
       </div>
       <div className="pagination-calling">
       {
        totalPages>20?<Pagination  totalPages={totalPages} setPageno={setPageno} pageno={pageno}/>:''
       }
       </div>
         
      </div>
    </>
  )
}

export default Home
