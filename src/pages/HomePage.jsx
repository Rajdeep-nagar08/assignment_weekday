import React from "react";
import Box from "@mui/material/Box";
import JobSection from "../components/JobSectionComponent";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "calc(100% - 200px)", marginLeft: "100px" }}>
        <JobSection />
      </Box>
    </Box>
  );
};

export default Home;
