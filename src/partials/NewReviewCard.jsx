import React from "react";
import styled from "styled-components";
import Rating from "../components/Rating";

const NewReviewCard = ({ review }) => {
  return (
    <StyledWrapper>
      <div className="card-review mb-5">
        <div className="card-review-img">
          <p className="text-vote">
            <Rating
              valutazione={review.valutazione}
              colore={"text-white-smoke"}
            />
          </p>
        </div>
        <div className="card-review-info">
          <p className="text-review-title">{review.username}</p>
          <p className="text-date">
            Ospite per: {review.gg_permanenza} giorni{" "}
          </p>
          <p className="text-review-body">{review.testo}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: 2.5rem;
  .card-review {
    width: 190px;
    height: 260px;
    background: #f5f5f5;
    overflow: visible;
    box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #5b2333;
    border-radius: 8px;
    padding: 0.2rem 0;
    -webkit-box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.5);
  }

  .card-review-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    margin-top: -1.5rem;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .card-review-info::-webkit-scrollbar {
    display: none;
  }

  .card-review-img {
    --size: 85px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transform: translateY(-50%);
    background: #5b2333;
    text-align: center;

    position: relative;
  }

  // .card-review-img::before {
  //  content: "";
  //  border-radius: inherit;
  //  position: absolute;
  //  top: 50%;
  //  left: 50%;
  //  width: 102%;
  //  height: 102%;
  //  transform: translate(-50%, -50%);
  //  border: 0.5rem solid #f7f4f3;
  // }

  /*Text*/
  .text-review-title {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 800;
    color: #5b2333;
    letter-spacing: 0.05rem;
  }

  .text-review-body {
    font-size: 0.9rem;
    text-align: center;
    color: #6f6d78;
    font-weight: 400;
    font-style: italic;
  }

  .text-vote {
    color: gold;
    position: absolute;
    left: 0.1rem;
    top: 1.8rem;
  }
  .text-date {
    font-size: 1rem;
    text-align: center;
    color: #6f6d78;
    font-weight: 500;
    font-style: italic;
  }
`;

export default NewReviewCard;
