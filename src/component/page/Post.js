import React, {useState, useEffect} from 'react'
import { Box, Typography, Grid, Container, Avatar, CardHeader } from '@mui/material'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

const Post = () => {
  const { id } = useParams()

  const [getTodos, setGetTodos] = useState([])
  const todoNotesDetails = async ()=>{
    const todoNotes = doc(db, "notepad", id);
    const todoRef = await getDoc(todoNotes);
    setGetTodos(todoRef.data())
  }

  useEffect(()=>{
    id && todoNotesDetails()
  },[id])


  return (
    <Container maxWidth="lg">
      <Box sx={{width: {xs: "100%"}, bgcolor: "success.contrastText", mt: {xs: 5, sm: 5, lg: 2}, fontSize: {
        xs: "10px"
      }}}>
        <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
            <Box sx={{width: {xs: "95%", md: "98%", lg: "100%"}  , mt: {xs: 3, lg: 5}, height: "auto", pr: {xs: 2, md: 6, lg: 4}, pl: {xs: 2, md: 3, lg: 4}, pt: {xs: 2, md: 6, lg: 4}}}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                      <Typography variant="h3" sx={{textAlign: "inherit", fontSize: {xs: 28, md: 30, lg: 32}}}>
                        {getTodos?.title}
                      </Typography>
                </Grid>
                <Grid item xs={12}>
                  {/*  */}
            <CardHeader
          avatar={<Avatar src={getTodos?.imgurl} /> }
          title={getTodos?.author?.name}
          subheader={getTodos?.createdAt?.toDate()?.toDateString()}
        />

                  {/*  */}
                      {/* <Typography variant="body2" gutterBottom>
                      {getTodos?.createdAt?.toDate()?.toDateString()} by {getTodos?.createdBy}
                      </Typography> */}
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{textAlign: "justify"}}>
                      {getTodos?.description}
                      </Typography>
                </Grid>
              </Grid>
            </Box>
        </Grid>
        </Grid>
      </Box>
  </Container>
  )
}

export default Post