import LinkButton from "@/components/buttons/LinkButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MealModal from "@/components/forms/plans/meals/MealModal";
import MealTable from "@/components/tables/meal/MealTable";

export default function MealPlanPage() {

    return (
        <>
            <LinkButton href="/profile" label="Back" type={null} startIcon={<ArrowBackIcon />} />
            <h1>Meal Plan</h1>
            <MealTable />
            <MealModal />
        </>
    )
}