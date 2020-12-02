import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, Platform } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {

  const [mostrarform, guardarMostrarForm] = useState(false);

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

  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <View>
        <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}>Crear Nueva Cita</Text>
        </TouchableHighlight>
      </View>
      
      <View style={styles.contenido}>
        { mostrarform ? (
          <>
            <Text style={styles.titulo}>Crear Nueva Cita</Text>
            <Formulario 
              citas={citas}
              setCitas={setCitas}
              guardarMostrarForm={guardarMostrarForm}
            />
          </>
        ) : (
          <>
            <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
    
            <FlatList
                style={styles.listado}
                data={citas}
                renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} /> }
                keyExtractor={ cita => cita.id }
            />
          </>
        ) }

      </View>

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
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1,

  },
  btnMostrarForm: {
       padding: 10,
       backgroundColor: '#7d024e',
       marginVertical: 40
  },
  textoMostrarForm: {
       color: '#FFF',
       fontWeight: 'bold',
       textAlign: 'center'
  }  
});

export default App;
