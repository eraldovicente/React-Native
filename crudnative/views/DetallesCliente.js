import React from 'react';
import { Text } from 'react-native';

const DetallesCliente = ({route}) => {

     console.log(route.params);
     return ( 
          <Text>Desde DetallesCliente</Text>
      );
}
 
export default DetallesCliente;