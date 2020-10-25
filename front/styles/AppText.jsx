import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { normalize } from './utils';

const baseMultiplerFontSize = 1.3;
const bodyFontSize = 40;
const headerThreeFontSize = bodyFontSize * baseMultiplerFontSize;
const headerTwoFontSize = bodyFontSize * baseMultiplerFontSize * 2;
const headerOneFontSize = bodyFontSize * baseMultiplerFontSize * 3;
const headingFontType = 'monospace';
const bodyFontType = 'normal';

const styles = StyleSheet.create(
  JSON.parse(`{
  "bodyFont": {
    "fontFamily": "${bodyFontType}",
    "fontSize": ${normalize(bodyFontSize)}
  },
  "headerFontType": {
    "fontFamily": "${headingFontType}"
  },
  "headerOneFontSize": {
    "fontSize": ${normalize(headerOneFontSize)}
  },
  "headerTwoFontSize": {
    "fontSize": ${normalize(headerTwoFontSize)}
  },
  "headerThreeFontSize": {
    "fontSize": ${normalize(headerThreeFontSize)}
  }
}`)
);

const fontStyles = {
  body: styles.bodyFont,
  h1: [styles.headerFontType, styles.headerOneFontSize],
  h2: [styles.headerFontType, styles.headerTwoFontSize],
  h3: [styles.headerFontType, styles.headerThreeFontSize],
};

export default AppText = ({ textType = 'body', style, ...restProps }) => {
  const fontStyle = fontStyles[textType];

  if (style === undefined)
    return (
      <Text {...restProps} style={fontStyle ? fontStyle : fontStyles.body} />
    );

  let newFontStyles;
  if (Array.isArray(fontStyle)) {
    newFontStyles = fontStyle.concat(style);
  } else {
    newFontStyles = Array.isArray(style)
      ? [fontStyle, ...style]
      : [fontStyle, style];
  }
  return <Text {...restProps} style={newFontStyles} />;
};
