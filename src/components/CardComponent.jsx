import { useState } from "react";
import { Link } from "react-router-dom";
import ModalMui from "@mui/material/Modal";
import ButtonMui from "@mui/material/Button";
import BoxMui from "@mui/material/Box";
import PaperMui from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { capitalize } from "@mui/material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { postedDuration } from "../utils/constants";
import WebLoader from "./LoaderComponent" 

const Card = (props) => {
  const [open, setOpen] = useState(false);
  const [jobDesc, setJobDesc] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <ModalMui
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxMui sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Job description
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {jobDesc}
          </Typography>
        </BoxMui>
      </ModalMui>
      {props.job != null ? (
        props.job.map((jobs) => (
          <Grid
            key={jobs.jdUid}
            xs={12}
            item={true}
            md={6}
            lg={4}
            sx={{
              paddingLeft: "24px",
              paddingTop: "24px",
              marginTop: "8px",
              padding: "8px",
            }}
          >
            <PaperMui
              variant="elevation"
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px ",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "360px",
                height: "100vh",
                position: "relative",
                maxHeight: "590px",
                minHeight: "590px",
                borderRadius: "20px",
                overflow: "hidden",
                padding: "5px",
              }}
            >
              <BoxMui sx={{ display: "flex", padding: "5px 0", width: "100%" }}>
                <BoxMui
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "5px 10px",
                    flexWrap: "wrap",
                    gap: "5px",
                    width: "100%",
                    flex: "1 1 0%",
                  }}
                >
                  <BoxMui
                    sx={{
                      padding: "4px 6px",
                      boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
                      borderRadius: "10px",
                      border: "1px solid rgb(230, 230, 230)",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        margin: "0px",
                        fontFamily:
                          "__LexendFont_7838d2, __LexendFont_Fallback_7838d2",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        fontSize: "9px",
                      }}
                    >
                      ⏳ Posted {postedDuration} days
                      ago
                    </Typography>
                  </BoxMui>
                </BoxMui>
              </BoxMui>
              <CardContent sx={{ paddingTop: "0px" }}>
                <BoxMui sx={{ display: "flex", gap: "0.5rem" }}>
                  <BoxMui
                    component="img"
                    sx={{
                      height: "40px",
                      width: "40px",
                      maxHeight: { xs: 30, md: 50 },
                      maxWidth: { xs: 30, md: 50 },
                    }}
                    alt="Company Logo"
                    src={jobs.logoUrl}
                  />
                  <BoxMui>
                    <BoxMui>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          marginBottom: "3px",
                          color: "#8b8b8b",
                        }}
                      >
                        {jobs.companyName}
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        {capitalize(jobs.jobRole)}
                      </Typography>
                    </BoxMui>
                    <Typography fontSize="small">
                      {capitalize(jobs.location)}
                    </Typography>
                  </BoxMui>
                </BoxMui>
                <Typography paragraph={true} fontWeight={"200"}>
                  Estimated Salary: {jobs.maxJdSalary ? "" : "From "}
                  {jobs.minJdSalary ? "$" + jobs.minJdSalary : "Upto"}{" "}
                  {jobs.maxJdSalary && jobs.minJdSalary ? " - " : ""}
                  {jobs.maxJdSalary ? jobs.maxJdSalary + " K" : ""}
                </Typography>
                <BoxMui>
                  <BoxMui sx={{ height: "250px", overflow: "hidden" }}>
                    {" "}
                    <Typography sx={{ fontSize: "1rem", lineHeight: "1.5" }}>
                      About Company:
                    </Typography>
                    <BoxMui
                      sx={{
                        fontSize: "14px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        About us
                      </Typography>
                      <Typography
                        paragraph={true}
                        sx={{
                          whiteSpace: "wrap",
                          textOverflow: "ellipsis",
                          overflow: "",
                          height: "160px",
                        }}
                        fontWeight={"150"}
                      >
                        {jobs.jobDetailsFromCompany}
                      </Typography>
                      <BoxMui
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          height: "30px",
                          zIndex: 0,
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        <ButtonMui
                          sx={{ zIndex: "0" }}
                          onClick={() => {
                            handleOpen();
                            setJobDesc(jobs.jobDetailsFromCompany);
                          }}
                        >
                          View Job
                        </ButtonMui>
                      </BoxMui>
                    </BoxMui>
                  </BoxMui>
                </BoxMui>
                <BoxMui>
                  {jobs.minExp == null ? (
                    <Typography sx={{ height: "45px" }}></Typography>
                  ) : (
                    <>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          letterSpacing: "1px",
                          marginBottom: "3px",
                        }}
                      >
                        Minimum Experience
                      </Typography>

                      <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {jobs.minExp} years
                      </Typography>
                    </>
                  )}
                </BoxMui>
              </CardContent>{" "}
              <BoxMui
                sx={{
                  width: "90%",
                  padding: "0 15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                {" "}
                <BoxMui
                  sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                    gap: "0.5rem",
                  }}
                >
                  <ButtonMui
                    sx={{
                      backgroundColor: "rgb(85, 239, 196)",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "rgb(85, 239, 196)",
                      },
                      width: "100%",
                      padding: "8px 18px",
                      borderRadius: "8px",
                      margin: "5px 0",
                      textTransform: "none",
                    }}
                    component={Link}
                    to={jobs.jdUid}
                    target="_blank"
                  >
                    ⚡ Easy Apply
                  </ButtonMui>
                </BoxMui>
                <BoxMui
                  sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                    gap: "0.5rem",
                  }}
                >
                  <ButtonMui
                    sx={{
                      backgroundColor: "rgb(73, 67, 218)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgb(73, 67, 218)",
                      },
                      width: "100%",
                      padding: "8px 18px",
                      borderRadius: "8px",
                      margin: "5px 0",
                      textTransform: "none",
                    }}
                    component={Link}
                    target="_blank"
                  >
                    <AccountCircleSharpIcon />
                    &nbsp;Unlock referral asks
                  </ButtonMui>
                </BoxMui>
              </BoxMui>
            </PaperMui>
          </Grid>
        ))
      ) : (
        <WebLoader />
      )}
    </>
  );
};

export default Card;
