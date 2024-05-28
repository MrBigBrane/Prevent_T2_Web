'use client';

import { useFormState } from "react-dom"
import editClassName from '@/lib/coach/class/editClassName'
import { Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import MuiTextField from '@/components/inputs/MuiTextField'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";


export default function EditClassName({ className, code, ...props }) {
    const [state, formAction] = useFormState(editClassName, { message: null }) 
    const [edit , setEdit] = useState(false)

    function handleEdit() {
        setEdit(!edit)
    }

    return (
      <div>
        <form action={formAction}>
          <Box display={"flex"} sx={{ position: "fixed", top: 64}} {...props}>
            <MuiTextField
              name="className"
              defaultValue={className}
              required
              disabled={!edit}
            />
            <MuiTextField
              defaultValue={code}
              name="rowId"
              id="rowId"
              label="id"
              variant="filled"
              type="hidden"
            />
            {!edit ? (
              <IconButton label="Edit" onClick={handleEdit}>
                <EditIcon />
              </IconButton>
            ) : null}
            {edit ? (
              <>
                <IconButton label="Save" type="submit">
                  <CheckIcon />
                </IconButton>
                <IconButton label="Close" onClick={handleEdit}>
                  <CloseIcon />
                </IconButton>
              </>
            ) : null}
            
          </Box>
        </form>
      </div>
    );
}