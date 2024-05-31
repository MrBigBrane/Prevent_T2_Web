'use client';

import MuiButton from "@/components/buttons/MuiButton";
import codeGen from '@/components/serverfunctions/coach/codeGen.js'
import MuiTextField from '@/components/inputs/MuiTextField'
import { useFormState } from "react-dom";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function AddClassCoach({ click, children }) {
    const [state, formAction] = useFormState(codeGen, { message: null })
    const [loading, setLoading] = useState(false);

    function handleLoading() {
        setLoading(true);
    }


    return (
      <>
        {loading ? (
          <Box width={"100%"}>
            <LinearProgress color="success" />
          </Box>
        ) : null}
        <form action={formAction}>
          <Box padding={2}>
            <Box>
              <Typography variant="h6" padding={1}>{children}</Typography>
            </Box>
            <Box>
              <MuiTextField
                id="classname"
                label="Class Name"
                variant="outlined"
                name="classname"
                defaultValue=""
                type=""
                color="success"
              />
              <br />
              <MuiButton
                click={click ? click : handleLoading}
                type="submit"
                startIcon={null}
                label="Create Class"
                color="success"
              />
            </Box>
          </Box>
        </form>
      </>
    );
}