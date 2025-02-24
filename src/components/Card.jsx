

const Card = ({immobile}) =>{
  return (
    <div>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{immobile.descrizione_immobile}</h5>
          <p className="card-text">{immobile.stanze}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}


export default Card;