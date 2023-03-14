import { Avatar, Button, Card, CardContent, CardHeader, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { auth } from '../../config/firebase';
import { Link } from 'react-router-dom';



const Home = ({todoList, handleDelete, isAuth}) => {
  
 const MAXLENGTH = 100;

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
              {
                isAuth && todo?.author.id === auth?.currentUser?.uid && (
                  <>
              <Button onClick={()=>handleDelete(todo?.id)}>
                <MoreVertIcon />
              </Button>
                </>
                )
              }
            </IconButton>
          }
          title={todo?.author?.name}
          subheader={todo?.createdAt?.toDate()?.toDateString()}
        />
          <CardContent>
                <Typography variant="h5" color="text.secondary">
                  <Link to={`/post/${todo.id}`} style={{textDecoration: "none"}}>
                  {todo?.title} 
                  </Link>
                </Typography>
            </CardContent>
            <CardContent sx={{mt: -2}}>
              <Typography variant="body2" color="text.secondary">
              {todo?.description?.slice(0, 200)}...
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