export const colors = {
    primary: {
      main: '#0070BA',
      light: '#2997ED',
      dark: '#003087',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#142C8E',
      light: '#2543B2',
      dark: '#001F6D',
      contrast: '#FFFFFF',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
      disabled: '#9e9e9e',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    status: {
      error: '#d32f2f',
      warning: '#ed6c02',
      success: '#2e7d32',
      info: '#0288d1',
    },
  } as const;
  
  export type Colors = typeof colors;