import { Button } from "@mui/material";

export default function MuiButton({ startIcon, label, type, click, color }) {
    return (
      <Button type={type} variant="contained" startIcon={startIcon} onClick={click} color={color} >
        {label}
      </Button>
    );
}