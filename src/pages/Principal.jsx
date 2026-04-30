import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Menu from '../components/Menu';
import Botao from '../components/Botao';
import Card from '../components/Card';
import { equipe } from '../data';

export default function Principal() {
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  return (
    <ScrollView>
      <Menu>
        {equipe.map((aluno) => (
          <Botao
            key={aluno.id}
            nome={aluno.nome}
            foto={aluno.foto}
            onPress={() => setAlunoSelecionado(aluno)}
            selecionado={alunoSelecionado?.id === aluno.id}
          />
        ))}
      </Menu>

      {!alunoSelecionado && (
        <Text style={{ color: '#ccc', textAlign: 'center', marginTop: 20 }}>
          Clique em um aluno para ver seus códigos eleitos.
        </Text>
      )}

      {alunoSelecionado &&
        alunoSelecionado.codigos.map((codigo, index) => (
          <Card key={index} codigo={codigo} />
        ))}
    </ScrollView>
  );
}