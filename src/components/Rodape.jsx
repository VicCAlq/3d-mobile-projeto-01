import styles from "../styles/main";

export default function Rodape() {
  return (
    <footer style={styles.rodape}>
      <a
        href="https://github.com/VicCAlq/3d-mobile-projeto-01/tree/JoseDamascena-Ziv-GuilhermeMonteiro-Cassiano-William"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.rodapeLink}
      >
        ↗ GitHub
      </a>
      <p style={styles.rodapeTexto}>
        Desenvolvido por Time 3: Cassiano J., José Damascena, Guilherme M., William V., Ziv Coutinho.
      </p>
    </footer>
  );
}
