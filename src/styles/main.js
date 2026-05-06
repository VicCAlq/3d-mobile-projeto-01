import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  exemplo: {
    display: 'flex',
  },
  texto: {
    color: '#000000ff',
    fontFamily: 'sans',
    fontSize: 18,
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
  container:{
    flex: 1,
    backgroundColor: '#caebffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
rodape: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: 12,
  backgroundColor: '#627d8b',
  alignItems: 'center',
  flexDirection: 'column',
},

textoRodape: {
  color: '#fff',
  fontSize: 16,
},

textoBloco: {
  fontSize: 18,
  marginBottom: 10, 
  textAlign: 'left',
  fontFamily: 'sans'
},

});