import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from './componentes/Cita';

const App = () => {

  //definir el state de citas
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: "Eraldo", sintomas: "No dorme"},
    { id: "2", paciente: "Redux", propietario: "Eraldo", sintomas: "No come"},
    { id: "3", paciente: "Native", propietario: "Eraldo", sintomas: "No bebe"},
  ]);

  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
      return citasActuales.filter( cita => cita.id !== id );
    })
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>

      <FlatList
        data={citas}
        renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} /> }
        keyExtractor={ cita => cita.id }
      />

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
    marginBottom: 20,
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
