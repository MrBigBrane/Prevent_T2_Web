import ActivityForm from '@/components/forms/userforms/ActivityForm'
import { Box, Paper, Typography } from '@mui/material'

export default function AddActivity() {
    return (
        <>
            <Box sx={{ width: "30%", margin: "auto", display: "flex", justifyContent: "center" }}>
                <Paper elevation={10} square={false}>
                    <Box>
                        <Typography variant="h4" padding={1}>Add Activity</Typography>
                        <ActivityForm />
                    </Box>
                </Paper>
            </Box>            
        </>
        
    )
}