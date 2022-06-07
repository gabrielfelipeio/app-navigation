import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function ScreenA() {

  const navigation = useNavigation()

  function openScreenB() {
    navigation.navigate('screenB')
  }

  function openScreenC() {
    navigation.navigate('screenC')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>

      <Button
        title='Go to screen B'
        onPress={openScreenB}
      />

      <Button
        title='Go to screen C'
        onPress={openScreenC}
      />

    </View>
  );
}