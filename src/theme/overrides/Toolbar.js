import { APP_BAR } from "../../utils/constants"

const Toolbar = (theme) => ({
    MuiToolbar: {
        styleOverrides: {
            root: {
                width: '100%',
                justifyContent: 'space-between',
                height: `${APP_BAR}px`,
                paddingLeft: 20,
                paddingRight: 40
            }
        }
    },
})

export default Toolbar