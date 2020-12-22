import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

     // campos formulario
     const [ nombre, guardarNombre ] = useState('');
     const [ telefono, guardarTelefono ] = useState('');
     const [ correo, guardarCorreo ] = useState('');
     const [ empresa, guardarEmpresa ] = useState('');

     return ( 
          <View style={globalStyles.contenedor}>
               <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

               <TextInput
                    label="Nombre"
                    placeholder="Eraldo"
                    onChangeText={ texto => guardarNombre(texto) }
                    value={nombre}
                    style={styles.input}
               />
               <TextInput
                    label="Teléfono"
                    placeholder="6969696969"
                    onChangeText={ texto => guardarTelefono(texto) }
                    value={telefono}
                    style={styles.input}
               />
               <TextInput
                    label="Correo"
                    placeholder="correo@correo.com"
                    onChangeText={ texto => guardarCorreo(texto) }
                    value={correo}
                    style={styles.input}
               />
               <TextInput
                    label="Empresa"
                    placeholder="Nombre Empresa"
                    onChangeText={ texto => guardarEmpresa(texto) }
                    value={empresa}
                    style={styles.input}
               />               
          </View>
     );
}

const styles = StyleSheet.create({
     input: {
          marginBottom: 20,
          backgroundColor: 'transparent'
     }
})

export default NuevoCliente;