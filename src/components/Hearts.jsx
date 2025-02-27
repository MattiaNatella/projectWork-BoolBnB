import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Hearts = (props) => {

  const { immobile, cuoricini, setCuoricini } = props
  const APICuoricini =
    import.meta.env.VITE_API_URL + "/" + immobile.id + "/cuoricini";

  const [clicked, setClicked] = useState(false);

  const updateCuoricini = () => {
    axios
      .patch(APICuoricini, {
        voto: cuoricini + 1,
      })
      .then((response) => {
        setCuoricini(cuoricini + 1);
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 400);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setCuoricini(immobile.voto);
  }, [immobile.voto]);

  return (
    <StyledWrapper>
      <div className="like-button">
        <input
          className="on heart"
          id={`like-${immobile.id}`}
          type="checkbox"
          defaultChecked={false}
          onClick={updateCuoricini}
        />
        <label className="like" htmlFor={`like-${immobile.id}`}>
          <svg
            className={`like-icon ${clicked ? "clicked" : "not-clicked"}`}
            fillRule="nonzero"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </label>
        <span className="like-count">{cuoricini}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .heart-button {
    display: none;
  }

  .on {
    display: none;
  }

  .like-button {
    position: relative;
    cursor: pointer;
    display: flex;
    height: 50px;
    width: 136px;
    border-radius: 50px;
    border: 2px solid #5b2333;
    background-color: #f7f4f3;
    overflow: hidden;
  }

  .like {
    width: 55%;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-evenly;
  }

  .like-icon {
    fill: #5b2333;
    height: 28px;
    width: 28px;
    transition: 1s infinite ease-in-out;
  }

  .like-icon:hover{
  transform: scale(1.1);
  }

  .like-text {
    color: #5b2333;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .like-count {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5b2333;
    font-size: 1.2rem;
    font-weight: 600;
    border-left: 2px solid #5b2333;
    transition: all 0.5s ease-out;
  }

  .clicked {
    fill: #5b2333;
    animation: enlarge 0.2s ease-out 1;
    transition: all 0.2s ease-out;
  }
  .not-clicked {
    fill: rgb(151, 151, 151);
    animation: enlarge 0.2s ease-out 1;
    transition: all 0.2s ease-out;
  }

  @keyframes enlarge {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

export default Hearts;
