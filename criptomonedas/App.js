import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';


const App = () => {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI ] = useState(false);

  return (
      <>
        <Header />

        <View style={styles.contenido }>

          <Image
            style={styles.imagen}
            source={ require('./assets/img/cryptomonedas.png') }
          />

          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarMoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />

        </View>
      </>
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
