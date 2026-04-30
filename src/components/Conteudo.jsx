import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/main';
import { equipe } from '../data';

export default function Conteudo() {
  return (
    <ScrollView contentContainerStyle={styles.conteudoEquipe}>
      {equipe.map((membro) => (
        <View key={membro.id} style={styles.itemEquipe}>
          <Text style={styles.nomeMembro}>{membro.nome}</Text>
          <Text style={styles.contribuicao}>{membro.contribuicao}</Text>
        </View>
      ))}
    </ScrollView>
  );
}