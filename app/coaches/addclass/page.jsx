import AddClassCoach from "@/components/forms/coaching/AddClass";
import { Box, Paper } from "@mui/material";

export default function AddClass() {
    return (
      <>
        <Box sx={{ width: "30%", margin: "auto", marginTop: "15rem" }}>
          <Paper elevation={10} square={false}>
            <AddClassCoach>Add Class</AddClassCoach>
          </Paper>
        </Box>
      </>
    );
}