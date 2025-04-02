import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
 
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { padding, style } from '@mui/system';




const Register = () => {
    const Nav=useNavigate();
    const [name, setName]= useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [cpass, setCPass]=useState("");
    const [alert, setAlert]=useState("");
    const [nameAlert, setNameAlert]=useState("")
    const [emailAlert, setEmailAlert]=useState("")
    const [passAlert, setPassAlert]=useState("")
    const [cpassAlert, setCPassAlert]=useState("");
    const [tapCount,setTapCount]=useState(3);

    const   user={
        name:name,
        username: null,
        email:email,
        mobile:99,
        password:password
    }
    let flag=false;
    let errorCount=0;
    
    const handleRegister=()=>{
       
        if (!name?.trim()) 
            {
                setNameAlert("Name cannot be empty");
                errorCount++;
               
            }
            if (!email?.trim()) 
                {
                        setEmailAlert("Email cannot be empty");
                        errorCount++;
                            
                }  
                if (!password?.trim()) 
                    {
                            setPassAlert("Password cannot be empty");
                            errorCount++;
                    }if (!cpass?.trim()) 
                        {
                                setCPassAlert("Confirm password cannot be empty");
                                errorCount++;
                                return;
                        }
                        if (password !== cpass) {
                            setCPassAlert("Passwords do not match!");
                            setTapCount((prevTapCount)=>prevTapCount-1);
                            if(tapCount<3){

                                if( tapCount<1)
                                    {
                                            setAlert("Please try again after some hours")

                                        return;
                                    }

                            setAlert(`Remaining tries left:${tapCount}`)
                            }
                            
                            return;
                        }
                           

                    const emailFetch=localStorage.getItem(email);if (emailFetch) {  
                        const storedEmail = JSON.parse(emailFetch)?.email;  
                    
                        if (email?.trim() === storedEmail) { 
                            setEmailAlert("Email already exists");
                            errorCount++;
                             
                        }
                    }

            
             
                    if(errorCount===0){
                    flag=true;
                    letsCreateObj();}
                    else{
                       console.log("Something went rong");
                    }
       }

      
    const letsCreateObj=()=>{
        if(flag){
     
        localStorage.setItem(user.email,JSON.stringify(user));
        localStorage.setItem(user.username,JSON.stringify(user));
        localStorage.setItem(user.mobile,JSON.stringify(user));
        console.log("IDHAR TAK AYA ");
        Nav("/login");

    }
    else{
        console.log("something went rong bec flaf is untrue");
        
    }

}



  return (
    <>
    
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={styles.paper}>
         
        <Typography variant="h5">Signup</Typography>
        
        {alert &&  <Alert style={styles.alertStyle} severity="error">{alert}</Alert>}

        {nameAlert &&  <Alert style={styles.alertStyle} severity="error">{nameAlert}</Alert>}
        {emailAlert && <Alert style={styles.alertStyle} severity="error">{emailAlert}</Alert>}
        {passAlert && <Alert style={styles.alertStyle} severity="error">{passAlert}</Alert>}
        {cpassAlert && <Alert style={styles.alertStyle} severity="error">{cpassAlert}</Alert>}

        <TextField id="outlined-basic" fullWidth margin="normal" value={name} label="Name" variant="outlined" onChange={(e)=>{
            setName(e.target.value);
            if (nameAlert !== "") { 
                setNameAlert(""); 
            }
            }} />


        <TextField label="Email" fullWidth margin="normal" variant="outlined" value={email} onChange={(e) => { 
             setEmail(e.target.value);
             if (emailAlert!== "") { 
                 setEmailAlert(""); 
             }
        }} />
        
        

        <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" value={password} onChange={(e) =>{  
         setPassword(e.target.value);
         if (passAlert!== "") { 
             setPassAlert(""); 
         }

        }} />

        <TextField label="Confirm password" type="password" fullWidth margin="normal" variant="outlined" value={cpass} onChange={(e) =>{  
         setCPass(e.target.value);
         if (cpassAlert!== "") { 
             setCPassAlert(""); 
         }

        }} />   

        <Button   disabled={tapCount < 0}  variant="contained" color="primary" fullWidth onClick={handleRegister} style={styles.button}>
          Sign Up
        </Button>
        <Typography variant="body2" style={styles.cb}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
    </>

  );
};
const styles = { paper: { padding: "30px", textAlign: "center", marginTop: "50px" }, button: { marginTop: "20px" }, cb:{marginTop: "20px"} , alertStyle:{marginTop:"5px"}};
export default Register