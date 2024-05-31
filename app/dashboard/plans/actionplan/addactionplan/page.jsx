import ActionPlan from '@/components/forms/plans/action/ActionPlan'
import { Box } from '@mui/material'
import { Paper, Typography } from '@mui/material'

export default function AddActivity() {
    return (
        <>
            <Box style={{ width: "100%" }}>
                <Paper elevation={10} square={false}>
                    <Typography variant="h4" padding={1}>Add Action Plan</Typography>
                    <Box padding={2}>
                        <ActionPlan />
                    </Box>
                </Paper>
            </Box>
        </>
        
    )
}