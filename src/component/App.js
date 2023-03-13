import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import { amber, purple } from '@mui/material/colors';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Create from "./page/Create"
import Post from "./page/Post"
import Login from './page/Login';


const theme = createTheme({

    palette: {
    primary: {
        main: amber[800]}
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path ="/create" element={<Create />} />
      </Routes>
        </BodyBox>
    </ThemeProvider>
    </>
  )
}

export default App