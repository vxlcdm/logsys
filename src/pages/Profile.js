import React, { useEffect, useState } from "react";
import { Card, Container,CardContent, CardActions, Avatar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";



const Profile = () => {


    const Nav= useNavigate();
    const [user,setUser]=useState({});

    

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
    },[Nav])

    console.log(user);
    
    
    
    


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
        
  <Container component="main" maxWidth="xs">
        <Card sx={{ maxWidth: 400, padding: 2, boxShadow: 3, borderRadius: 2, textAlign: "center", marginTop:"40px" }}>
            <Avatar 
                 
               
                sx={{ width: 80, height: 80, margin: "auto", mb: 2 }}
            />
            <CardContent>
                <Typography variant="h6">{ user.email}</Typography>
                <Typography variant="body2" color="text.secondary">{ user.name}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="contained" onClick={handleLogout}>Logout</Button>
            </CardActions>
        </Card>
        
        
        </Container>
    );
};

export default Profile;
