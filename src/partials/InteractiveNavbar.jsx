import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InteractiveNavbar = () => {
    return (
        <StyledWrapper>
            <div className="button-container d-none d-lg-flex">

                <Link to={"/"} className="button text-white-smoke">
                    <i className="text-wine fa-solid fa-house-chimney"></i>
                </Link>


                <Link to={"/chi-siamo"} className="button text-white-smoke">
                    <i className="text-wine fa-solid fa-users"></i>
                </Link>



                <Link to={"/faq"} className="button text-white-smoke">
                    <i className="text-wine fa-solid fa-clipboard-question"></i>
                </Link>



                <Link to={"/lavora-con-noi"} className="button text-white-smoke">
                    <i className="text-wine fa-solid fa-handshake"></i>
                </Link>



                <Link to={"/contatti"} className="button text-white-smoke">
                    <i className="text-wine fa-solid fa-address-book"></i>
                </Link>


            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    background-color: #f7f4f3;
    width: 90%;
    height: 60px;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
rgba(247, 244, 243, 0.42) 5px 10px 15px;
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 70px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

i {
font-size: 2rem;
}

  .button:hover {
    transform: translateY(-3px);
  }

  .icon {
    font-size: 20px;
  }`;

export default InteractiveNavbar;
