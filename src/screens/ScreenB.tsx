import React from 'react';
import { Button, View } from 'react-native';

export function ScreenB({ navigation }) {

  function openScreen() {
    navigation.navigate('screenA')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>

      <Button
        title='Go to screen A'
        onPress={openScreen}
      />

    </View>
  );
}