import AddClassCoach from "@/components/forms/coaching/AddClass";
import { Box, Paper } from "@mui/material";

export default function AddClass() {
    return (
      <>
        <Box sx={{ width: "30%", margin: "auto", display: "flex", justifyContent: "center" }}>
          <Paper elevation={10} square={false} >
            <Box width={"100%"}>
                <AddClassCoach>Add Class</AddClassCoach>
            </Box>
          </Paper>
        </Box>
      </>
    );
}