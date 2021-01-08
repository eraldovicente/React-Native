import React from 'react';
import { View } from 'react-native';
import { Container, Text, Button, H1, Input, Form, Item } from 'native-base';
import globalStyles from '../styles/global';

const Login = () => {
     return ( 
          <Container style={ [globalStyles.contenedor, { backgroundColor: '#e84347' }] }>
               <View style={globalStyles.contenido}>
                    <H1 style={globalStyles.titulo}>UpTask</H1>

                    <Form>
                         <Item inlineLabel last style={globalStyles.input}>
                              <Input
                                   autoCompleteType="email"
                                   placeholder="Email"
                              />
                         </Item>
                         <Item inlineLabel last style={globalStyles.input}>
                              <Input
                                   secureTextEntry={true}
                                   placeholder="Password"
                              />
                         </Item>
                    </Form>

                    <Button
                         square
                         block
                         style={globalStyles.boton}
                    >
                         <Text
                              style={globalStyles.botonTexto}
                         >Iniciar Sesión</Text>
                    </Button>

                    <Text style={globalStyles.enlace}>Crear Cuenta</Text>
               </View>
          </Container>
      );
}
 
export default Login;