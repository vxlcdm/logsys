import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, TextField, Button, Typography,CircularProgress, Paper } from "@mui/material";
import GenderSlider from '../minis/GenderSlider';
 
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { padding, style } from '@mui/system';
import UseCustomFetch from '../customHook/UseCustomFetch';



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
    const [selectedGender, setSelectedGender] = useState(0);
    const Navigate=useNavigate();
    let genderVal=1;
    const other=()=>{
        let randomNum=Math.floor(Math.random()*10);
        genderVal+=randomNum;
        // console.log("GENDERVAL=", genderVal);
        
        return genderVal%2==0?"male":"female";
    }
    // console.log(selectedGender);
    const genderLabels = ["male", "female", other()];
    console.log(selectedGender);
    console.log(genderLabels[selectedGender]);
    


    

    
   
    
    const {data, data2, loading, error}=UseCustomFetch(`https://randomuser.me/api/?gender=${genderLabels[selectedGender]}`);

     if (loading) return <CircularProgress style={{ display: "block", margin: "20px auto" }} />;
        if (error) return <Typography color="error">Error: {error}</Typography>;
    
     const  user = data
        ? {
              gender: data.gender || "",
              name: {
                  title: data.name?.title || "",
                  name:name,
              },
              location: {
                  street: {
                      number: data.location?.street?.number || null,
                      name: data.location?.street?.name || ""
                  },
                  city: data.location?.city || "",
                  state: data.location?.state || "",
                  country: data.location?.country || "",
                  postcode: data.location?.postcode || null,
                  coordinates: {
                      latitude: data.location?.coordinates?.latitude || "",
                      longitude: data.location?.coordinates?.longitude || ""
                  },
                  timezone: {
                      offset: data.location?.timezone?.offset || "",
                      description: data.location?.timezone?.description || ""
                  }
              },
              email:  email  ,
              password:  password ,
              login: {
                  uuid: data.login?.uuid || "",
                  username: data.login?.username || "",
                  password: data.login?.password || "",
                  salt: data.login?.salt || "",
                  md5: data.login?.md5 || "",
                  sha1: data.login?.sha1 || "",
                  sha256: data.login?.sha256 || ""
              },
              dob: {
                  date: data.dob?.date || "",
                  age: data.dob?.age || null
              },
              registered: {
                  date: data.registered?.date || ""
              },
              cell: data.cell || "",
              id: {
                  name: data.id?.name || "",
                  value: data.id?.value || ""
              },
              picture: {
                  large: data.picture?.large || ""
              },
              seed: data2.info.seed || ""  
          }
        : null;  
    
    console.log(user);
    


    
    // console.log(user);
    
    
    // console.log(user);
    
    let flag=false;
    let errorCount=0;

    const handleUsernameEnquiry=()=>{


    }

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

      
    const letsCreateObj= ()=>{

        if(flag){
     
        localStorage.setItem(user.email,JSON.stringify(user));
        localStorage.setItem(user.login.username,JSON.stringify(user));
        localStorage.setItem(user.cell,JSON.stringify(user));
        console.log("IDHAR TAK AYA ");
        Nav("/login");

    }
    else{
        console.log("something went rong bec flaf is untrue");
        
    }

}



  return (
    <>
    
    {/* Navbar */}
    <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                   
                    <Button color="inherit" onClick={() => Navigate("/")}>
                    Home
                    </Button>
                    <Button color="inherit" onClick={() => Navigate("/login")}>
                    login
                    </Button>
                </Toolbar>
            </AppBar>



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
        


        <GenderSlider gender={selectedGender} onChange={setSelectedGender} />


        

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