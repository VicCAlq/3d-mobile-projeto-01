import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/main';
import { Text, View, ScrollView } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import { useState } from 'react';
import Menu from './components/Menu';
import Botao from './components/Botao';
import Card from './components/Card';
import Conteudo from './components/Conteudo';
import fotoAlan from '../assets/alan.png'
import fotoLR from '../assets/LucaR.jpg'
import fotoJG from '../assets/JoaoG.jpg'
import fotoDG from '../assets/DG.jpg'
import fotoGL from '../assets/GL.jpg'
 
export default function App() {
 
  const [pagina, setPagina] = useState("principal")
  const [alunoAtivo, setAlunoAtivo] = useState(null)
  const [cardsAtivos, setCardsAtivos] = useState(null)
 
  const cardsAluno = {
    "Alan": (
      <View>
        <Card titulo="Questão fácil" codigo={`/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
export const resposta01 = frutas[1]`} />
        <Card titulo="Questão difícil" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
        <Card titulo="Questão que Ajudou a Entender" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
       <Card titulo="Questão que Ajudou a Entender" codigo={`/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo

// Operações necessárias e resposta a partir da linha abaixo
let profissoes = [];
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)");
export const resposta01 = profissoes;`} />
      </View>
    ),
    "Lucas Ruan": (
      <View>
        <Card titulo="Questão fácil" codigo={`/* Questão 06 */
export let arquivo_principal = true`} />
        <Card titulo="Questão difícil" codigo={`/* Questão 12
Encerrando com a lista de pets exóticos, use um laço de repetição for...of para
encontrar o primeiro nome que começa com a letra "s". Se encontrar, armazene este
nome na variável resposta12. Se não encontrar nenhum, armazene a string "não encontrado".
*/
// Escreva o código da solução abaixo:

let resultado12 = "não encontrado"
for (let pet of petsExoticos) {
  if (pet[0] === "s" && resultado12 === "não encontrado") {
    resultado12 = pet
  }
}
export const resposta12 = resultado12`} />
        <Card titulo="Questão que ajudou a entender" codigo={'/* 06 */ export class AlunoDoNave { constructor() {} } '} />
        <Card titulo="Questão que não ajudou em nada" codigo={'/* 01 */ export let meuNome = "Felizberto Adalberto" '} />
      </View>
    ),
    "Gabriel": (
      <View>
        <Card titulo="Questão fácil" codigo={`/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
export const resposta01 = frutas[1]`} />
        <Card titulo="Questão difícil" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
        <Card titulo="Questão que Ajudou a Entender" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
       <Card titulo="Questão que Ajudou a Entender" codigo={`/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo

// Operações necessárias e resposta a partir da linha abaixo
let profissoes = [];
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)");
export const resposta01 = profissoes;`} />
      </View>
    ),
    "João Guilherme": (
      <View>
        <Card titulo="Questão fácil" codigo={`/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
export const resposta01 = frutas[1]`} />
        <Card titulo="Questão difícil" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
        <Card titulo="Questão que Ajudou a Entender" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
       <Card titulo="Questão que Ajudou a Entender" codigo={`/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo

// Operações necessárias e resposta a partir da linha abaixo
let profissoes = [];
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)");
export const resposta01 = profissoes;`} />
      </View>
    ),
    "Diego": (
    <View>
        <Card titulo="Questão fácil" codigo={`/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
export const resposta01 = frutas[1]`} />
        <Card titulo="Questão difícil" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
        <Card titulo="Questão que Ajudou a Entender" codigo={`function buscarTravaLinguasComPalavra(palavra, travaLinguas) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    } i++;
  } return resultado;
}
export const resposta08 = buscarTravaLinguasComPalavra`} />
       <Card titulo="Questão que Ajudou a Entender" codigo={`/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo

// Operações necessárias e resposta a partir da linha abaixo
let profissoes = [];
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)");
export const resposta01 = profissoes;`} />
      </View>
    ),
  }
 
  const paginaPrincipal = (
    <ScrollView style={{ width: '100%' }}>
      <Menu>
        <Botao
          nome="Alan"
          foto={fotoAlan}
          selecionado={alunoAtivo === "Alan"}
          onPress={() => {
            setAlunoAtivo("Alan")
            setCardsAtivos(cardsAluno["Alan"])
          }}
        />
        <Botao
          nome="Lucas Ruan"
          foto={fotoLR}
          selecionado={alunoAtivo === "Lucas Ruan"}
          onPress={() => {
            setAlunoAtivo("Lucas Ruan")
            setCardsAtivos(cardsAluno["Lucas Ruan"])
          }}
        />
        <Botao
          nome="Gabriel"
          foto={fotoGL}
          selecionado={alunoAtivo === "Gabriel"}
          onPress={() => {
            setAlunoAtivo("Gabriel")
            setCardsAtivos(cardsAluno["Gabriel"])
          }}
        />
        <Botao
          nome="João Guilherme"
          foto={fotoJG}
          selecionado={alunoAtivo === "João Guilherme"}
          onPress={() => {
            setAlunoAtivo("João Guilherme")
            setCardsAtivos(cardsAluno["João Guilherme"])
          }}
        />
        <Botao
          nome="Diego"
          foto={fotoDG}
          selecionado={alunoAtivo === "Diego"}
          onPress={() => {
            setAlunoAtivo("Diego")
            setCardsAtivos(cardsAluno["Diego"])
          }}
        />
      </Menu>
      {cardsAtivos}
    </ScrollView>
  )
 
  return (
    <View style={styles.container}>
      <Cabecalho
        mudarPagina={setPagina}
      />
      {pagina === "principal" ? paginaPrincipal : <Conteudo />}
      <Rodape />
      <StatusBar style="auto" />
    </View>
  );
}
 

