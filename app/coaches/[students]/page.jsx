'use server';

import { createClient } from "@/utils/supabase/server";
import fetchCoach from "@/components/serverfunctions/coach/fetchCoach";
import Link from "next/link";
import { Avatar, Box, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import MuiAvatar from "@/components/buttons/avatar/MuiAvatar";
import { redirect } from "next/navigation";
import MuiButton from "@/components/buttons/MuiButton";
import DetailsButton from "@/components/buttons/coaching/DetailsButton"
import minutesPerWeek from "@/components/serverfunctions/coach/coachview/minutesPerWeek";
import weightPerWeek from "@/components/serverfunctions/coach/coachview/weightPerWeek";
import CoachStudents from "@/components/tables/coachview/classview/CoachStudents";

export default async function StudentsPage({ params }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("class_codes", params.students.substring(0, 6));

  let classCopy = Array.from(await fetchCoach("coach_codes"));
  // add check for if coach owns that class

  if (classCopy.user === false) {
    redirect("/login?message=Unauthorized access! Please login first.");
  } else if (!classCopy[0]) {
    redirect("/profile/becomecoach?unauthorized=true");
  }
  let matches = false;
  for (let i = 0; i < classCopy.length; i++) {
    if (classCopy[i].code === params.students.substring(0, 6)) {
      matches = true;
      break;
    }
  }
  if (!matches) {
    redirect("/coaches?fake=true");
  }
  if (!user.id) {
    redirect("/login?message=Unauthorized access! Please login first.");
  }

  let userTable = await Promise.all(data.map(async (row) => {
    let weeklyMinutes = Array.from(await minutesPerWeek(row.id));
    let weeklyWeight = Array.from(await weightPerWeek(row.id));
    let minutes = weeklyMinutes[0][weeklyMinutes.length - 1];
    let index = weeklyWeight[0].length - 1;
    let bmi;
    while (index >= 0) {
      if (weeklyWeight[0][index] !== null) {
        break;
      }
      index--;
    }
    if (index !== -1) {
      bmi = ((weeklyWeight[0][index] / row.height ** 2) * 703).toFixed(2);
    } else {
      bmi = null;
    }

    const publicURL = await supabase.storage
      .from("user_avatars")
      .getPublicUrl(row.avatar_path);
    const avatarPath = publicURL.data.publicUrl;

    return {
      id: row.id,
      name: row.name,
      minutes: minutes,
      bmi: bmi ? bmi : "N/A",
      avatar_path: row.avatar_path ? avatarPath : null,
      joined_class_at: row.joined_class_at.substring(0, 10),
    };
  }));

  // console.log(avatarPath)

  let userTableRender = userTable.map((row) => (
    <Grid
      item
      minWidth={150}
      xs={6}
      sm={2}
      md={1}
      padding={2}
      alignContent={"center"}
      key={row.id}
      sx={{ display: "flex", width: "100%" }}
    >
      <Paper
        elevation={10}
        sx={{
          // padding: 2,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Box textAlign={"center"}>
          <Link href={`/coaches/${params.students}/${row.id}`} key={row.id}>
            <IconButton
              size="large"
              style={{ textAlign: "center" }}
              aria-haspopup="true"
            >
              {row.avatar_path != null ? (
                <Avatar src={row.avatar_path} style={{ width: 75, height: 75 }} />
              ) : (
                <MuiAvatar name={row.name} style={{ width: 75, height: 75 }} />
              )}
            </IconButton>
          </Link>
        </Box>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          {row.name}
        </Typography>
        <DetailsButton
          name={row.name}
          minutes={row.minutes}
          joindate={row.joined_class_at}
          bmi={row.bmi ? row.bmi : "N/A"}
          viewmore={`/coaches/${params.students}/${row.id}`}
        />
      </Paper>
    </Grid>
  ));

  return (
    <>
      <Typography variant="h5" textAlign={"center"} marginBottom={2}>
        Students
      </Typography>
      <CoachStudents avatarView={userTableRender} params={params} data={userTable}  />

      {!data[0] && (
        <Typography variant="h6" style={{ textAlign: "center" }}>
          No students in your class yet!
        </Typography>
      )}
    </>
  );
}