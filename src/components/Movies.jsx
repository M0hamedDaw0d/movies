import React from 'react'
import Moviescard from './Moviescard'

function Movies({movies}) {
  return (
   <section className=' text-center'>
  <div className="container">
    <div className="row ">
       
       {
        movies.length >=1 ?
        movies.map( (movie)=>{
            return(<Moviescard movie={movie} key={movie.id} />)
        } ) :
        <h1 className='text-center pt-3 text-danger'>No Data</h1>
            
        
       }

      
    </div>{/* row */}
  </div>{/* container */}
</section>

  )
}

export default Movies