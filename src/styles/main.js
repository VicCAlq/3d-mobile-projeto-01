import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({
  exemplo: {
    display: 'flex',
  },
  texto: {
    color: '#ddd',
    fontFamily: 'sans',
  },
  botaoExemplo: {
    backgroundColor: '#788ce5ff',
    color: '#cdd',
    borderRadius: '10px',
    border: '0px solid #252730',
    cursor: 'pointer',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px',
  },
  container: {
    flex: 1,
    backgroundColor: '#151517',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderWidth: 2,
    borderColor: '#48a',
    borderRadius: 10,
    padding: 16,
    margin: 10,
    width: 800,
    alignSelf: 'center',
  },
  cardTitulo: {
    color: '#ddd',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardCodigo: {
    color: '#05a425be',
    fontFamily: 'monospace',
    fontSize: 12,
  },
  conteudo: {
    padding: 24,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  conteudoTitulo: {
    color: '#48a',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#48a',
    paddingBottom: 8,
  },
  conteudoMembro: {
    backgroundColor: '#1a1a1a',
    borderLeftWidth: 4,
    borderLeftColor: '#48a',
    padding: 14,
    marginBottom: 12,
    borderRadius: 6,
    flexDirection: 'row',
    gap: 1,
  },
  conteudoNome: {
    color: '#48a',
    fontWeight: 'bold',
    minWidth: 45,
    fontSize: 17
  },
  conteudoDescricao: {
    color: '#08f67f',
    fontSize: 17,
        flex: 1,
        textAlign: 'left'
  },
});
 
export const estilosBotao = StyleSheet.create({
  botao: {
    backgroundColor: '#111',
    borderWidth: 2,
    borderColor: '#48a',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    gap: 6,
  },
  botaoSelecionado: {
    backgroundColor: '#246',
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#48a',
  },
  nome: {
    color: '#ddd',
    fontSize: 12,
  },
  nomeSelecionado: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
 
export const estilosRodape = StyleSheet.create({
  rodape: {
    backgroundColor: '#333',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 4,
    borderTopWidth: 2,
    borderTopColor: '#48a',
  },
  link: {
    color: '#48a',
    fontSize: 13,
    textDecorationLine: 'underline',
    cursor: 'pointer',
  },
  texto: {
    color: '#ddd',
    fontSize: 12,
  },
});