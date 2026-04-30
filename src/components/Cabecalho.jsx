import { View, Pressable, Text } from 'react-native';
import styles from '../styles/main';

export default function Cabecalho({ onNavigate, paginaAtiva }) {
  return (
    <View style={styles.cabecalho}>
      <Pressable
        style={[
          styles.botaoCabecalho,
          paginaAtiva === 'principal'
            ? styles.botaoCabecalhoAtivo
            : styles.botaoCabecalhoInativo,
        ]}
        onPress={() => onNavigate('principal')}
      >
        <Text style={styles.textoCabecalho}>Página principal</Text>
      </Pressable>

      <Pressable
        style={[
          styles.botaoCabecalho,
          paginaAtiva === 'sobre'
            ? styles.botaoCabecalhoAtivo
            : styles.botaoCabecalhoInativo,
        ]}
        onPress={() => onNavigate('sobre')}
      >
        <Text style={styles.textoCabecalho}>Sobre a equipe</Text>
      </Pressable>
    </View>
  );
}