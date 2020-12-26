import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import axios from 'axios';

const Inicio = () => {

     // state de la app
     const [ clientes, guardarClientes ] = useState([]);

     useEffect(() => {
          const obtenerClientesApi = async () => {
               try {
                    const resultado = await axios.get('http://10.0.0.242:3000/clientes');
                    guardarClientes(resultado.data);
               } catch (error) {
                    console.log(error);
               }
          }

          obtenerClientesApi();
     }, [])

     return ( 
          <Text>Desde Inicio</Text>
      );
}
 
export default Inicio;