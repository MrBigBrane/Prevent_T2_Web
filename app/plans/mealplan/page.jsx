import LinkButton from "@/components/buttons/LinkButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MealModal from "@/components/forms/plans/meals/MealModal";
import MealTable from "@/components/tables/meal/MealTable";
import { Typography } from "@mui/material";

export default function MealPlanPage() {

    return (
      <>
        <LinkButton
          href="/profile"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{position : 'absolute', left: '1rem', top: '5rem'}}
        />
        <MealModal style={{ position: "absolute", right: "1rem", top: "5rem" }} />
        <Typography variant="h5" style={{ textAlign: "center" }}>Meal Plan</Typography>
        <MealTable />
        
      </>
    );
}