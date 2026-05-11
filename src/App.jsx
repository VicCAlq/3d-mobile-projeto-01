import { useState } from "react";
import styles from "./styles/main";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import SobreEquipe from "./pages/SobreEquipe";

export default function App() {
  const [pagina, setPagina] = useState("principal");

  return (
    <div style={styles.app}>
      <Cabecalho paginaAtual={pagina} onNavegar={setPagina} />

      {pagina === "principal" && <PaginaPrincipal />}
      {pagina === "sobre" && <SobreEquipe />}

      <Rodape />
    </div>
  );
}
