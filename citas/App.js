import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const App = () => {

  //definir el state de citas
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: "Eraldo", sintomas: "No dorme"},
    { id: "2", paciente: "Redux", propietario: "Eraldo", sintomas: "No come"},
    { id: "3", paciente: "Native", propietario: "Eraldo", sintomas: "No bebe"},
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <FlatList
        data={citas}
        renderItem={ ({item}) => (
          <View>
           <Text>{item.paciente}</Text>
          </View>
        )}
        keyExtractor={ cita => cita.id }
      />

      {/* {citas.map(cita => (
        <View>
          <Text>{cita.paciente}</Text>
        </View>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
