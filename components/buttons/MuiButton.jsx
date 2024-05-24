import { Button } from "@mui/material";

export default function MuiButton({ label, variant, ...props }) {
    return (
      <Button variant={variant ? variant : "contained"} {...props} >
        {label}
      </Button>
    );
}