import { Box, Container, TextField, Button } from '@mui/material'
import React from 'react'

const Create = () => {
  return (
    <Container maxWidth="lg" sx={{mt: 8, pt: 0}}>
        <Box sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
         <Box sx={{mt: 5, display: "flex", flexDirection: "column", gap: 2, width: "100%", height: "620px"}} component="form">
                  <TextField type="text" name="title" value={""} multiline rows={2} placeholder='Enter the headline' fullWidth  sx={{"& fieldset": { border: 'none' },}}
                  inputProps={{style: {fontSize: 30}}}
                  InputLabelProps={{style: {fontSize: 30}}} />
                  <TextField type="text" name="description" value="" multiline rows={10} fullWidth placeholder="Write something here....."/>
                  <Box>
                  <Button variant="contained">Publish</Button>
                  </Box>
         </Box>
        </Box>
    </Container>
  )
}

export default Create