import React, { useEffect, useState } from "react";
import { Card,Switch, FormControlLabel,  AppBar, Toolbar,Container,CardContent, CardActions, Avatar, Typography, Button, Grid, Divider, Box  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import {  Link } from "react-router-dom";


const Profile = () => {


    const Nav= useNavigate();
    const navigate = useNavigate();
    const [user,setUser]=useState(null);
    const [showDetails, setShowDetails] = useState(false);
    

    const  storedUser = JSON.parse(localStorage.getItem( "loggedInUser" ));
    console.log (storedUser);

    useEffect(()=>{
        const isAuth=localStorage.getItem("isLoggedUser");
        if(!storedUser || isAuth !=="true")
        {
            Nav("/login");
        }
        else{
       setUser(storedUser);
            

        }
    },[]);
   

    console.log(user?user.picture.large:"loading");
    
    
    
    


    const loggedUser=localStorage.getItem("isLoggedUser");
    if(loggedUser)
    {
        console.log("YES LOGIN");
        
    }
    else{
        console.log("BAD ACCESS");
        
    }

    const handleLogout=function(){
        localStorage.removeItem("isLoggedUser");
        localStorage.removeItem("loggedInUser");
        console.log("LOGGED OUTTTT");
        
        Nav("/")
    }


    return (
        <>
        <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                    
                    <Button color="inherit" onClick={() => navigate("/")}>
                    Home
                    </Button>
                </Toolbar>
            </AppBar>
            
        <Card sx={{ maxWidth: 500, mx: "auto", my: 4, p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
                {/* Avatar & Name */}
                <Box textAlign="center">
                    <Avatar 
                        src={user ? user.picture.large : "loading"} 
                        alt={user ? user.name.first : "loading"} 
                        sx={{ width: 100, height: 100, margin: "auto", mb: 2 }} 
                    />
                    <Typography variant="h5">
                        {user ? `${user.name.title}  ${user.name.name.toUpperCase()}` : "loading"}
                    </Typography>
                    <Typography color="textSecondary">
                        {user ? user.email : "loading"}
                    </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Personal Details */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Gender:</strong> {user ? user.gender : "loading"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Age:</strong> {user ? user.dob.age : "loading"} years
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Date of Birth:</strong> {user ? new Date(user.dob.date).toLocaleDateString() : "loading"}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Location Details */}
                <Typography variant="h6" sx={{ mb: 1 }}>Location</Typography>
                <Typography variant="body2">
                    {user 
                        ? `${user.location.street.number} ${user.location.street.name}, 
                           ${user.location.city}, ${user.location.state}, 
                           ${user.location.country} - ${user.location.postcode}`
                        : "loading"}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Login & Security Details */}
                <Typography variant="h6" sx={{ mb: 1 }}>Login Details</Typography>
                <Typography variant="body2"><strong>Username:</strong> {user ? user.login.username : "loading"}</Typography>
                <Typography variant="body2"><strong>UUID:</strong> {user ? user.login.uuid : "loading"}</Typography>
                <Typography variant="body2"><strong>Password:</strong> {user ? user.password : "loading"}</Typography>

                <Divider sx={{ my: 2 }} />

                {/* Contact Info */}
                <Typography variant="h6" sx={{ mb: 1 }}>Contact</Typography>
                <Typography variant="body2"><strong>Phone:</strong> {user ? user.cell : "loading"}</Typography>
                <Typography variant="body2">
                    <strong>ID:</strong> {user ? `${user.id.name} - ${user.id.value || "N/A"}` : "loading"}
                </Typography>
            <Divider sx={{ my: 2 }} />

                         {/* Timezone */}
            <Typography variant="h6" sx={{ mt: 2 }}>Timezone</Typography>
            <Typography variant="body2">
                <strong>Offset:</strong> {user ? user.location.timezone.offset : "loading"}
            </Typography>
            <Typography variant="body2">
                <strong>Description:</strong> {user ? user.location.timezone.description : "loading"}
            </Typography>





                <Divider sx={{ my: 2 }} />

                <FormControlLabel
                    control={
                        <Switch
                            checked={showDetails}
                            onChange={() => setShowDetails(!showDetails)}
                            color="primary"
                        />
                    }
                    label="Show Developer Options"
                    sx={{ display: "block", textAlign: "center", my: 2 }}
                />

              {showDetails && (
                <>
                  <Typography variant="h6" sx={{ mt:4,mb: 2, textAlign: "center" }}>
                DEVELOPER OPTIONS
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Seed */}
            <Typography variant="body2">
                <strong>Seed:</strong> {user ? user.seed : "loading"}
            </Typography>

            {/* Registered Date */}
            <Typography variant="body2">
                <strong>Registered:</strong> {user ? new Date(user.registered.date).toLocaleDateString() : "loading"}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Coordinates */}
            <Typography variant="h6" sx={{ mt: 2 }}>Coordinates</Typography>
            <Typography variant="body2">
                <strong>Latitude:</strong> {user ? user.location.coordinates.latitude : "loading"}
            </Typography>
            <Typography variant="body2">
                <strong>Longitude:</strong> {user ? user.location.coordinates.longitude : "loading"}
            </Typography>

            <Divider sx={{ my: 2 }} />

           

            {/* Security Hashes */}
            <Typography variant="h6" sx={{ mt: 2 }}>Security</Typography>
            <Typography variant="body2">
                <strong>Salt:</strong> {user ? user.login.salt : "loading"}
            </Typography>
            <Typography variant="body2">
                <strong>MD5:</strong> {user ? user.login.md5 : "loading"}
            </Typography>
            <Typography variant="body2">
                <strong>SHA1:</strong> {user ? user.login.sha1 : "loading"}
            </Typography>
            <Typography variant="body2">
                <strong>SHA256:</strong> {user ? user.login.sha256 : "loading"}
            </Typography>

                </>
              )}


            <Divider sx={{ my: 2 }} />


            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
                <Button variant="contained" onClick={handleLogout}>Logout</Button>
            </CardActions>
        </Card>
        </>
    );
};

export default Profile;
