import React from 'react';
import { View, Button } from 'react-native';

export function ScreenA({ navigation }) {

  function openScreen() {
    navigation.navigate('screenB')
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>

        <Button
          title='Go to screen B'
          onPress={openScreen}
        />

      </View>
    </>
  );
}