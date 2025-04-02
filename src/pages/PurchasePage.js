import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, AppBar, Toolbar } from "@mui/material";


const PurchasePage = () => {
    const Nav =useNavigate();

  return (
    <div>
        
        <h1>
        PurchasePage

        </h1>
        <p>
            This page is under devloerment
        </p>
        <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 1, px: 4, py: 0.5 }} 
                    onClick={() => Nav("/")}
                >
                   Go back
                </Button>

    </div>
  )
}

export default PurchasePage