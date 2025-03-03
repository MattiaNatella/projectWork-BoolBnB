import styled from "styled-components";
const FAQ = () => {
  return (
    <StyledWrapper>
      <div className="container pt-5">
        <h1 className="title">Domande Frequenti</h1>
        <div className="faq-item">
          <h2 className="question">Come posso prenotare una proprietà?</h2>
          <p className="answer">
            Puoi prenotare una proprietà direttamente sul nostro sito web. Basta
            cercare la proprietà desiderata, selezionare le date e seguire le
            istruzioni per completare la prenotazione.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="question">Quali metodi di pagamento accettate?</h2>
          <p className="answer">
            Accettiamo vari metodi di pagamento, tra cui carte di credito,
            PayPal e bonifici bancari. Puoi scegliere il metodo di pagamento che
            preferisci durante il processo di prenotazione.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="question">Posso cancellare la mia prenotazione?</h2>
          <p className="answer">
            Sì, puoi cancellare la tua prenotazione in base alle politiche di
            cancellazione specificate per ogni proprietà. Ti consigliamo di
            leggere attentamente le politiche di cancellazione prima di
            prenotare.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="question">
            Cosa devo fare se ho un problema durante il mio soggiorno?
          </h2>
          <p className="answer">
            Se hai un problema durante il tuo soggiorno, puoi contattare il
            nostro servizio clienti 24/7. Siamo sempre disponibili per
            assisterti e risolvere qualsiasi problema tu possa avere.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="question">Come posso diventare un host su BoolBnB?</h2>
          <p className="answer">
            Per diventare un host su BoolBnB, puoi registrarti sul nostro sito
            web e seguire le istruzioni per elencare la tua proprietà. Il nostro
            team ti guiderà attraverso il processo e ti aiuterà a iniziare.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .title {
    font-size: 2.5rem;
    color: #5b2333;
    margin-bottom: 2rem;
    text-align: center;
  }

  .faq-item {
    margin-bottom: 2rem;
  }

  .question {
    font-size: 1.5rem;
    color: #5b2333;
    margin-bottom: 0.5rem;
  }

  .answer {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
  }
`;

export default FAQ;
