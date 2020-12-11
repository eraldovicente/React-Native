import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Nosotros = ({navigation}) => {

     const volver = () => {
          navigation.navigate('Inicio');
          // navigation.goBack();
          // navigation.push('Inicio');
     }

     return ( 
          <View style={styles.contenedor}>
               <Text>Nosotros</Text>
               <Button
                    title='Volver'
                    onPress={ () => volver() }
               />
          </View>
      );
}

const styles = StyleSheet.create({
     contenedor: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
     }
});
 
export default Nosotros;