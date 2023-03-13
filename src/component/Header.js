import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from '@mui/material'
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
                    <Button variant="text" sx={{color: "secondary.main", textTransform: "capitalize"}}>
                        <Link to="/">
                        MAKE TODO List
                        </Link>
                    </Button>
                </Box>
                <FlexBox>
                   
                   <Link to="/create">Create TodoList</Link>

                   <Button><Link>Log Out</Link></Button>
                   <Button><Link to="/login">Log In</Link></Button>
                </FlexBox>
        </CustomToolbar>
            </Container>
    </AppBar>
    </>
  )
}

export default Header