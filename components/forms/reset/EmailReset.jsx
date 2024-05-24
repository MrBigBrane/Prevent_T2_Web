'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'
import resetEmail from '@/lib/reset/resetEmail'
import { Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import MuiTextField from '../../inputs/MuiTextField'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";


export default function EmailReset() {
    const [state, formAction] = useFormState(resetEmail, { message: null }) 
    const [edit , setEdit] = useState(false)

    function handleEdit() {
        setEdit(!edit)
    }

    return (
      <div //className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2"
      >
        <form
          action={formAction}
          //className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        >
          <Box alignItems="inline">
            <Grid container spacing={2}>
              <Grid item>
                <MuiTextField
                  //className="rounded-md px-4 py-2 bg-inherit border mb-6"
                  name="email"
                  placeholder="you@example.com"
                  required
                  disabled={!edit}
                />
              </Grid>
              <Grid item>
                {!edit ? (
                  <IconButton label="Edit" onClick={handleEdit}>
                    <EditIcon />
                  </IconButton>
                ) : null}
                {edit ? (
                  <>
                    <IconButton label="Save" type="submit" onClick={handleEdit}>
                      <CheckIcon />
                    </IconButton>
                    <IconButton label="Close" onClick={handleEdit}>
                      <CloseIcon />
                    </IconButton>
                  </>
                ) : null}
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
    );
}