import styled from "styled-components";
import Rating from "./Rating";

const ReviewCard = ({ review }) => {
        return (
          <StyledWrapper>
            <div className="card mt-2">
              <div className="author">
                <strong>{review.username}</strong>
              </div>  
              <Rating valutazione={review.valutazione} />        
              <div className="infos">
                <p className="date-time">
                  <strong>Giorni di permanenza:</strong>{review.gg_permanenza} 
                </p>
                <p className="description">
                  {review.testo}
                </p>
              </div>
              
            </div>
          </StyledWrapper>
        );
      }

      const StyledWrapper = styled.div`
        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: rgba(255, 255, 255, 1);
          padding: 20px;
          max-width: 320px;
        }

        .stars {
          display: flex;
          grid-gap: 0.125rem;
          gap: 0.125rem;
          color: rgb(238, 203, 8);
        }

        .star {
          height: 1.25rem;
          width: 1.25rem;
        }

        .infos {
          margin-top: 1rem;
        }

        .date-time {
          color: rgba(7, 63, 216, 1);
          font-size: 12px;
          font-weight: 600;
        }

        .description {
          margin-top: 0.4rem;
          line-height: 1.625;
          color: rgba(107, 114, 128, 1);
        }

        .author {
          margin-top: 1.3rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: rgba(107, 114, 128, 1);
        }`;

export default ReviewCard;

// import styled from 'styled-components';

// const ReviewCard = ({ review }) => {
//   return (
//     <StyledWrapper>
        
//       <div className="rating-card m-2">
//         <div className="text-wrapper">          
//           <p className="text-second">{review.testo}</p>
//           <p className="text-tertiary"><strong>VOTO:</strong> {review.valutazione}</p>
//           <p className="text-fourth">{review.username}</p>
//         </div>
        
        
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .rating-card {
//     max-width: 280px;
//     height: fit-content;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #f7f4f3;
//     background: linear-gradient(to right bottom,  #f7f4f3, #f7f4f3);
//     padding: 20px 20px;
//     border-radius: 10px;
//     border: 1px solid #5b2333;
//     gap: 10px;
//     font-family: Arial, Helvetica, sans-serif;
//     box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.058);
//   }
//   .text-wrapper {
//     width: 100%;
//     height: fit-content;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 5px;
//   }
//   .text-first {
//     color: #5b2333;
//     font-size: 15px;
//     font-weight: 600;
//     letter-spacing: 0.5px;
//   }
//   .text-second {
//     color: #5b2333;
//     font-size: 15px;
//     font-weight: 400;
//     letter-spacing: 0.5px;
//   }

//   .text-tertiary {
//     color: #5b2333;
//     font-size: 20px;
//     font-weight: 400;
//     letter-spacing: 0.5px;
//     border-bottom: 1px solid  #5b2333;
//   }

//   .text-fourth {  
//     color: #5b2333;
//     font-size: 15px;
//     font-weight: 200;
//     letter-spacing: 0.5px;
//   }

//   .rating-stars-container {
//     width: 100%;
//     height: 30px;
//     display: flex;
//     flex-direction: row-reverse;
//     align-items: center;
//     justify-content: center;
//   }
//   .star-label svg {
//     fill: rgb(210, 210, 210);
//     width: 20px;
//     height: auto;
//   }
//   .rating-stars-container input {
//     appearance: unset;
//   }
//   .rating-stars-container input:hover ~ .star-label svg {
//     fill: rgb(255, 204, 185);
//   }
//   .rating-stars-container input:checked ~ .star-label svg {
//     fill: rgb(255, 102, 47);
//     animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
//   }
//   @keyframes slide-in-fwd-center {
//     0% {
//       transform: scale(1.6);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }`;

 

// export default ReviewCard;

    
  


