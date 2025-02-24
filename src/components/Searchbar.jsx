const Searchbar = () =>{
  return (
    <form className="mt-3">
      <input 
        className="form-control me-2"
        type="search"
        placeholder="Cerca un immobile"
        aria-label="Search"
        // onChange={}
      />

    </form>
  )
}

export default Searchbar;