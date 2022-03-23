import { createTheme } from "@mui/material/styles"
import { APP_BAR } from "../utils/constants"

export const theme = createTheme({
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
                    height: `${APP_BAR}px`,
                    paddingLeft: 40,
                    paddingRight: 40
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    width: '44px',
                    height: '44px'
                }
            }
        }
    }
})