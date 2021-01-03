import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
     Container,
     Content,
     Form,
     Icon,
     Input,
     Grid,
     Col,
     Button,
     Text
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = () => {

     // State para cantidades
     const [ cantidad, guardarCantidad ] = useState(1);

     // Decrementa en uno
     const decrementarUno = () => {
          if (cantidad > 1) {
               const nuevaCantidad = parseInt(cantidad) - 1;
               guardarCantidad(nuevaCantidad);
          }
     }

     // incrementa en uno la cantidad
     const incrementarUno = () => {
          const nuevaCantidad = parseInt(cantidad) + 1;
          guardarCantidad(nuevaCantidad); 
     }

     return ( 
          <Container>
               <Content>
                    <Form>
                         <Text style={globalStyles.titulo}>Cantidad</Text>
                         <Grid
                              style={{ alignItems: 'center'}}
                         >
                              <Col>
                                   <Button
                                        props
                                        dark
                                        style={{ height: 80, width: '100%', justifyContent: 'center' }}
                                        onPress={ () => decrementarUno() }
                                   >
                                        <Icon style={{ fontSize: 40 }} name="remove" />
                                   </Button>
                              </Col>
                              <Col>
                                   <Input
                                        style={{ textAlign: 'center', fontSize: 20 }}
                                        value={cantidad.toString()}
                                        keyboardType="numeric"
                                        onChangeText={ cantidad => guardarCantidad(cantidad)}
                                   />
                              </Col>
                              <Col>
                                   <Button
                                        props
                                        dark
                                        style={{ height: 80, width: '100%', justifyContent: 'center' }}
                                        onPress={ () => incrementarUno() }
                                   >
                                        <Icon style={{ fontSize: 40 }} name="add" />
                                   </Button>
                              </Col>
                         </Grid>
                    </Form>
               </Content>
          </Container>
      );
}
 
export default FormularioPlatillo;