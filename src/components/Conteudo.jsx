import { View, Text } from 'react-native'
import { styles } from '../styles/main'

export default function Conteudo() {
  const membros = [
    { nome: "Alan",descricao: "Card e Arrumei uns Bugs loucos, coloquei imagens tbm" },
    { nome: "Lucas Ruan",descricao: "Botão e Descrição"},
    { nome: "Gabriel",descricao: "Menu"},
    { nome: "João Guilherme",descricao: "Rodape"},
    { nome: "Diego",descricao: "Conteudo dessa Página"},
  ]

  return (
    <View style={styles.conteudo}>
      <Text style={styles.conteudoTitulo}>Sobre a Equipe</Text>
      {membros.map((membro) => (
        <View key={membro.nome} style={styles.conteudoMembro}>
          <Text style={styles.conteudoNome}>■ {membro.nome}:</Text>
          <Text style={styles.conteudoDescricao}>{membro.descricao}</Text>
        </View>
      ))}
    </View>
  )
}
