import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const CustomToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const FlexBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    alignItems: "center"
})

const Header = () => {
  return (
    <>
    <AppBar elevation={1} sx={{bgcolor: "primary.main"}}>
            <Container maxWidth="lg">
        <CustomToolbar>
                <Box>
                    <Button variant="text" sx={{color: "secondary.main", textTransform: "capitalize"}}>
                        MAKE TODO List
                    </Button>
                </Box>
                <FlexBox>
                    <Typography variant="body1" gutterBottom>Create Todo</Typography>
                    <Typography variant="body1" gutterBottom>Log Out</Typography>
                    <Typography variant="body1" gutterBottom>Log In</Typography>
                </FlexBox>
        </CustomToolbar>
            </Container>
    </AppBar>
    </>
  )
}

export default Header