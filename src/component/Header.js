import { AppBar, Box, Button, Container, styled, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const FlexBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    alignItems: "center",
    color: "white"
})

const Header = () => {
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
                   
                   <Link to="/create" style={{textDecoration: "none", textTransform: "uppercase"}}>Create TodoList</Link>
                   <Button><Link style={{textDecoration: "none"}}>Log Out</Link></Button>
                   <Button><Link to="/login" style={{textDecoration: "none"}}>Log In</Link></Button>
                </FlexBox>
        </CustomToolbar>
            </Container>
    </AppBar>
    </>
  )
}

export default Header