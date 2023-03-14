import { Box, CssBaseline } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import { amber, purple } from '@mui/material/colors';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Create from "./page/Create"
import Post from "./page/Post"
import Login from './page/Login';
import {db} from "../config/firebase";
import {getDocs, collection, deleteDoc, doc} from "firebase/firestore"
import Edit from './page/Edit';

const theme = createTheme({

    palette: {
    primary: {
        main: amber[800]}
    },
    secondary: {
        main: purple[50]
    }  
})

const BodyBox = styled(Box)(({theme})=>({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
    width: "100%",
    height: "100%",
    minHeight: "100vh"
}));

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  const [todoList, setTodoList] = useState([])
  

  const todoCollectionRef = collection(db, "notepad");
  const getTodolist = async()=> {
      try{
        const data = await getDocs(todoCollectionRef);
        const getTodoData = data.docs.map((doc)=>({
          ...doc.data(),
          id: doc.id
        }))
        setTodoList(getTodoData)
      }catch(error){

      }
  }

useEffect(()=>{
  getTodolist();
},[])


const handleDelete = async (id)=> {
  const todoDoc = doc(db, "notepad", id)
  await deleteDoc(todoDoc)
  getTodolist()
}

  return (
    <>  
    <ThemeProvider theme={theme}>
        <BodyBox>
            <CssBaseline />
            <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path="/" element={<Home todoList={todoList} isAuth={isAuth} handleDelete={handleDelete} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/post/:id" element={isAuth ? <Post /> : <Login setIsAuth={setIsAuth} />} />
        <Route path ="/create" element={<Create getTodolist={getTodolist} />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
        </BodyBox>
    </ThemeProvider>
    </>
  )
}

export default App