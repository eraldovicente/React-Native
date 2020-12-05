import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';


const App = () => {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI ] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        // consultar la api para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        console.log(resultado.data.DISPLAY);

        guardarConsultarAPI(false);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

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
            guardarCriptomoneda={guardarCriptomoneda}
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
