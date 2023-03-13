import { Avatar, Box, Card, CardContent, CardHeader, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const Home = () => {
  return (
    <Container maxWidth="lg" sx={{mt: 8}}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
      <Card elevation={0} sx={{ width: "100%", mt: 2}}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
        <CardContent>
              <Typography variant="h5" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests.
              </Typography>
          </CardContent>
          <CardContent sx={{mt: -2}}>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
      </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home