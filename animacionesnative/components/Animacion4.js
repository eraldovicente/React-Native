import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from "react-native";

const Animacion4 = () => {

     const [ animacion ] = useState( new Animated.Value(0) );

     useEffect(() => {
          Animated.timing(
               animacion, {
                    toValue: 360, // al valor al que llega
                    duration: 1000, // cantidad de tiempo en llegar
                    useNativeDriver: true
               }
          ).start(); // inicia la animación
     }, []);

     const interpolacion = animacion.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg']
     });

     const estiloAnimacion = {
          transform: [{ rotate: interpolacion }]
     }

     return ( 
         <View>
              <Animated.View 
                    style={[styles.caja, estiloAnimacion]}
               ></Animated.View>               
         </View>
     );
}

const styles = StyleSheet.create({
     caja: {
          width: 100,
          height: 100,
          backgroundColor: 'cornflowerblue'
     }
});

export default Animacion4;