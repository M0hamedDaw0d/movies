import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';
function Moviescard({movie}) {
  return (
    <div className=" col-md-3 col-sm-6  ">
      <div className="card  mb-3 mt-3 p-3 text-center ">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" img-fluid" alt="" />
        <h4 className='mt-2'>{movie.title} </h4>
        <h5 className='mb-2'>  {movie.vote_average} <span className=' text-warning fs-3'><AiFillStar/></span>  </h5>
        <h5>{movie.release_date}</h5>
        <Link to={`details/${movie.id}`} className="btn btn-success ">تفاصيل الفيلم</Link>
        </div>
      </div>
  )
}

export default Moviescard