import React from "react";
import { Slider, Typography, Box } from "@mui/material";

const genderMarks = [
  { value: 0, label: "Male" },
  { value: 1, label: "Female" },
  { value: 2, label: "Other" }
];

const GenderSlider = ({ gender, onChange }) => {
  return (
    <Box sx={{   width: { xs: "85%", sm: "90%", md: "90%", lg: "90%" }
    ,justifyContent: "center" 
    , p: 3 }}>
      <Typography variant="h6">Select Gender</Typography>
      <Slider
        value={gender}
        onChange={(_, newValue) => onChange(newValue)}  
        marks={genderMarks}
        min={0}
        max={2}
        valueLabelDisplay="off"
      />
      <Typography variant="body1">
        Selected: <b>{genderMarks.find(mark => mark.value === gender)?.label}</b>
      </Typography>
    </Box>
  );
};

export default GenderSlider;
