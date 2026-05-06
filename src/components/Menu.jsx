import { View } from 'react-native'

export default function Menu({ children }) {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {children}
    </View>
  )
}

