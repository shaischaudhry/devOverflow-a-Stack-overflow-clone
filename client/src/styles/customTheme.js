// Custom Material-UI theme configuration
import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#00b8d4' : '#0088cc',
      },
      secondary: {
        main: darkMode ? '#80deea' : '#004d99',
      },
      background: {
        default: darkMode ? '#121212' : '#fafafa',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      error: {
        main: '#ff3d00',
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          '&$selected': {
            borderRight: '4px solid #00e5ff',
            fontWeight: '700',
          },
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: darkMode ? '0 2px 6px rgba(0,229,255,0.2)' : '0 2px 6px rgba(0,136,204,0.2)',
          background: darkMode 
            ? 'linear-gradient(45deg, #0088cc 10%, #00b8d4 90%)' 
            : 'linear-gradient(45deg, #006bb3 10%, #0088cc 90%)',
          '&:hover': {
            boxShadow: darkMode ? '0 4px 12px rgba(0,229,255,0.4)' : '0 4px 12px rgba(0,136,204,0.4)',
            background: darkMode 
              ? 'linear-gradient(45deg, #00b8d4 10%, #00e5ff 90%)' 
              : 'linear-gradient(45deg, #0088cc 10%, #00b8d4 90%)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            boxShadow: darkMode ? '0 2px 5px rgba(0,229,255,0.2)' : '0 2px 5px rgba(0,136,204,0.2)',
          },
        },
      },
      MuiChip: {
        root: {
          borderRadius: 3,
          padding: '0px',
        },
        outlined: {
          backgroundColor: darkMode ? 'rgba(0,229,255,0.08)' : 'rgba(0,136,204,0.08)',
          borderWidth: '1.5px',
          '&:hover': {
            backgroundColor: darkMode ? 'rgba(0,229,255,0.15)' : 'rgba(0,136,204,0.15)',
          },
        },
      },
      MuiAppBar: {
        colorDefault: {
          backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
        },
      },
      MuiPaper: {
        elevation1: {
          boxShadow: darkMode 
            ? '0 1px 3px rgba(0,0,0,0.5)' 
            : '0 1px 3px rgba(0,0,0,0.12)',
        },
        rounded: {
          borderRadius: 8,
        },
      },
      MuiTextField: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1.5px',
              transition: 'border-color 0.3s ease',
            },
            '&:hover fieldset': {
              borderColor: darkMode ? '#00e5ff' : '#0088cc',
            },
            '&.Mui-focused fieldset': {
              borderWidth: '2px',
            },
          },
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
