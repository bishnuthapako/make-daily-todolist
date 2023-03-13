import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Create = () => {
  return (
    <Container maxWidth="lg" sx={{mt: 8, pt: 3}}>
      <Box>
        <Typography sx={{color: "red"}}>
        Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!
      Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!
      Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!
        </Typography>
      </Box>
    </Container>
  )
}

export default Create