import { Dimensions } from 'react-native';

// Based on pr-unit repo
const { width } = Dimensions.get('window');
const pr = Math.round((width >= 600 ? width / 1440 : width / 1080) * 1e3) / 1e3;

export const normalize = (size) => size * pr;
