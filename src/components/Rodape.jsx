import { View, Text, Linking } from "react-native";
import { estilosRodape } from "../styles/main";

export default function Rodape() {
  return (
    <View style={[estilosRodape.rodape, { marginTop: 'auto' }]}>
      <Text
        style={estilosRodape.link}
        onPress={() => Linking.openURL("https://github.com/VicCAlq/3d-mobile-projeto-01")}
      >
        🔗 Repositório no GitHub
      </Text>
      <Text style={estilosRodape.texto}>
        Criado por: Time2
      </Text>
    </View>
    
  );
}
