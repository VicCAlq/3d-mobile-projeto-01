import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text } from 'react-native'

const estilosCabecalho = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#333",
    height: "70px",
    width: "100vw",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px auto",
  },
  botaoCabecalho: {
    backgroundColor: "#111",
    color: "#ddd",
    border: "2px solid #48a",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
  },
  botaoCabecalhoSelecionado: {
    backgroundColor: "#246",
  }
})

export default function Cabecalho({ mudarPagina }) {
  const [selecionado, setSelecionado] = useState("principal")

  return (
    <View style={estilosCabecalho.cabecalho}>
      <Pressable
        style={() => [
          estilosCabecalho.botaoCabecalho,
          { backgroundColor: selecionado === "principal" ? "#246" : "#111" }
        ]}
        onPress={() => {
          mudarPagina("principal")
          setSelecionado("principal")
        }}
      >
        <Text style={{ color: "#ddd" }}>Principal</Text>
      </Pressable>
      <Pressable
        style={() => [
          estilosCabecalho.botaoCabecalho,
          { backgroundColor: selecionado === "sobreEquipe" ? "#246" : "#111" }
        ]}
        onPress={() => {
          mudarPagina("sobreEquipe")
          setSelecionado("sobreEquipe")
        }}
      >
        <Text style={{ color: "#ddd" }}>Sobre a Equipe</Text>
      </Pressable>
    </View>
  )
}
