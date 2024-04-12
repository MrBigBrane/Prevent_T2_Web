import InputField from "../../components/lifestylelog/InputField";

export default function ActivityPage() {
    return (
        <>
            <form>
                <InputField name="excercise" type="text">Excercise Type</InputField>
                {/* Will add dropdown menu for exercise types: cardio, strength, etc. */}
                <InputField name="minutes" type="number">Minutes</InputField>
                <InputField name="difficulty" type="text">Difficulty</InputField>
                {/* Will add select dropdown for difficulty levels */}
                <button type="submit">Add</button>
            </form>
        </>
    )
}