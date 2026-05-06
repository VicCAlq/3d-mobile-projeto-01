import styles from "../styles/main";

export default function Rodape() {
  return (
    <footer style={styles.rodape}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
        <a href="https://github.com/VicCAlq/3d-mobile-projeto-01/tree/Tulio-Alexsandro-Italo-PhilippeGeoffroy-Caroliny" target="_blank" rel="noopener noreferrer" style={styles.rodapeLink}>
          ↗ Repositório do Git
        </a>
        <p style={{ ...styles.rodapeTexto, fontSize: "0.65rem", margin: 0 }}>
          Powered by: Anderson Túlio, Ítalo Luiz, Júia Caroliny, João Philippe e Pedro Alexsandro.
        </p>
      </div>
    </footer>
  );
}