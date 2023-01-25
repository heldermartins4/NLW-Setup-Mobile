import React from "react"

import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable,
  StatusBar
} from 'react-native';

import { useFonts } from "expo-font";

import { Loading } from "./src/components/Loading";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black' : require('./src/assets/fonts/Inter/static/Inter-Black.ttf')
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Text style={{color: '#414141'}}>It's a better place to living.</Text>
      <StatusBar barStyle='light-content' backgroundColor='transparent'  translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09090A'
  },
  text: {
    color: '#fff',
    fontFamily: 'Inter-Black'
  }
});
