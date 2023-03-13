import { Box, Container, TextField, Button } from '@mui/material'
import React, {useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase"
import { useNavigate } from 'react-router-dom';

const Create = () => {

const navigate = useNavigate();
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")

console.log(auth.currentUser.photoURL, 'curr')

const  todoCollectionRef = collection(db, "notepad")
const handleSubmit = async ()=> {
  if(title ==="" && description === "") {
    alert("Please fill the fields")
  } else {
    try{
      await addDoc(todoCollectionRef, {
        title,
        description,
        author: {
          photoUrl: auth.currentUser.photoURL,
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid
        } 
      })
      navigate("/")
    }catch(error){
      console.log(error)
    }
  }
}



  return (
    <Container maxWidth="lg" sx={{mt: 8, pt: 0}}>
        <Box sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
         <Box sx={{mt: 5, display: "flex", flexDirection: "column", gap: 2, width: "100%", height: "620px"}} component="form">
                  <TextField type="text" name="title" value={title} multiline rows={2} placeholder='Enter the title' fullWidth  sx={{"& fieldset": { border: 'none' },}}
                  inputProps={{style: {fontSize: 30}}}
                  InputLabelProps={{style: {fontSize: 30}}} 
                  onChange={(e)=>setTitle(e.target.value)}
                  />
                  <TextField type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} multiline rows={10} fullWidth placeholder="Write something here....."/>
                  <Box>
                  <Button onClick={handleSubmit} variant="contained">Publish</Button>
                  </Box>
         </Box>
        </Box>
    </Container>
  )
}

export default Create