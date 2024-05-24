'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'
import resetEmail from '@/lib/reset/resetEmail'
import { Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';

export default function EmailReset() {
    const [state, formAction] = useFormState(resetEmail, { message: null }) 

    return (
      <div //className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2"
      >
        <form
          action={formAction}
          //className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        >
          <Box alignItems="inline">
            <Grid containter spacing={2}>
              <Grid item>
                <input
                  //className="rounded-md px-4 py-2 bg-inherit border mb-6"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </Grid>
              <Grid item>
                <IconButton label="Edit" type="submit">
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
    );
}