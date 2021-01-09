import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, Text, Button, H1, Input, Form, Item, Toast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

const CrearCuenta = () => {
     // State del formulario
     const [nombre, guardarNombre] = useState('');
     const [email, guardarEmail] = useState('');
     const [password, guardarPassword] = useState('');

     const [mensaje, guardarMensaje] = useState(null);

     // React navigation
     const navigation = useNavigation();

     // Cuando el usuario presiona en crear cuenta
     const handleSubmit = () => {
          // validar
          if (nombre === '' || email === '' || password === '') {
               // Mostrar un error
               guardarMensaje('Todos los campos son obligatorios');
               return;
          }

          // password al menos 6 caracteres
          if(password.length < 6) {
               guardarMensaje('El password debe ser de al menos 6 caracteres');
               return; 
          }

          // guardar el usuario
     }

     // muestra um mensaje toast
     const mostrarAlerta = () => {
          Toast.show({
               text: mensaje,
               buttonText: 'OK',
               duration: 5000
          })
     }

     return ( 
          <Container style={ [globalStyles.contenedor, { backgroundColor: '#e84347' }] }>
               <View style={globalStyles.contenido}>
                    <H1 style={globalStyles.titulo}>UpTask</H1>

                    <Form>
                         <Item inlineLabel last style={globalStyles.input}>
                              <Input
                                   placeholder="Nome"
                                   onChangeText={ texto => guardarNombre(texto) }
                              />
                         </Item>
                         <Item inlineLabel last style={globalStyles.input}>
                              <Input
                                   placeholder="Email"
                                   onChangeText={ texto => guardarEmail(texto) }
                              />
                         </Item>
                         <Item inlineLabel last style={globalStyles.input}>
                              <Input
                                   secureTextEntry={true}
                                   placeholder="Password"
                                   onChangeText={ texto => guardarPassword(texto) }
                              />
                         </Item>
                    </Form>

                    <Button
                         square
                         block
                         style={globalStyles.boton}
                         onPress={ () => handleSubmit() }
                    >
                         <Text
                              style={globalStyles.botonTexto}
                         >Crear Cuenta</Text>
                    </Button>

                    {mensaje && mostrarAlerta()}
               </View>
          </Container>
      );
}
 
export default CrearCuenta;