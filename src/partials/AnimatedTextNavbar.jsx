
import styled from 'styled-components';


const AnimatedTextNavbar = () => {




  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <p>Da noi troverai</p>
          <div className="words">
            <span className="word"></span>
            <span className="word">Appartamenti</span>
            <span className="word">Attici</span>
            <span className="word">Bilocali</span>
            <span className="word">Trilocali</span>
            <span className="word">Case indipendenti</span>
            <span className="word">Loft</span>
            <span className="word">Mansarde</span>
            <span className="word">Rustici</span>
            <span className="word">Studi</span>
            <span className="word">Ville</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`


  .card {
    /* color used to softly clip top and bottom of the .words container */
    background-color: var(--bg-color);
    padding: 1rem 2rem;
    --bs-card-border-color: var(--bg-color);   
  }
  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;    
  @media screen and (max-width: 768px){
      font-size: 1.7rem;      
      width:100%;
      margin-left: 70px;         
      }
  @media screen and (max-width: 426px){
      font-size: 1.32rem;
      margin-left: 30px;
      } 
  }

  .words {
    overflow: hidden;
    position: relative;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #5b2333;
    animation: spin_4991 6s infinite;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }`;

export default AnimatedTextNavbar;
