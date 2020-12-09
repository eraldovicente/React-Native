import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, Animated } from 'react-native';

const Animacion5 = () => {

     const [ animacion ] = useState( new Animated.Value(1));

     const presionarBtn = () => {
          Animated.spring( animacion, {
               toValue: .8
          } ).start();
     }

     const soltarBtn = () => {

     }

     const estiloAnimacion = {
          transform: [{ scale: animacion }]
     }

     return ( 
          <View style={styles.contenedor}>
               <TouchableNativeFeedback
                    onPressIn={ () => presionarBtn() }
                    onPressOut={ () => soltarBtn() }
               >
                    <Animated.View style={[ styles.btn, estiloAnimacion ]}>
                         <Text
                              style={styles.texto}>Iniciar Sesión</Text>
                    </Animated.View>
               </TouchableNativeFeedback>
          </View>
      );
}

const styles = StyleSheet.create({
     contenedor: { 
          alignItems: 'center'
     },
     btn: {
          backgroundColor: 'cornflowerblue',
          width: 280,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center'
     },
     texto: {
          color: '#FFF',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: 28
     }
});
 
export default Animacion5;