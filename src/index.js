import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import './global.css'
import reportWebVitals from './reportWebVitals';

let theme = createTheme({
    palette: {
        primary: { main: 'rgb(0, 171, 85)' },
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    minHeight: 60,
                    justifyContent: 'center',
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    minHeight: '100vh',
                    display: 'flex',
                    padding: 0
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    width: '100%',
                    justifyContent: 'space-between',
                    height: '92px'
                }
            }
        }
    }
})


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
