import { createTheme } from "@mui/material/styles"
import ComponentsOverrides from "./overrides"

const theme = createTheme({
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
})

theme.components = ComponentsOverrides(theme)

export default theme