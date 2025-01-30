'use client';

import { useEffect, useState } from 'react';
import MuiTable from '../../MuiTable';
import { Box, Button, Grid, TextField } from '@mui/material';
import CoachCard from './CoachCard';
import MuiTextField from '@/components/inputs/MuiTextField';

export default function CoachStats({ data }) {
  const [cardMode, setCardMode] = useState(true);

  const [dataExtracted, setDataExtracted] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    let dataExtracted = Object.assign([], data);
    

    dataExtracted = dataExtracted.map((row) => {
      let createdAt = new Date(row.created_at);
      row.created_at = createdAt.toISOString().substring(0, 10);
      return {
        id: row.id,
        created_at: row.created_at,
        current_weight: row.current_weight,
        attendance: row.attendance.title,
        sesstype: row.sesstype.title.substring(
          0,
          row.sesstype.title.indexOf(" ")
        ),
      };
    });

    setDataExtracted(dataExtracted);
  }, [data]);
  


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
          {/* <MuiText field="Activity" /> */}

          {cardMode ? (
            <>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Grid container>
                {dataExtracted &&
                  dataExtracted.map((row) => {
                    if (
                      search === "" ||
                      row.created_at
                        .substring(0, 10)
                        .toUpperCase()
                        .includes(search) ||
                      row.created_at
                        .substring(0, 10)
                        .toLowerCase()
                        .includes(search) ||
                      row.created_at.substring(0, 10).includes(search)
                    ) {
                      return (
                        <Grid
                          item
                          minWidth={150}
                          xs={6}
                          sm={2}
                          md={4}
                          padding={2}
                          alignContent={"center"}
                          key={row.id}
                        >
                          <CoachCard
                            key={row.id}
                            title={row.created_at.substring(0, 10)}
                            title1="Weight"
                            title2="Attendance"
                            title3="Session Type"
                            field1={row.current_weight}
                            field2={row.attendance}
                            field3={row.sesstype}
                            id={row.id}
                          />
                        </Grid>
                      );
                    }
                  })}
              </Grid>
            </>
          ) : (
            <MuiTable
              page="coachlog?delete=true"
              table={"lifestyle_coach_log"}
              data={dataExtracted}
              field2="attendance"
              title2="Attendance"
              field3="sesstype"
              title3="Session Type"
              field1="current_weight"
              title1="Weight"
            />
          )}
        </>
      );
    
}