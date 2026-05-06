import { View, Text, Image, Pressable } from "react-native";
import { estilosBotao } from "../styles/main";

export default function Botao({ nome, foto, onPress, selecionado }) {
  return (
    <Pressable
      style={[estilosBotao.botao, selecionado && estilosBotao.botaoSelecionado]}
      onPress={onPress}
    >
      <Image
        source={foto}
       style={estilosBotao.foto}
      />
      <Text
        style={[estilosBotao.nome, selecionado && estilosBotao.nomeSelecionado]}
      >
        {nome}
      </Text>
    </Pressable>
  );
}
