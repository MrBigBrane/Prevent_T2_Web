'use client';

import { useState } from 'react';
import MuiTable from '../../MuiTable';
import { Box, Button, Grid, IconButton, TextField } from '@mui/material';
import ActivityCard from './ActivityCard';
import MuiTextField from '@/components/inputs/MuiTextField';
import MuiText from './MuiText';

export default function ActivityTable({ data }) {
  const [cardMode, setCardMode] = useState(true);

  const [search, setSearch] = useState("");

  let dataEx = Object.assign([], data);

  dataEx = dataEx.map((row) => {
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

  function cardModeChange() {
    setCardMode((cardMode) => !cardMode);
  }

  return (
    <>
      <Button
        onClick={cardModeChange}
        variant="contained"
        style={{ margin: "1rem" }}
      >
        {cardMode ? "Table View" : "Card View"}
      </Button>

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
            {dataEx &&
              dataEx.map((row) => {
                if (
                  search === "" ||
                  row.activity.toUpperCase().includes(search) ||
                  row.activity.toLowerCase().includes(search) ||
                  row.activity.includes(search)
                ) {
                  return (
                    <Grid
                      item
                      minWidth={300}
                      xs={12}
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
                        date={row.created_at}
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
          page="activities?delete=true"
          title="Activity Logger"
          table={"activity_log"}
          data={dataEx}
          field1="activity"
          title1="Activity Name"
          field2="exercise_type"
          title2="Exercise Type"
          field3="minutes"
          title3="Minutes"
          field4="difficulty"
          title4="Perceived Difficulty"
        />
      )}
    </>
  );
}