const styles = {

 app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0d0d0d",
    color: "#f0ece3",
    fontFamily: "'IBM Plex Mono', monospace",
    width: "100%",        
    overflowX: "hidden",  
  },

 
  cabecalho: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem 2.5rem",
    borderBottom: "1px solid #2a2a2a",
    backgroundColor: "#111111",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  cabecalhoLogo: {
    fontSize: "1.1rem",
    fontWeight: "700",
    letterSpacing: "0.15em",
    color: "#e8ff47",
    textTransform: "uppercase",
  },
  cabecalhoNav: {
    display: "flex",
    gap: "0.5rem",
  },
  cabecalhoBtn: {
    background: "transparent",
    border: "1px solid #333",
    color: "#f0ece3",
    padding: "0.45rem 1.1rem",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.18s ease",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  cabecalhoBtnAtivo: {
    backgroundColor: "#e8ff47",
    borderColor: "#e8ff47",
    color: "#0d0d0d",
    fontWeight: "700",
  },

 
  rodape: {
    marginTop: "auto",
    padding: "1.5rem 2.5rem",
    borderTop: "1px solid #2a2a2a",
    backgroundColor: "#111111",
    textAlign: "center",
  },
  rodapeLink: {
    color: "#e8ff47",
    textDecoration: "none",
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
    display: "block",
    marginBottom: "0.4rem",
  },
  rodapeTexto: {
    color: "#555",
    fontSize: "0.72rem",
    letterSpacing: "0.08em",
  },

  
  main: {
    flex: 1,
    padding: "2.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },

  
  menu: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginBottom: "2.5rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid #2a2a2a",
  },

  
  botao: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.6rem",
    background: "transparent",
    border: "1px solid #2a2a2a",
    padding: "1rem 1.2rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "'IBM Plex Mono', monospace",
    minWidth: "90px",
  },
  botaoAtivo: {
    borderColor: "#e8ff47",
    backgroundColor: "#1a1a00",
  },
  botaoFoto: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #333",
    display: "block",
  },
  botaoFotoPlaceholder: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#2a2a2a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.4rem",
    border: "2px solid #333",
  },
  botaoNome: {
    fontSize: "0.72rem",
    color: "#aaa",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  botaoNomeAtivo: {
    color: "#e8ff47",
  },

  
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
    gap: "1.2rem",
  },
  card: {
    border: "1px solid #222",
    backgroundColor: "#141414",
    padding: "1.5rem",
    position: "relative",
    overflow: "hidden",
  },
  cardTag: {
    display: "inline-block",
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    padding: "0.2rem 0.6rem",
    marginBottom: "0.8rem",
    fontWeight: "700",
  },
  cardTagFacil: { backgroundColor: "#0a3d0a", color: "#4ade80", border: "1px solid #166534" },
  cardTagDificil: { backgroundColor: "#3d0a0a", color: "#f87171", border: "1px solid #991b1b" },
  cardTagAprendizado: { backgroundColor: "#0a1f3d", color: "#60a5fa", border: "1px solid #1e40af" },
  cardTagSemAprendizado: { backgroundColor: "#2a2a0a", color: "#facc15", border: "1px solid #854d0e" },
  cardTitulo: {
    fontSize: "0.78rem",
    color: "#777",
    letterSpacing: "0.1em",
    marginBottom: "0.8rem",
    textTransform: "uppercase",
  },
  cardCodigo: {
    backgroundColor: "#0a0a0a",
    border: "1px solid #1e1e1e",
    padding: "1rem",
    overflowX: "auto",
    fontSize: "0.78rem",
    lineHeight: "1.7",
    color: "#c8e6c9",
    fontFamily: "'IBM Plex Mono', monospace",
    whiteSpace: "pre",
  },
  cardComentario: {
    marginTop: "0.8rem",
    fontSize: "0.75rem",
    color: "#555",
    fontStyle: "italic",
    lineHeight: "1.5",
  },

  
  conteudo: {
    maxWidth: "700px",
  },
  conteudoTitulo: {
    fontSize: "0.65rem",
    letterSpacing: "0.25em",
    color: "#e8ff47",
    textTransform: "uppercase",
    marginBottom: "2.5rem",
  },
  conteudoLista: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  conteudoItem: {
    display: "grid",
    gridTemplateColumns: "180px 1fr",
    gap: "1rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid #1e1e1e",
    alignItems: "start",
  },
  conteudoNome: {
    fontSize: "0.8rem",
    color: "#e8ff47",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    paddingTop: "0.15rem",
  },
  conteudoDescricao: {
    fontSize: "0.8rem",
    color: "#888",
    lineHeight: "1.6",
  },
};

export default styles;
