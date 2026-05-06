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
  );

  return (
    <View style={styles.container}>

      <Cabecalho
        paginaInicial={
          <View>

            <Text style={styles.texto}>Escolha um integrante:</Text>

            {/* Ariadne */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
                <View>
                    <Text style={styles.textoBloco}><b>Mais fácil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Mais difícil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
                    <Text style={styles.textoBloco}>
                      Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma palavra como argumento e retorna uma lista contendo apenas os trava-línguas que possuem aquela palavra.
                    </Text>
                    <Text style={styles.textoBloco}>
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>
                     <Text style={styles.textoBloco}><b>Ajudou a entender:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Não ajudou a entnder:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
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
              Ariadne
            </Text>

            {/* Davi */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo( 
                <View>
                    <Text style={styles.textoBloco}><b>Mais fácil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Mais difícil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
                    <Text style={styles.textoBloco}>
                      Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma palavra como argumento e retorna uma lista contendo apenas os trava-línguas que possuem aquela palavra.
                    </Text>
                    <Text style={styles.textoBloco}>
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>
                     <Text style={styles.textoBloco}><b>Ajudou a entender:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Não ajudou a entnder:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
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
              Davi
            </Text>

            {/* Enzo */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
              <View>
                    <Text style={styles.textoBloco}><b>Mais fácil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Mais difícil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
                    <Text style={styles.textoBloco}>
                      Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma palavra como argumento e retorna uma lista contendo apenas os trava-línguas que possuem aquela palavra.
                    </Text>
                    <Text style={styles.textoBloco}>
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>
                     <Text style={styles.textoBloco}><b>Ajudou a entender:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Não ajudou a entnder:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
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
              Enzo
            </Text>

            {/* Hattus */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
               <View>
                    <Text style={styles.textoBloco}><b>Mais fácil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Mais difícil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
                    <Text style={styles.textoBloco}>
                      Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma palavra como argumento e retorna uma lista contendo apenas os trava-línguas que possuem aquela palavra.
                    </Text>
                    <Text style={styles.textoBloco}>
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>
                     <Text style={styles.textoBloco}><b>Ajudou a entender:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Não ajudou a entnder:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
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
              Hattus
            </Text>

            {/* Ricardo */}
            <Text
              style={styles.botaoExemplo}
              onPress={() =>
                setConteudo(
             <View>
                    <Text style={styles.textoBloco}><b>Mais fácil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Mais difícil:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
                    <Text style={styles.textoBloco}>
                      Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma palavra como argumento e retorna uma lista contendo apenas os trava-línguas que possuem aquela palavra.
                    </Text>
                    <Text style={styles.textoBloco}>
                      Dica: use while, .includes() e adicione os que atenderem à condição.
                    </Text>
                     <Text style={styles.textoBloco}><b>Ajudou a entender:</b></Text>
                    <Text style={styles.textoBloco}>Questão 6</Text>
                    <Text style={styles.textoBloco}>
                      Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
                    </Text>
                    <Text style={styles.textoBloco}>
                       const resposta06 = profissoesAtualizada
                    </Text>

                    <Text style={styles.textoBloco}><b>Não ajudou a entnder:</b></Text>
                    <Text style={styles.textoBloco}>Questão 4</Text>
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
              Ricardo
            </Text>

          </View>
        }

        sobreEquipe={
          <View>
            <Text style={styles.texto}>Ariadne Maciel Feitosa da Silva: Main</Text>
            <Text style={styles.texto}>Davi Gabriel Rabello Batista: Botão</Text>
            <Text style={styles.texto}>Enzo de Almeida Bandeira: App</Text>
            <Text style={styles.texto}>Hattus Eduardo: Cabeçalho</Text>
            <Text style={styles.texto}>Ricardo: Cabeçalho</Text>
          </View>
        }

        mudarPagina={setConteudo}
      />

      {/* CONTEÚDO */}
      {conteudo}

      <StatusBar style="auto" />
    </View>
  );
}
