

const Card = ({immobile}) =>{
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action" href="#list-item-1">{immobile.descrizione_immobile}</a>
            <a className="list-group-item list-group-item-action" href="#list-item-2">{immobile.indirizzo}</a>
            <a className="list-group-item list-group-item-action" href="#list-item-3">{immobile.metri_quadrati}</a>
            <a className="list-group-item list-group-item-action" href="#list-item-4">{immobile.stanze}</a>
          </div>
        </div>
        <div className="col-8">
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
            <h4 id="list-item-1">Item 1</h4>
            <p>...</p>
            <h4 id="list-item-2">Item 2</h4>
            <p>...</p>
            <h4 id="list-item-3">Item 3</h4>
            <p>...</p>
            <h4 id="list-item-4">Item 4</h4>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;