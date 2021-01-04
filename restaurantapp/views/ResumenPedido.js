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

     const navigation = useNavigation();

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

     // Redireciona a progreso pedido
     const progresoPedido = () => {
          Alert.alert(
               'Revisa tu pedido',
               'Una vez que realizas tu pedido, no podrás cambiarlo',
               [
                    {
                         text: 'Confirmar',
                         onPress: () => {
                              navigation.navigate('ProgresoPedido')
                         }
                    },
                    { text: 'Revisar', style: 'cancel'}
               ]
          )
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

                    <Button                         
                         onPress={ () => navigation.navigate('Menu') }
                         style={{marginVertical: 40}}   
                         full    
                         dark                  
                    >
                         <Text style={[globalStyles.botonTexto, {color: '#FFF'}]}>Seguir Pediendo</Text>
                    </Button>
               </Content>

               <Footer>
                    <FooterTab>
                         <Button                         
                              onPress={ () => progresoPedido() }
                              style={[globalStyles.boton]}               
                         >
                              <Text style={globalStyles.botonTexto}>Ordenar Pedido</Text>
                         </Button>
                    </FooterTab>
               </Footer>

          </Container>
      );
}
 
export default ResumenPedido;