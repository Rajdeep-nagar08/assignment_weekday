import React from "react";
import Box from "@mui/material/Box";
import JobSection from "../components/JobSectionComponent";
import GridLines from "react-gridlines";


const Home = () => {
  return (
    <GridLines
      className="bg-slate-100"
      lineColor="#fcfcfc"
      cellWidth={25}
      strokeWidth={2}
      cellWidth2={25}
    >
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "calc(100% - 200px)", marginLeft: "100px" }}>
        <JobSection />
      </Box>
    </Box>
    </GridLines>
  );
};

export default Home;
