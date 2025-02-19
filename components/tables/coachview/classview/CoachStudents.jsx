'use client'

import { useState } from "react";
import { Avatar, Box, Button, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import CsvButton from "@/components/buttons/download/CsvButton";
import UsersTable from './UsersTable'

export default function CoachStudents({ avatarView, params, data }) {
    const [cardMode, setCardMode] = useState(true);
    function cardModeChange() {
        setCardMode((cardMode) => !cardMode);
      };
    
    return (
      <>
        <Button
          onClick={cardModeChange}
          variant="contained"
          style={{ margin: "1rem" }}
        >
          {cardMode ? "Table Mode" : "Card Mode"}
        </Button>
        {cardMode ? (
            <Grid container spacing={0}>
              {avatarView}  
            </Grid>
          
        ) : 
          <>
            <CsvButton
              searchValue={params.students.substring(0, 6)}
              style={{ position: "absolute", right: "3rem", bottom: "2rem" }}
            />

            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                padding: "20px",
                bottompadding: "0px",
                // marginTop: "3rem",
              }}
            >
              <UsersTable data={data} />
            </Box>
          </>}
      </>
    );
    

   
}