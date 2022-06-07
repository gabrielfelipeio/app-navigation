import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

type ParamsProps = {
  name: string;
}

export function ScreenB() {

  const navigation = useNavigation();

  const route = useRoute();
  const { name } = route.params as ParamsProps;

  function openScreen() {
    navigation.navigate('screenA')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title='Voltar'
        onPress={() => navigation.goBack()}
      />

      <Text style={{ fontSize: 24, color: '#fff' }}>
        {name}
      </Text>

    </View>
  );
}