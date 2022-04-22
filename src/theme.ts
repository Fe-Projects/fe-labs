import * as React from 'react';
import { blueGrey } from '@mui/material/colors';

const getDesignTokens = (mode: any) => ({
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
            paper: blueGrey[100],
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
            paper: blueGrey[800],
          },
          text: {
            primary: '#fff',
            secondary: '#fff',
          },
        }),
  },
  typography: {
    fontFamily: [
      "Plus Jakarta Sans"
    ].join(','),
  }
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



export { getDesignTokens, ColorModeContext}
