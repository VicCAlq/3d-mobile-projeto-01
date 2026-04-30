import { View, Text, Linking } from 'react-native';
import styles from '../styles/main';

export default function Rodape() {
  return (
    <View style={styles.rodape}>
      <Text
        style={styles.linkRodape}
        onPress={() => Linking.openURL('https://github.com/seu-repositorio')}
      >
        Repositório no GitHub
      </Text>
      <Text style={styles.textoRodape}>
        Criado por: Pedro Henrique Ferreira Barbosa, Jason Ferreira Nascimente,
        Christian Leandro Moura Lemos de Barros, Thiago Guilherme Maia Mederos.
      </Text>
    </View>
  );
}