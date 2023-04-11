
import { useParams } from 'react-router-dom'
import {useState , useEffect} from 'react'
import axios from 'axios'
function Details() {
  const params = useParams();
    
  const [movie ,setMovie] = useState([]);

  const getMovie = async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar`);
    setMovie(res.data)
  }

  useEffect( ()=>{
    getMovie()
  },[] )
  

  return (
    <section>
  <div className="container text-center">
    <div className="row">
      
      <div className="col-md-6 py-3 ">
        
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-50" alt="" />
      </div>{/* film */}
      <div className="col-md-6 p-3">
        
        <h1 className=' text-warning'>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p> {movie.overview} </p>
        <a href="#!" className="btn btn-success form-control-lg form-control mt-5">مشاهدة</a>
      </div>{/* des */}
      
    </div>{/* row */}
  </div>{/* container */}
</section>

  )
}

export default Details