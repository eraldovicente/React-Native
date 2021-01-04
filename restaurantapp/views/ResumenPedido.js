import React, { useContext, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import {
     Container,
     Content,
     List,
     ListItem,
     Thumbnail,
     Text,
     Left,
     Body,
     Button,
     H1,
     Footer,
     FooterTab
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';

const ResumenPedido = () => {

     // context de pedido
     const { pedido, total, mostrarResumen } =  useContext(PedidoContext);
     console.log(pedido);

     useEffect(() => {          
         calcularTotal(); 
     }, [pedido]);

     const calcularTotal = () => {
          let nuevoTotal = 0;
          nuevoTotal = pedido.reduce( (nuevoTotal, articulo) => nuevoTotal + articulo.total, 0);

          mostrarResumen(nuevoTotal);
     }

     return ( 
          <Container style={globalStyles.contenedor}>
               <Content style={globalStyles.contenido}>
                    <H1 style={globalStyles.titulo}>Resumen Pedido</H1>
                    {pedido.map( (platillo, i) => {
                         const { cantidad, nombre, imagen, id, precio } = platillo;
                         return(
                              <List key={id + i}>
                                   <ListItem thumbnail>
                                        <Left>
                                             <Thumbnail large square source={{ uri: imagen}} />
                                        </Left>

                                        <Body>
                                             <Text>{nombre}</Text>
                                             <Text>Cantidad: {cantidad}</Text>
                                             <Text>Precio: R$ {precio}</Text>
                                        </Body>
                                   </ListItem>
                              </List>
                         )
                    })}

                    <Text style={globalStyles.cantidad}>Total a pagar: R$ {total}</Text>
               </Content>
          </Container>
      );
}
 
export default ResumenPedido;