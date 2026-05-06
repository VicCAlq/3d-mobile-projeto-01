import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Pressable, Text } from 'react-native'


const estilosCabecalho = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#8CB4C7',
    marginBottom: "20px",
    marginTop: "0px",
    display: 'flex',
    width: '100vw',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoCabecalho: {
    backgroundColor: "#111",
    color: "white",
    padding: '10px',
    borderRadius: '10px',
    margin: '10px',
  },
  botaoCabecalhoSelecionado: {
    backgroundColor: "#627d8b",
  }


})


export default function Cabecalho({
  paginaInicial, sobreEquipe, mudarPagina
}) {
  const [selecionado, setSelecionado] = useState("principal")


  return(<View style={estilosCabecalho.cabecalho}>
    <Pressable
      style={() => [
        estilosCabecalho.botaoCabecalho,
        {
          backgroundColor: selecionado === "principal"
          ? "#627d8b"
          : "#8CB4C7"
        }
      ]}
      onPress={() => {
        mudarPagina(paginaInicial)
        setSelecionado("principal")
      }}
    >
      PÁGINA PRINCIPAL
    </Pressable>
    <Pressable
      style={() => [
        estilosCabecalho.botaoCabecalho,
        {
          backgroundColor: selecionado === "sobreEquipe"
          ? "#627d8b"
          : "#8CB4C7"
        }
      ]}
      onPress={() => {
        mudarPagina(sobreEquipe)
        setSelecionado("sobreEquipe")
      }}
    >
      SOBRE A EQUIPE
    </Pressable>
  </View>)
}
