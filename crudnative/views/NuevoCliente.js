import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

     const leerNombre = () => {
          console.log('Escribiendo');
     }

     return ( 
          <View style={globalStyles.contenedor}>
               <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

               <TextInput
                    label="Nombre"
                    placeholder="Eraldo"
                    onChangeText={ () => leerNombre() }
                    style={styles.input}
               />
               <TextInput
                    label="Teléfono"
                    placeholder="6969696969"
                    onChangeText={ () => leerNombre() }
                    style={styles.input}
               />
               <TextInput
                    label="Correo"
                    placeholder="correo@correo.com"
                    onChangeText={ () => leerNombre() }
                    style={styles.input}
               />
               <TextInput
                    label="Empresa"
                    placeholder="Nombre Empresa"
                    onChangeText={ () => leerNombre() }
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