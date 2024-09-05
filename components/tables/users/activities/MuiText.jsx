import { TextField } from "@mui/material";
import { useState } from "react";

export default function MuiText({ field }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <TextField
            id="outlined-basic"
            label={field}
            variant="outlined"
            onChange={handleChange}
            value={value}
            name="{field}input"
        />
    );
}