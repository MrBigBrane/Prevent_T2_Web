import MealPlan from '@/components/forms/plans/meals/MealPlan'
import { Box, Paper, Typography } from '@mui/material'

export default function AddActivity() {
    return (
        <>
            <Box sx={{ width: "30%", margin: "auto", display: "flex", justifyContent: "center" }}>
                <Paper elevation={10} square={false}>
                    <Typography variant="h4" padding={1}>Add Meal Plan</Typography>
                    <MealPlan />
                </Paper>
            </Box>
        </>
        
    )
}