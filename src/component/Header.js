import { AppBar, Box, Button, Container, styled, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {signOut} from "firebase/auth"
import {auth} from "../config/firebase"


const CustomToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const FlexBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    width: "25%",
    alignItems: "center"
})

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
    <AppBar elevation={1} sx={{bgcolor: "primary.main"}}>
            <Container maxWidth="lg">
        <CustomToolbar>
                <Box>
                    <Button variant="text" sx={{color: "secondary.main"}}>
                        <Link to="/">
                        MAKE TODO List
                        </Link>
                    </Button>
                </Box>
                <FlexBox>
                    {
                        isAuth ? 
                        <>
                        <Link to="/create" style={{textDecoration: "none", textTransform: "uppercase"}}>Create TodoList</Link>
                        <Button variant="outlined" onClick={handleLogOut} sx={{color: "white"}}>log Out</Button>
                        </>
                         :
                         <Button><Link to="/login" style={{textDecoration: "none"}}>Log In</Link></Button>  
                    } 
                </FlexBox>
        </CustomToolbar>
            </Container>
    </AppBar>
    </>
  )
}

export default Header