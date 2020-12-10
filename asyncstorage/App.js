import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import AsynStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [ inputTexto, guardarInputTexto ] = useState('');

  const guardarDatos = async () => {
    try {
      await AsynStorage.setItem('nombre', inputTexto)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <> 
      <View style={styles.contenedor}>
        <TextInput style={styles.input} 
          placeholder='Escribe tu Nombre'
          style={styles.input}
          onChangeText={ texto => guardarInputTexto(texto) }
        />

        <Button 
          title='Guardar'
          color='#333'
          onPress={ () => guardarDatos() }
        />

        <TouchableHighlight style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10
  },
  textoEliminar: {
     color: 'white',
     fontWeight: 'bold',
     textAlign: 'center',
     textTransform: 'uppercase',
     width: 250
  }
});

export default App;
