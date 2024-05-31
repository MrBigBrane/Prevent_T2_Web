import ActivityForm from '@/components/forms/userforms/ActivityForm'
import { Box, Paper, Typography } from '@mui/material'

export default function AddActivity() {
    return (
        <>
            <Box style={{ width: "100%" }}>
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