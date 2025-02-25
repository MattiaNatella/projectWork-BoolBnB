import { useState, useEffect, useContext } from "react"
import{ Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import axios from "axios"

const Searchbar = () =>{
  
  const {handleSearch} = useGlobalContext()
  
  return (


    <div className="mt-3 d-flex">
      <div>
        <input 
          className="form-control me-2"
          type="search"
          placeholder="Cerca un immobile"
          aria-label="Search"
          onChange={handleSearch}       
        />
      </div>

      <div>
        <Link to={'/ricerca-avanzata'} className="btn btn-primary">Cerca immobile</Link>
      </div>

    </div>
  )
}

export default Searchbar;