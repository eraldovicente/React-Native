import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Text, Headline, Subheading, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const DetallesCliente = ({route}) => {

     const { nombre, telefono, correo, empresa } = route.params.item;

     const mostrarConfirmacion = () => {
          Alert.alert(
               'Deseas eliminar este cliente?',
               'Un contacto eliminado no se puede recuperar',
               [
                    { text: 'Si, Eliminar', onPress: () => eliminarContacto() },
                    { text: 'Cancelar', style: 'cacel' }
               ]
          )
     }

     const eliminarContacto = () => {
          console.log('eliminando...');
     }

     return ( 
          <View style={globalStyles.contenedor}>
               <Headline style={globalStyles.titulo}>{nombre}</Headline>
               <Text style={styles.texto}>Empresa: <Subheading>{empresa}</Subheading>  </Text>
               <Text style={styles.texto}>Correo: <Subheading>{correo}</Subheading>  </Text>
               <Text style={styles.texto}>Teléfono: <Subheading>{telefono}</Subheading>  </Text>

               <Button 
                    style={styles.boton} 
                    mode="contained" 
                    icon="cancel"
                    onPress={ () => mostrarConfirmacion() }
               >
                    Eliminar Cliente
               </Button>
          </View>
      );
}
const styles = StyleSheet.create({
     texto: {
          marginBottom: 20,
          fontSize: 18
     },
     boton: {
          marginTop: 100,
          backgroundColor: 'red'
     }
})
 
export default DetallesCliente;