import React from 'react'
import logo from '../image/logo2.png'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom'

function Header( {search} ) {


  const onSearch = (word)=>{
    search(word)
      }
  return (
   

  <header className="bg-primary text-white py-3">
    <div className="container">
      <div className="row">
        <div className="col-2">

            <Link to="/">
          <img src={logo} className="w-100" alt="" />
          </Link>
        </div>{/* logo */}
        <div className="col-8 offset-2">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"><FiSearch/></span>
            <input type="text" onChange={ (e)=>{ onSearch (e.target.value) } } className="form-control" placeholder="ابحث هنا" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>{/* search */}
      </div>{/* row */}
    </div>{/* container */}
  </header>
  )


}

export default Header