import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = ({ text, error, link, onclick, type }) => {
  return (
    <StyledWrapper>
      <Link
        to={error ? "#" : link}
        className={` btn button ms-2 ${error ? "disabled" : ""}`}
        onClick={onclick || ""}
        type={type || ""}
      >
        <div className="d-flex justify-content-between align-items-center gap-2">
          <span className="d-none d-sm-flex">{text}</span>
          <i className="fa-solid fa-circle-plus"></i>
        </div>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: #5b2333;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: #f7f4f3;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
  }

  i {
    font-size: 1.1rem;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .button:hover .icon {
    transform: translate(4px);
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

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }
`;

export default Button;
