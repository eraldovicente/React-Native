import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { List, Headline } from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

const Inicio = () => {

     // state de la app
     const [ clientes, guardarClientes ] = useState([]);

     useEffect(() => {
          const obtenerClientesApi = async () => {
               try {
                    const resultado = await axios.get('http://10.0.0.242:3000/clientes');
                    guardarClientes(resultado.data);
                    console.log(resultado.data);
               } catch (error) {
                    console.log(error);
               }
          }

          obtenerClientesApi();
     }, [])

     return ( 
          <View style={globalStyles.contenedor}>

               <Headline style={globalStyles.titulo}> { clientes.length > 0 ? "Clientes" : "Aún no hay clientes"}</Headline>

               <FlatList
                    data={clientes}
                    keyExtractor={ cliente => (cliente.id).toString() }
                    renderItem={ ({item}) => (
                         <List.Item
                              title={item.nombre}
                              description={item.empresa}
                         />
                    )}
                    
               />
          </View>
      );
}
 
export default Inicio;