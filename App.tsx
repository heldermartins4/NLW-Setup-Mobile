import React from "react"
import { StatusBar } from "react-native";

import { useFonts } from "expo-font";

import "./src/lib/dayjs"

// Components
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Thin' : require('./src/assets/fonts/Inter/static/Inter-Thin.ttf'),
    'Inter-Light' : require('./src/assets/fonts/Inter/static/Inter-Light.ttf'),
    'Inter-ExtraLight' : require('./src/assets/fonts/Inter/static/Inter-ExtraLight.ttf'),
    'Inter-Regular' : require('./src/assets/fonts/Inter/static/Inter-Regular.ttf'),
    'Inter-Black' : require('./src/assets/fonts/Inter/static/Inter-Black.ttf'),
    'Inter-Medium' : require('./src/assets/fonts/Inter/static/Inter-Medium.ttf'),
    'Inter-SemiBold' : require('./src/assets/fonts/Inter/static/Inter-SemiBold.ttf'),
    'Inter-Bold' : require('./src/assets/fonts/Inter/static/Inter-Bold.ttf'),
    'Inter-ExtraBold' : require('./src/assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='transparent'  translucent />
    </>
  );
}