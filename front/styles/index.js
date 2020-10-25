import { StyleSheet, StatusBar } from 'react-native';
import constants from './constants';

const { colors } = constants;
const { gris1 } = colors;

const styles = StyleSheet.create(
  JSON.parse(`{
  "container": {
    "backgroundColor": "${gris1}",
    "flex": 1,
    "paddingTop": ${StatusBar.currentHeight}
  }
}`)
);

export const { container } = styles;
