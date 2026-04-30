import { View } from 'react-native';
import styles from '../styles/main';

export default function Menu({ children }) {
  return <View style={styles.menu}>{children}</View>;
}