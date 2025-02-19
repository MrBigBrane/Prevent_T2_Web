'use client';

import { useEffect, useState } from 'react';
import MuiTable from '../../MuiTable';
import { Box, Button, Grid, TextField } from '@mui/material';
import MealCard from './MealCard';
import MuiTextField from '@/components/inputs/MuiTextField';

export default function MealStats({ data }) {
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
        meal_type: row.meal_type.title,
        item: row.item,
        amount: row.amount,
        calories: row.calories,
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
                          minWidth={200}
                          xs={6}
                          sm={2}
                          md={4}
                          padding={2}
                          alignContent={"center"}
                          key={row.id}
                        >
                          <MealCard
                            key={row.id}
                            title={row.created_at.substring(0, 10)}
                            title1="Meal Type"
                            title2="Item"
                            title3="Amount"
                            title4="Calories"
                            field1={row.meal_type}
                            field2={row.item}
                            field3={row.amount}
                            field4={row.calories}
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
          page="mealplan?delete=true"
          title="Activity Logger"
          data={dataExtracted}
          field1="meal_type"
          title1="Meal Type"
          field2="item"
          title2="Item"
          field3="amount"
          title3="Amount"
          field4="calories"
          title4="Calories"
        />
          )}
        </>
      );
    
}