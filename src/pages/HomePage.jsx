import React from "react";
import Box from "@mui/material/Box";
import JobSection from "../components/JobSectionComponent";
import Name from "../components/introComponent.jsx";


const Home = () => {
  return (
    
    <Box sx={{ display: "flex" }}>

      <Box sx={{ width: "calc(100% - 200px)", marginLeft: "150px" , marginTop: "5%"}}>
    <Name />

        <JobSection />
      </Box>
    </Box>
  );
};

export default Home;
