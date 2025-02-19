'use client';

import MuiButton from "@/components/buttons/MuiButton";
import editClass from '@/lib/coach/class/editClass';
import MuiTextField from '@/components/inputs/MuiTextField'
import { useFormState } from "react-dom";
import { useState } from "react";
import { Box, Divider, IconButton, LinearProgress, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteClassModal from '../class/DeleteClassModal'

export default function AddClassCoach({ data, image, children }) {
    const [state, formAction] = useFormState(editClass, { message: null })
    const [loading, setLoading] = useState(false);
    const [locked, setLocked] = useState(true);

    function handleLock() {
        setLocked(!locked);
    }

    function handleLoading() {
      setLoading(true);
    }


    return (
      <Box
        sx={{
          width: "30%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        
        <Paper>
          {image ? <img src={image} alt="" /> : null}
          {loading ? (
            <Box width={"100%"}>
              <LinearProgress color="success" />
            </Box>
          ) : null}
          <form action={formAction}>
            <Box padding={2}>
              
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h6" padding={1}>
                  {children}
                </Typography>
                <Tooltip title={locked ? "Unlock to Edit" : "Lock Changes"}>
                  <IconButton onClick={handleLock}>
                    {locked ? <LockIcon /> : <LockOpenIcon />}
                  </IconButton>
                </Tooltip>
              </Box>
              <Box>
                <MuiTextField
                  id="code"
                  label="Code"
                  variant="outlined"
                  name="code"
                  defaultValue={data.code}
                  type="hidden"
                  color="success"
                  style={{ padding: "auto" }}
                />
                <MuiTextField
                  id="classname"
                  label="Class Name"
                  variant="outlined"
                  name="classname"
                  defaultValue={data.class_name}
                  type=""
                  color="success"
                  style={{ padding: "auto" }}
                  disabled={locked}
                />
                <br />
                <MuiTextField
                  id="coachid"
                  label="Coach ID (If any)"
                  variant="outlined"
                  name="coachid"
                  defaultValue={data.coachid}
                  type=""
                  color="success"
                  style={{ padding: "auto" }}
                  disabled={locked}
                />
                <br />
                <MuiTextField
                  id="cohortid"
                  label="Cohort ID (If any)"
                  variant="outlined"
                  name="cohortid"
                  defaultValue={data.cohortid}
                  type=""
                  color="success"
                  style={{ padding: "auto" }}
                  disabled={locked}
                />
                <br />
                <MuiTextField
                  id="orgcode"
                  label="Org Code (If any)"
                  variant="outlined"
                  name="orgcode"
                  defaultValue={data.orgcode}
                  type=""
                  color="success"
                  style={{ padding: "auto" }}
                  disabled={locked}
                />
                <br />
                <MuiTextField
                  id="meetinglink"
                  label="Meet Link (If any)"
                  variant="outlined"
                  name="meetinglink"
                  defaultValue={data.meet_link ? data.meet_link : null}
                  type=""
                  color="success"
                  style={{ padding: "auto" }}
                  disabled={locked}
                />
                {locked ? null : (
                  <MuiButton
                    click={handleLoading}
                    type="submit"
                    startIcon={null}
                    label="Save Changes"
                    color="success"
                    style={{ marginBottom: "10px" }}
                  />
                )}
                <br />
                <Divider />
                <br />
                <DeleteClassModal code={data.code} />
              </Box>
            </Box>
          </form>
        </Paper>
      </Box>
    );
}