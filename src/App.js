import React,{useState , useEffect} from 'react'
import axios from 'axios'
import Footer from './components/Footer'
import Header from './components/Header'
import Movies from './components/Movies'
import Details from './components/Details'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [movies ,setMovies] = useState([]);

  const getMovies = async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar`);
    setMovies(res.data.results)
  }
  const search = async (word)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar&query=${word}`);
    setMovies(res.data.results)
  }

  useEffect( ()=>{
    getMovies()
  },[] )
  
  return (
    <div>
      <Header search={search}/>

      <Routes>
        <Route path='/' element={<Movies movies={movies} />}/>
        <Route path='details/:id' element={<Details/>}/>
      </Routes>
     
      

      <Footer/>
    </div>
  )
}

export default App