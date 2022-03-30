import * as React from 'react';
import { red, deepOrange, amber, grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#004b58',
          },
          divider: '#004b58',
          background: {
            default: '#fff',
            paper: deepOrange[900],
          },
          text: {
            primary: '#08212d',
            secondary: '#08212d',
          },
        }
      : {
          primary: {
            main: '#CAF7FF'
          },
          divider: '#004b58',
          background: {
            default: '#08212d',
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: '#fff',
          },
        }),
  },
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



export { getDesignTokens, ColorModeContext}
