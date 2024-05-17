import { Button } from "@mui/material";

export default function MuiButton({ startIcon, label, type, click, color, variant, style }) {
    return (
      <Button type={type} variant={variant ? variant : "contained"} startIcon={startIcon} onClick={click} color={color} style={style} >
        {label}
      </Button>
    );
}