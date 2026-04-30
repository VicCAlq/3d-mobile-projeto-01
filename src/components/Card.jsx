import { View, Text } from 'react-native';
import styles from '../styles/main';

export default function Card({ codigo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.codigoTexto}>{codigo}</Text>
    </View>
  );
}