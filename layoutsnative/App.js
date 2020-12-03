import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const App = () => {
  return (
    <>
      <View style={{ flexDirection: 'row' }}>

        <Image
          style={styles.banner}
          source={require('./assets/img/bg.jpg')}
        />

      </View> 
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  }
});

export default App;
