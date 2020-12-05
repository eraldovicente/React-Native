import React from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';


const App = () => {
  return (
      <ScrollView>
        <Header />

        <View style={styles.contenido }>

          <Image
            style={styles.imagen}
            source={ require('./assets/img/cryptomonedas.png') }
          />

          <Formulario />

        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
