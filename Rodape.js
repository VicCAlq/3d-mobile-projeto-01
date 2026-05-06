import { View, Text } from 'react-native';
import { styles } from '../styles/main';


export default function Rodape() {
  return (
    <View style={styles.rodape}>
      <Text style={styles.textoRodape}>
        https://github.com/VicCAlq/3d-mobile-projeto-01.git
      </Text>
      <Text style={styles.textoRodape}>
        Criado por: Maria Fernanda, Maria Eduarda, Lucas e Keven
      </Text>
    </View>
  );
}

