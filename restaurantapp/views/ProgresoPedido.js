import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Text, H1, H3, Button} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../context/pedidos/pedidosContext';
import firebase from '../firebase';

const ProgresoPedido = () => {

     const { idpedido } = useContext(PedidoContext);

     const [ tiempo, guardarTiempo ] = useState(0);

     useEffect(() => {
          const obtenerProducto = () => {
               firebase.db.collection('ordenes')
                    .doc(idpedido)
                    .onSnapshot(function(doc) {
                         guardarTiempo(doc.data().tiempoentrega);
                    })
          }
          obtenerProducto()
     }, []);

     return ( 
          <Text>{tiempo}</Text> 
      );
}
 
export default ProgresoPedido;