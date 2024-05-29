import LinkButton from "@/components/buttons/LinkButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MealModal from "@/components/forms/plans/meals/MealModal";
import MealTable from "@/components/tables/meal/MealTable";
import { Typography } from "@mui/material";

export default function MealPlanPage() {

    return (
      <>
        <Typography variant="h5" style={{ textAlign: "center" }}>Meal Plan</Typography>
        <MealTable />
      </>
    );
}