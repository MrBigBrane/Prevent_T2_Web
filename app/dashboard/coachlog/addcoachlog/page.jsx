import CoachLog from '@/components/forms/userforms/CoachForm'
import { Box, Paper, Typography } from '@mui/material'

export default function AddCoachLog() {
    return (
      <>
        <Box style={{ width: "100%" }}>
          <Paper elevation={10} square={false}>
            <Box>
              <Typography variant="h4" padding={1}>
                Add Coach Log
              </Typography>
              <CoachLog />
            </Box>
          </Paper>
        </Box>
      </>
    );
}