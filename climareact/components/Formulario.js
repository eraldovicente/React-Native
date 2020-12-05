import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Formulario = () => {
     return (  
          <>
               <View style={styles.formulario}>
                    <View>
                         <TextInput 
                              placeholder="Ciudad"
                              placeholderTextColor="#666"
                         />
                    </View>
               </View>
          </>
     );
}

const styles = StyleSheet.create({
     formulario: {
          marginTop: 100
     }
})
 
export default Formulario;