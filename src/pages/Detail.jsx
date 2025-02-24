import React from "react";

const Detail = () => {
  return (
    <>
      <div classNameName="container">
        <h3>Titolo immobile</h3>
        <img
          classNameName="w-100 py-3"
          src="https://placehold.co/600x400/EEE/31343C"
          alt="placeholder"
        />
        <p>numero cuoricini</p>
        <p>numero recensioni</p>
        <div classNameName="details py-5">
          <p>descrizione dell'immobile</p>
          <p>metri quadrati</p>
          <p>via dell'immobile</p>
          <p>stanze dell'immobile</p>
          <p>bagni dell'immobile</p>
        </div>

        <div classNameName="recensioni">
          <h1>recensioni</h1>
          <p>recensione</p>
          <p>recensione</p>
          <p>recensione</p>
          <p>recensione</p>
          <p>recensione</p>
          <p>recensione</p>
          <p>recensione</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
