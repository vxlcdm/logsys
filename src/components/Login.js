import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {   Button     } from "@mui/material";
import { useNavigate,Link } from 'react-router-dom';
import Profile from '../pages/Profile';

const Login = () => {
    const Nav=useNavigate();
    const[email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [alert,setAlert]=useState("");
    const [emailAlert, setEmailAlert]=useState();
    const [passAlert, setPassAlert]=useState();
    const [success, setSuccess]=useState();
     



    let flag=false;
    let errorCount=0;
    const handleLogin=()=>
    {
        if(!email)
        {
            setEmailAlert("Email cannot be empty");
            errorCount++;
        }
        if(!pass)
        {
            setPassAlert("Password cannot be empty")
            errorCount++;
        }
        if(errorCount==0)
        {
            flag=true;
            letsLogin();
        }
        else{
            // setAlert("Something went wrong");
        }

    }
const letsLogin=()=>{
     const fetchedItem= localStorage.getItem(email);
     if(fetchedItem)
     {
        const parsedData = JSON.parse(fetchedItem);
        const tPass=JSON.parse(fetchedItem).password;
        const tEmail=JSON.parse(fetchedItem).email;

        if( email===tEmail &&  pass === tPass)
        {
            localStorage.setItem("isLoggedUser",true);
            localStorage.setItem("loggedInUser", JSON.stringify(parsedData));
            
            Nav("/profile");
            
        }
        else{
            setAlert("Invalid credentials");
        }
     }
     else{
        setAlert("Invalid user");
     }
}
  return  (
     <>
       
     <Container component="main" maxWidth="xs">
       
        <Paper elevation={3} style={stytle.pages}>
            <Typography variant="h5" gutterBottom >
        Login
            {alert && <Alert style={stytle.alert} severity="error">{alert}</Alert>}
            {emailAlert && <Alert style={stytle.alert} severity='error'>{emailAlert}</Alert>}
            {passAlert && <Alert style={stytle.alert} severity='error'>{passAlert}</Alert>}
      </Typography>
            <TextField id="outlined-basic" label="Email" value={email}variant="outlined" fullWidth margin="normal"  onChange={(e)=>{
                setEmail(e.target.value);
                if(emailAlert!=="")
                {
                    setEmailAlert("");
                }
            }} />
            <TextField id="outlined-basic" fullWidth margin="normal" value={pass}  label="Password" type="password" variant="outlined" onChange={(e)=>{
                setPass( e.target.value);
                if(passAlert!=="")
                {
                    setPassAlert("");
                }
            }}>
            </TextField>


            
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin} style={stytle.button}>
         Login
        </Button>
        <Typography variant="body2" style={stytle.cb}>
          Don't have an account? <Link to="/register">Signup</Link>
        </Typography>
        </Paper>
        
      </Container>
     </>
  )
}
const stytle={
    pages: { padding: "30px", textAlign: "center", marginTop: "50px" },
    cb :{marginTop:"10px"},
    button:{marginTop:"20px"},
    alert:{marginTop:"5px"}
}
export default Login