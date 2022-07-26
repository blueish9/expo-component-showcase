import * as React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';

export default function Convas({children}) {
  useFonts({
    'AvenirNextLTPro-Bold': require('./fonts/AvenirNextLTPro-Bold.ttf'),
    'AvenirNextLTPro-Demi': require('./fonts/AvenirNextLTPro-Demi.ttf'),
    'AvenirNextLTPro-Medium': require('./fonts/AvenirNextLTPro-Medium.ttf'),
    'AvenirNextLTPro-Regular': require('./fonts/AvenirNextLTPro-Regular.ttf'),
  });
  return (
    <View style={{
      flex: 1,
      borderWidth: 0.5,
      borderColor: 'gray',
      marginVertical: 60,
      marginHorizontal: 30,
      justifyContent: 'space-between'
    }}>
      {children}
    </View>
  )
}