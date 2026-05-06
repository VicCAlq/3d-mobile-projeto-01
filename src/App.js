import { StatusBar } from 'expo-status-bar';
import { styles } from './components/styles/main';
import { Text, View } from 'react-native';
import Exemplo from './components/Exemplo';
import Cabecalho from './components/Cabecalho';
import { useState } from 'react';

export default function App() {

  const [conteudo, setConteudo] = useState(
    <Text style={styles.texto}>
      Sou o conteúdo inicial
    </Text>
  );

  return (
    <View style={styles.container}>

      <Cabecalho
        paginaInicial={
          <View>

            <Text style={styles.texto}>Escolha um integrante:</Text>

            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <Text style={styles.texto}>
                    Maria Eduarda: código dela aqui.
                  </Text>
                )
              }
            >
              Maria Eduarda
            </Text>

            {/* MARIA FERNANDA */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <Text style={styles.texto}>
                    Maria Fernanda: código dela aqui.
                  </Text>
                )
              }
            >
              Maria Fernanda
            </Text>

            {/* KEVEN */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <View>

                    <Text style={styles.textoBloco}>
                      Mais fácil:
                    </Text>

                    <Text style={styles.textoBloco}>
                      Questão 2
                    </Text>

                    <Text style={styles.textoBloco}>
                      Dado o array numeros = [10, 20, 30, 40, 50], acesse o último elemento e armazene na variável resposta02.
                    </Text>

                    <Text style={styles.textoBloco}>
                      const numeros = [10, 20, 30, 40, 50];
                    </Text>

                    <Text style={styles.textoBloco}>
                      
                    </Text>

                    <Text style={styles.textoBloco}>
                     
                      Mais difícil:
                    </Text>

                    <Text style={styles.textoBloco}>
                      Questão 4
                    </Text>

                    <Text style={styles.textoBloco}>
                      Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma palavra como argumento e retorna uma lista contendo apenas os trava-línguas que possuem aquela palavra.
                    </Text>

                    <Text style={styles.textoBloco}>
                      Não ajudou a entender nada:
                    </Text>

                    <Text style={styles.textoBloco}>
                      /* Questão 7
Seguindo com a lista criada na questão 7, utilizando os índices de cada item,
avance eles em uma posição (e mande o último item para a primeira posição),
de modo que a lista se torne 1, 7, 2, 4, 9, 8, 6. Armazene a lista na
variável "resposta07"
                    </Text>

                    <Text style={styles.textoBloco}>
                      Ajudou a entender tudo:
                    </Text>

                    <Text style={styles.textoBloco}>
/* Questão 7
Crie três listas vazias (usando let e não let), uma chamada "vertebrados", 
outra chamada "invertebrados", e a terceira chamada "animais". Use o método 
push para adicionar na lista de "vertebrados" os animais "elefante", "leopardo" 
e "porco-espinho", e na lista "invertebrados" use o mesmo método para adicionar 
os animais "polvo", "formiga" e "caranguejo". Por fim, use o método concat na 
lista "animais" para juntar o conteúdo das listas "vertebrado" e "invertebrado" 
dentro de si, nesta exata ordem, e retorne esta lista na resposta07.
*/
                    </Text>

                  </View>
                )
              }
            >
              Keven
            </Text>

            {/* LUCAS */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <Text style={styles.texto}>
                    Lucas: código dele aqui.
                  </Text>
                )
              }
            >
              Lucas
            </Text>

          </View>
        }

        sobreEquipe={
          <View>
            <Text style={styles.texto}>Maria Eduarda de Sena Paiva: Main</Text>
            <Text style={styles.texto}>Maria Fernanda Duarte de Farias: Botão</Text>
            <Text style={styles.texto}>Keven Miguel de Santana Silva: App</Text>
            <Text style={styles.texto}>Lucas Caio Ferreira de Sobral: Cabeçalho</Text>
          </View>
        }
        mudarPagina={setConteudo}
      />

      {conteudo}

   <View style={styles.rodape}>
  <Text style={styles.textoRodape}>https://github.com/VicCAlq/3d-mobile-projeto-01.git</Text>
  <Text style={styles.textoRodape}>CRIADO POR: MARIA FERNANDA DUARTE DE FARIAS, MARIA EDUARDA DE SENA PAIVA, LUCAS CAIO FERREIRA DE SOBRAL E KEVEN MIGUEL DE SANTANA SILVA</Text>
</View>

      <StatusBar style="auto" />
    </View>
  );
};