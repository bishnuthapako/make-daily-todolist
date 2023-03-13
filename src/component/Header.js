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
                    <Button sx={{color: "secondary.main"}}>
                        Random User
                    </Button>
                </Box>
                <FlexBox>
                    <Typography>About me</Typography>
                    <Typography>Contact us</Typography>
                    <Typography>Terms & Condition</Typography>
                </FlexBox>
        </CustomToolbar>
            </Container>
    </AppBar>
    </>
  )
}

export default Header