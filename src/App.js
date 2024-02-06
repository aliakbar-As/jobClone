import React from 'react';
import { View, StatusBar } from 'react-native';
import Home from './components/screens/DreamJob/home/Home';
import Detail from './components/screens/DreamJob/detail/Detail';
import Info from './components/screens/DreamJob/info/Info';



export default App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Info />
    </View>
  );
};


const styles = {
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
};
