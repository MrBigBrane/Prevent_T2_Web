import LinkButton from "@/components/buttons/LinkButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MealModal from "@/components/forms/plans/meals/MealModal";
import MealTable from "@/components/tables/meal/MealTable";
import { Typography } from "@mui/material";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'

export default function MealPlanPage({ searchParams }) {

    return (
      <>
        {searchParams?.add && (
          <MuiSuccess severity="success">Activity Added!</MuiSuccess>
        )}
        {searchParams?.delete && (
          <MuiSuccess severity="success">
            Meal Plan Successfully Deleted!
          </MuiSuccess>
        )}
        {searchParams?.edit && (
          <MuiSuccess severity="success">
            Meal Plan Successfully Edited!
          </MuiSuccess>
        )}
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Meal Plan
        </Typography>
        <MealTable />
      </>
    );
}