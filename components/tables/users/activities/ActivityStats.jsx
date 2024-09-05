'use client';

import { useEffect, useState } from 'react';
import MuiTable from '../../MuiTable';
import { Box, Button, Grid, TextField } from '@mui/material';
import ActivityCard from './ActivityCard';
import MuiTextField from '@/components/inputs/MuiTextField';
import MuiText from './MuiText';

export default async function ActivityTable({ data }) {
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
        activity: row.activity,
        minutes: row.minutes,
        difficulty: row.difficulty.title,
        exercise_type: row.exercise_type.title,
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
          <MuiTextField id="outlined-basic" label="Search" variant="outlined" />
          <MuiText field="Activity" />
          <TextField id="outlined-basic" label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)}/>
          {/* {cardMode ? ( */}
            <>
              <Grid container>
                {dataExtracted &&
                  dataExtracted.map((row) => (
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
                      <ActivityCard
                        key={row.id}
                        title={row.activity}
                        title1="Exercise Type"
                        title2="Duration"
                        title3="Difficulty"
                        field1={row.exercise_type}
                        field2={row.minutes}
                        field3={row.difficulty}
                      />
                    </Grid>
                  ))}
              </Grid>
            </>
          {/* ) : (
            <MuiTable
              page="activities?delete=true"
              title="Activity Logger"
              table={"activity_log"}
              data={dataExtracted}
              field1="activity"
              title1="Activity Name"
              field2="minutes"
              title2="Minutes"
              field3="difficulty"
              title3="Perceived Difficulty"
            />
          )} */}
        </>
      );
    
}