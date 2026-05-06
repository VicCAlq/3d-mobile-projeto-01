import { View, Text } from 'react-native'
import { styles } from '../styles/main'

export default function Card({ titulo, tipo, codigo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardCodigo}>{codigo}</Text>
    </View>
  )
}