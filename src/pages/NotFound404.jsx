const NotFound404 = () => {
  const styles = {
    container: {
      position: "relative",
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    notfound: {
      maxWidth: "520px",
      width: "100%",
      lineHeight: "1.4",
    },
    notfound404: {
      position: "relative",
      height: "200px",
      margin: "0 auto 20px",
      fontSize: "236px",
      fontWeight: "200",
      color: "#211b19",
      textTransform: "uppercase",
      paddingBottom: "250px",
    },
    notfoundText: {
      fontSize: "28px",
      fontWeight: "400",
      textTransform: "uppercase",
      color: "#211b19",
      background: "#fff",
      padding: "10px 5px",
      display: "inline-block",
    },
    link: {
      display: "inline-block",
      fontWeight: "700",
      textDecoration: "none",
      color: "#fff",
      textTransform: "uppercase",
      padding: "13px 23px",
      fontSize: "18px",
      transition: "0.2s all",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.notfound}>
        <div style={styles.notfound404}>Oops!</div>
        <div style={styles.notfoundText}>404 - Pagina non trovata</div>
        <br />
        <a href="/" style={styles.link} className="btn btn-primary">
          Torna alla Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound404;
