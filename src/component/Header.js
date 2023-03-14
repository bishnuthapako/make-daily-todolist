import { AppBar, Box, Button, Container, styled, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {signOut} from "firebase/auth"
import {auth} from "../config/firebase"
import { palette } from '@mui/system'


const CustomToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const FlexBox = styled(Box)({
    display: "flex",
    gap: 6,
    alignItems: "center"
})

// const NavButton = styled(Button)(({theme})=>({
//     backgroundColor: theme.palette.error.contrastText,
//     ':hover' :{
//         color: theme.palette.error.contrastText,
//         backgroundColor: theme.palette.secondary.light
//     }
// }))

const Header = ({isAuth, setIsAuth}) => {

    const handleLogOut = async ()=> {
        try{
            setIsAuth(true)
            await signOut(auth).then(()=>{
                localStorage.clear()
                setIsAuth(false)
                window.location.pathname("/login")
            })
       
        }catch(error){
            console.log(error)
        }
    }


  return (
    <>
    <AppBar elevation={1} sx={{bgcolor: "success.light"}}>
            <Container maxWidth="lg">
        <CustomToolbar>
                <Box>
                    <Button variant="text" sx={{color: "secondary.main"}}>
                        <Link to="/" style={{textDecoration: "none"}}>
                        <Button variant="contained" sx={{bgcolor: "warning.contrastText", textDecoration: "none", ":hover": {
                            color: "success.contrastText",
                        }}}>Todo Notes</Button>
                        </Link>
                    </Button>
                </Box>
                <FlexBox>
                    {
                        isAuth ? 
                        <>
                        <Link to="/create" style={{textDecoration: "none", textTransform: "capitalize"}}><Button variant="outlined" color="error">Create Notes</Button></Link>
                        <Button variant="contained" onClick={handleLogOut} color="success">log Out</Button>
                        </>
                         :
                         <Link to="/login" style={{textDecoration: "none"}}><Button variant='contained' color="success">Log In</Button></Link> 
                    } 
                </FlexBox>
        </CustomToolbar>
            </Container>
    </AppBar>
    </>
  )
}

export default Header