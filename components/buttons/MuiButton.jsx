import { Button } from "@mui/material";

export default function MuiButton({ click, label, variant, ...props }) {
    return (
      <Button variant={variant ? variant : "contained"} onClick={click} {...props} >
        {label}
      </Button>
    );
}