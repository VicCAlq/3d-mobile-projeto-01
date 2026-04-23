import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Exemplo from './components/Exemplo';
import Cabecalho from './components/Cabecalho';
import { useState } from 'react';

export default function App() {

  const [conteudo, setConteudo] = useState(
    <Text style={styles.texto}>
      Sou o conteúdo inicial
    </Text>
  )

  return (
    <View style={styles.container}>
      <Cabecalho
        paginaInicial={
          <Text style={styles.texto}>
            Em construção: Página inicial
          </Text>
        }
        sobreEquipe={
          <Text style={styles.texto}>
            Em construção: Página da equipe
          </Text>
        }
        mudarPagina={setConteudo}
      ></Cabecalho>
      {conteudo}
      <StatusBar style="auto" />
    </View>
  );
}
