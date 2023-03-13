import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import { amber, purple } from '@mui/material/colors';
import Header from './Header';


const theme = createTheme({

    palette: {
    primary: {
        main: amber[200]}
    },
    secondary: {
        main: purple[50]
    }  
})

const BodyBox = styled(Box)(({theme})=>({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
    width: "100%",
    height: "100vh"
}));

const App = () => {
  return (
    <>  
    <ThemeProvider theme={theme}>
        <BodyBox>
            <CssBaseline />
            <Header />
        </BodyBox>
    </ThemeProvider>
    </>
  )
}

export default App