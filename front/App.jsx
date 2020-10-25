import React from 'react';
import { View } from 'react-native';
import { container } from './styles';
import AppText from './styles/AppText';

export default function App() {
  return (
    <View style={container}>
      <AppText textType="h1">MERN Tasks</AppText>
    </View>
  );
}
