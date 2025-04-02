import React, { useState } from 'react'
import UseCustomFetch from '../customHook/UseCustomFetch'
import { Container, Grid, Card, Box, CardContent, Typography, Avatar, CircularProgress } from "@mui/material";

const ProfileTemp = () => {
     

    const {data,data2, loading, error}=UseCustomFetch("https://randomuser.me/api/");
     
    if (loading) return <CircularProgress style={{ display: "block", margin: "20px auto" }} />;
    if (error) return <Typography color="error">Error: {error}</Typography>;
    // console.log (data)    ;

  






    return (
 <>
    <Container maxWidth="sm">
            <Card sx={{ mt: 5, p: 3, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
                <Avatar src={data.picture.large} alt={data.name.first} sx={{ width: 120, height: 120, margin: "0 auto" }} />
                <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                        {data.name.title} {data.name.first} {data.name.last}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {data.gender.toUpperCase()} | Age: {data.dob.age}
                    </Typography>

                    <Box sx={{ mt: 2, textAlign: "left" }}>
                        <Typography variant="body1"><strong>Email:</strong> {data.email}</Typography>
                        <Typography variant="body1"><strong>Phone:</strong> {data.phone}</Typography>
                        <Typography variant="body1"><strong>Nationality:</strong> {data.nat}</Typography>
                        <Typography variant="body1">
                            <strong>Address:</strong> {data.location.street.number} {data.location.street.name}, 
                            {data.location.city}, {data.location.country}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    
 
 </>

  )
}

export default ProfileTemp