import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function ScreenC() {

  const navigation = useNavigation()

  function openScreen() {
    navigation.navigate('screenA')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center' }}>

      <Button
        title='Go to screen A'
        onPress={openScreen}
      />

    </View>
  );
}