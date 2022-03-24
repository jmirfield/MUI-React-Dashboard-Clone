const Appbar = (theme) => ({
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
})

export default Appbar