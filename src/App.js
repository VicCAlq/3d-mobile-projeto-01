import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from '3d-mobile-projeto-01/src/components/Cabecalho.jsx';
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

            {/* CARLOS BENJAMIN */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <Text style={styles.texto}>
                    Carlos Benjamin: código dele aqui.
                  </Text>
                )
              }
            >
              Carlos Benjamin
            </Text>

            <Text style={styles.texto}>Escolha um integrante:</Text>

            {/* CHRISTIAN */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <View>

                    <Text style={styles.textoBloco}>
                      Mais fácil:
                    </Text>

                    <Text style={styles.textoBloco}>
                      Questão 1
                    </Text>

                    <Text style={styles.textoBloco}>
                      
                      export const resposta01 = false
"let soma1 = 0
let i1 = 1

while (i1 igual 32) (
  soma1 += i1
  i1++
)";

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
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>

                  </View>
                )
              }
            >
              Christian
            </Text>

            {/* THIAGO */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <View>

                    <Text style={styles.textoBloco}>
                      Mais fácil:
                    </Text>

                    <Text style={styles.textoBloco}>
                      Questão 1
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
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>

                  </View>
                )
              }
            >
              Thiago
            </Text>

            {/* JASON */}
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
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>

                  </View>
                )
              }
            >
              Jason
            </Text>

            {/* PEDRO HENRIQUE */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                  <Text style={styles.texto}>
                    Pedro Henrique: código dele aqui.
                  </Text>
                )
              }
            >
              Pedro Henrique
            </Text>

          </View>
        }

        sobreEquipe={
          <View>
            <Text style={styles.texto}>Thiago Guilherme Maia Medeiros: Main</Text>
            <Text style={styles.texto}>Carlos Benjamin Brito Silva: Botão</Text>
            <Text style={styles.texto}>Jason Ferreira Nascimento: App</Text>
            <Text style={styles.texto}>Pedro Henrique Ferreira Barbosa: Cabeçalho</Text>
          </View>
        }
        mudarPagina={setConteudo}
      />

      {conteudo}

   <View style={styles.rodape}>
  <Text style={styles.textoRodape}>https://github.com/VicCAlq/3d-mobile-projeto-01.git</Text>
  <Text style={styles.textoRodape}>CRIADO POR: Thiago Guilherme Maia Medeiros,Carlos Benjamin Brito Silva,Jason Ferreira Nascimento,Pedro Henrique Ferreira Barbosa, Christian Leandro</Text>
</View>

      <StatusBar style="auto" />
    </View>
  );
}