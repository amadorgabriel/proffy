import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppStack from './src/routes/AppStack';

import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


export default function App() {
  //usar fonts de acordo com expo-fonts (github)
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Fragment>
        <AppStack />
        <StatusBar style="light" />
      </Fragment>
    );
  }
}

