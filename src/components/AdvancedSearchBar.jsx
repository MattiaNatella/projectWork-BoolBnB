import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AdvancedSearchBar = () => {
  const { handleAdvancedSearch, tipologie, fetchTipologie, filters, setFilters } =
    useGlobalContext();

  const [error, setError] = useState("");

  const validate = () => {
    if (!filters.stanze && !filters.bagni && !filters.tipologia) return false;
    return true;
  };

  useEffect(() => {
    fetchTipologie();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setError(
        "Controlla bene i dati, potrebbe esserci qualche errore, ricordati i dati sono obbligatori"
      );
      return;
    }

    handleAdvancedSearch(filters);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    console.log(filters)
    setError("");
  };

  return (
    <StyledWrapper>
      <div>
        <form
          className="d-lg-flex align-items-center justify-content-center justify-content-lg-between gap-lg-3 mt-5"
          onSubmit={handleSubmit}>
          <label htmlFor="tipologia"><strong>Tipologia</strong></label>
          <select
            className="input2 form-select my-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="tipologia"
            value={filters.tipologia}
          >
            <option className=" text-black">Seleziona la tipologia</option>
            {Array.isArray(tipologie) &&
              tipologie?.map((tipologia) => (
                <option key={tipologia?.id} value={tipologia?.id}>
                  {tipologia?.descrizione}
                </option>
              ))}
          </select>

          <div className="d-flex align-items-center justify-content-between gap-3 pb-2 pb-lg-0">
            <label htmlFor="stanze"><strong>Stanze</strong></label>
            <input
              className="input"
              type="number"
              placeholder=""
              aria-label="Search"
              onChange={handleChange}
              name="stanze"
              value={filters.stanze}
              min={1}
              max={10}
            />
            <label htmlFor="bagni"><strong>Bagni</strong></label>
            <input
              className="input"
              type="number"
              placeholder=""
              aria-label="Search"
              onChange={handleChange}
              name="bagni"
              value={filters.bagni}
              min={1}
              max={10}
            />
          </div>


          <div className="d-flex justify-content-center">
            <button className="advanced-button" type="submit">
              Cerca
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="col-12 text-center mt-3">
          <h6 className="text-center text-wine mb-3">{error}</h6>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
width: 70%;
  .input[type="number"] {
    display: block;
    color: rgb(34, 34, 34);
    background: linear-gradient(
      142.99deg,
      rgba(217, 217, 217, 0.63) 15.53%,
      rgba(243, 243, 243, 0.63) 88.19%
    );
    box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
    border-color: rgba(7, 4, 14, 0);
    border-radius: 50px;
    block-size: 20px;
    margin: 0px, auto;
    padding: 22px 15px;
    outline: none;
    text-align: center;
%;
    transition: 0.5s;
  }

  .input2 {
    color: rgba(34, 34, 34, 0.65);
    margin: 0px auto;
    padding: 10px 15px;
    text-align: center;
    background: linear-gradient(
      142.99deg,
      rgba(217, 217, 217, 0.63) 15.53%,
      rgba(243, 243, 243, 0.63) 88.19%
    );
    box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
    border-color: rgba(7, 4, 14, 0);
    border-radius: 50px;
  }

  .advanced-button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: #5b2333;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #f7f4f3;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    width: 100%;
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 20%;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }
    @media (max-width: 991px){
    .advanced-button{
      width: 30%;
  }
    }

    @media (max-width: 767px){
    .advanced-button{
      width: 40%;
  }
    }
`;

export default AdvancedSearchBar;
