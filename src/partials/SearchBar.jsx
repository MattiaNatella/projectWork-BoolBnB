import React from 'react';
import styled from 'styled-components';

const SearchBar = (props) => {

  const { error, validateSearch } = props

  return (
    <StyledWrapper>
      <input
        type="text"
        placeholder="inserisci la via o la città"
        className="input"
        onChange={validateSearch} />
      {error && <div className="text-danger mt-2">{error}</div>}
    </StyledWrapper>

  );
}

const StyledWrapper = styled.div`
width: 90%;

  .input[type = "text"] {
    display: block;
    color: rgb(34, 34, 34);
    background: linear-gradient(142.99deg, rgba(217, 217, 217, 0.63) 15.53%, rgba(243, 243, 243, 0.63) 88.19%);
    box-shadow: 0px 12px 24px -1px rgba(0, 0, 0,0.18);
    border-color: rgba(7, 4, 14, 0);
    border-radius: 50px;
    block-size: 20px;
    margin: 0px auto;
    padding: 22px 15px;
    outline: none;
    text-align: center;
    width: 70%;
    transition: 0.5s;
  }
  .input[type = "text"]:focus {
    width: 100%;
  }`;

export default SearchBar;
