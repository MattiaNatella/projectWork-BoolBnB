import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardButton = ({ immobile }) => {
    return (
        <StyledWrapper>
            <Link
                to={`/dettaglio-immobile/${immobile.id}`}
                className="btn button type1"
            >
                <span className="btn-txt">Vedi dettagli</span>
            </Link>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
  display: flex;
  align-items: center;
  justify-content: center;
    height: 50px;
    width: 200px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid  #5b2333;
    overflow: hidden;
    border-radius: 30px;
     color: #5b2333;
    transition: all 0.5s ease-in-out;
  }

  .btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 4px;
  }

  .type1::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    background-color: #5b2333;
    border-radius: 30px;
    visibility: hidden;
    height: 10px;
    width: 10px;
    z-index: -1;

  }

  .button:hover {
    box-shadow: 1px 1px 200px #252525;
     color: #F7F4F3;
    border: none;
  }

  .type1:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
  }`;

export default CardButton;
