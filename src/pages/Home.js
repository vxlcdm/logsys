import React from "react";
import { Container, Typography, Button, Grid, AppBar, Toolbar } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Navbar */}
            <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/login")}>
                        Login
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/register")}>
                    SIGNUP
                    </Button>
                </Toolbar>
            </AppBar>


            {/* Hero Section */}
            <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
                <Typography variant="h2" fontWeight="bold">
                    Welcome to LOGMGTSYS
                </Typography>
                <Typography variant="h5" color="textSecondary" sx={{ mt: 2 }}>
                    The best place to manage your profile securely.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 3, px: 4, py: 1.5 }} 
                    onClick={() => navigate("/register")}
                >
                    Get Started
                </Button>
            </Container>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ mt: 10 }}>
                <Grid container spacing={4}>
                    <Grid size={4} item xs={12} sm={4}>
                        <Typography variant="h5" fontWeight="bold">🚀 Fast</Typography>
                        <Typography color="textSecondary">Experience seamless navigation and fast processing.</Typography>
                    </Grid>


                    <Grid size={4} item xs={12} sm={4}>
                        <Typography variant="h5" fontWeight="bold">🔒 Secure</Typography>
                        <Typography color="textSecondary">Your data is encrypted and securely stored.</Typography>
                    </Grid>

                    <Grid size={4} item xs={12} sm={4}>
                        <Typography variant="h5" fontWeight="bold">🎨 Dashing UI</Typography>
                        <Typography color="textSecondary">Enjoy a modern and clean interface.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
