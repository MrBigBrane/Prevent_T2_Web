'use server';

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import nrivalogo from '../assets/nrivalogo.png'
import nrivarunner from '../assets/nrivarunner.jpg'
import nrivacoach from '../assets/nrivacoach.jpg'

export default async function Index() {

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 20 }}>
        Home
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Image src={nrivalogo} alt="NRIVA Logo" />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Welcome to NRIVAs Diabetes Prevention Program! <br />
          NRIVA Diabetes Prevention Program is part of a partnership with the
          CDC <br />
          dedicated to helping people manage their diabetes. <br />
          We will help you get and maintain great lifestyle habits! <br /> Just
          start by creating an account!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          If you're a patient <br />
          you can use our program paired with this website to track your
          progress. <br />
          Incremental steps are key to a healthy lifestyle <br /> and we're here
          to help you get there!
        </Typography>
        <Image src={nrivarunner} alt="NRIVA Logo" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Image src={nrivacoach} alt="NRIVA Logo" />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          If you're a coach{" "}
          <br />
          looking to help your patients achieve their goals <br /> we have a
          full suite of programs to help you get there!
        </Typography>
      </Box>
    </Box>
  );
}
