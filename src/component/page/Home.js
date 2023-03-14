import { Avatar, Card, CardContent, CardHeader, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';



const Home = ({todoList}) => {
  
  // console.log(todo, 'todo')
  // console.log(todo?.imgurl, 'img')

  // const createdDate = todo?.createdAt?.toDate()?.toDateString()
  return (
    <Container maxWidth="lg" sx={{mt: 8}}>
      {
        todoList.map((todo)=>(
          <Grid key={todo?.id} container spacing={1}>
          <Grid item xs={12} sm={12}>
        <Card elevation={0} sx={{ width: "100%", mt: 2}}>
          <CardHeader
          avatar={
            <Avatar src={todo?.imgurl} />
            }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={todo?.author?.name}
          subheader={todo?.createdAt?.toDate()?.toDateString()}
        />
          <CardContent>
                <Typography variant="h5" color="text.secondary">
                  {todo?.title}
                </Typography>
            </CardContent>
            <CardContent sx={{mt: -2}}>
              <Typography variant="body2" color="text.secondary">
              {todo?.description}
              </Typography>
            </CardContent>
        </Card>
          </Grid>
        </Grid>
        ))    

      }
    </Container>
  )
}

export default Home